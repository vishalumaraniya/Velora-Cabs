import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const pickup = searchParams.get('pickup')?.trim();
  const drop = searchParams.get('drop')?.trim();

  if (!pickup || !drop) {
    return NextResponse.json(
      { error: 'Both pickup and drop parameters are required' },
      { status: 400 }
    );
  }

  const googleApiKey =
    process.env.GOOGLE_MAPS_API_KEY || process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  // 1. If real Google Maps API Key is provided, use Google Distance Matrix / Directions API
  if (googleApiKey && googleApiKey.trim() !== '') {
    try {
      const googleUrl = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(
        pickup + ', India'
      )}&destinations=${encodeURIComponent(drop + ', India')}&key=${googleApiKey}&mode=driving`;

      const gRes = await fetch(googleUrl, { next: { revalidate: 3600 } });
      if (gRes.ok) {
        const gData = await gRes.json();
        const element = gData?.rows?.[0]?.elements?.[0];

        if (element && element.status === 'OK') {
          const meters = element.distance?.value || 0;
          const distanceKm = Math.round(meters / 1000);
          const durationText = element.duration?.text || '';

          return NextResponse.json({
            distanceKm,
            durationText,
            source: 'Google Distance Matrix API',
            isEstimate: false,
          });
        }
      }
    } catch (gErr) {
      console.warn('[Distance API] Google Maps API error, using OSRM fallback:', gErr);
    }
  }

  // 2. High-precision Driving Engine Fallback (OSRM Driving Engine)
  try {
    // Geocode via Nominatim
    const [pRes, dRes] = await Promise.all([
      fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
          pickup + ', India'
        )}&format=json&limit=1`,
        { headers: { 'User-Agent': 'VeloraCabsRouting/1.0' } }
      ),
      fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
          drop + ', India'
        )}&format=json&limit=1`,
        { headers: { 'User-Agent': 'VeloraCabsRouting/1.0' } }
      ),
    ]);

    if (pRes.ok && dRes.ok) {
      const pData = await pRes.json();
      const dData = await dRes.json();

      if (pData?.[0] && dData?.[0]) {
        const pLon = pData[0].lon;
        const pLat = pData[0].lat;
        const dLon = dData[0].lon;
        const dLat = dData[0].lat;

        const osrmUrl = `https://router.project-osrm.org/route/v1/driving/${pLon},${pLat};${dLon},${dLat}?overview=false`;
        const osrmRes = await fetch(osrmUrl);

        if (osrmRes.ok) {
          const osrmData = await osrmRes.json();
          if (osrmData?.routes?.[0]) {
            const route = osrmData.routes[0];
            const distanceKm = Math.round(route.distance / 1000);
            const durationMinutes = Math.round(route.duration / 60);
            const hrs = Math.floor(durationMinutes / 60);
            const mins = durationMinutes % 60;
            const durationText = hrs === 0 ? `${mins}m` : `${hrs}h ${mins}m`;

            return NextResponse.json({
              distanceKm,
              durationText,
              source: 'OSRM Driving Engine',
              isEstimate: false,
            });
          }
        }
      }
    }
  } catch (err) {
    console.error('[Distance API] Fallback error:', err);
  }

  // 3. Fallback response
  return NextResponse.json({
    distanceKm: 200,
    durationText: '4h 00m',
    source: 'Highway Estimate',
    isEstimate: true,
  });
}
