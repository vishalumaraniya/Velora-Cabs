// Real-time distance and routing utility supporting Google Distance Matrix API, OSRM, and Gujarat Big Cities

export interface LocationCoordinates {
  name: string;
  lat: number;
  lon: number;
}

export interface RouteEstimate {
  distanceKm: number;
  durationText: string;
  isEstimate: boolean;
  routeSummary?: string;
  source?: string;
}

// Major cities across Gujarat & key intercity outstation hubs (No small talukas or villages)
export const GUJARAT_BIG_CITIES = [
  'Ahmedabad',
  'Surat',
  'Vadodara (Baroda)',
  'Rajkot',
  'Bhavnagar',
  'Jamnagar',
  'Junagadh',
  'Gandhinagar',
  'Anand',
  'Bharuch',
  'Ankleshwar',
  'Vapi',
  'Navsari',
  'Valsad',
  'Morbi',
  'Porbandar',
  'Bhuj (Kutch)',
  'Gandhidham',
  'Mehsana',
  'Palanpur',
  'Surendranagar',
  'Veraval (Somnath)',
  'Dwarka',
  'Godhra',
  'Himatnagar',
  'Ahmedabad Airport (AMD)',
  'Surat Airport (STV)',
  'Mumbai (Outstation Hub)',
] as const;

export type GujaratBigCity = (typeof GUJARAT_BIG_CITIES)[number];

// Coordinates for all major Gujarat cities and outstation hubs
export const KNOWN_CITIES: Record<string, LocationCoordinates> = {
  bhavnagar: { name: 'Bhavnagar', lat: 21.7645, lon: 72.1519 },
  ahmedabad: { name: 'Ahmedabad', lat: 23.0225, lon: 72.5714 },
  'ahmedabad airport': { name: 'Ahmedabad Airport (AMD)', lat: 23.0734, lon: 72.6347 },
  'ahmedabad airport (amd)': { name: 'Ahmedabad Airport (AMD)', lat: 23.0734, lon: 72.6347 },
  surat: { name: 'Surat', lat: 21.1702, lon: 72.8311 },
  'surat airport': { name: 'Surat Airport (STV)', lat: 21.1141, lon: 72.7419 },
  'surat airport (stv)': { name: 'Surat Airport (STV)', lat: 21.1141, lon: 72.7419 },
  vadodara: { name: 'Vadodara (Baroda)', lat: 22.3072, lon: 73.1812 },
  baroda: { name: 'Vadodara (Baroda)', lat: 22.3072, lon: 73.1812 },
  'vadodara (baroda)': { name: 'Vadodara (Baroda)', lat: 22.3072, lon: 73.1812 },
  rajkot: { name: 'Rajkot', lat: 22.3039, lon: 70.8022 },
  gandhinagar: { name: 'Gandhinagar', lat: 23.2156, lon: 72.6369 },
  jamnagar: { name: 'Jamnagar', lat: 22.4707, lon: 70.0577 },
  junagadh: { name: 'Junagadh', lat: 21.5222, lon: 70.4579 },
  anand: { name: 'Anand', lat: 22.5645, lon: 72.9289 },
  bharuch: { name: 'Bharuch', lat: 21.7051, lon: 72.9959 },
  ankleshwar: { name: 'Ankleshwar', lat: 21.6264, lon: 73.0152 },
  vapi: { name: 'Vapi', lat: 20.3893, lon: 72.9106 },
  navsari: { name: 'Navsari', lat: 20.9467, lon: 72.9520 },
  valsad: { name: 'Valsad', lat: 20.5992, lon: 72.9342 },
  morbi: { name: 'Morbi', lat: 22.8120, lon: 70.8383 },
  porbandar: { name: 'Porbandar', lat: 21.6417, lon: 69.6293 },
  bhuj: { name: 'Bhuj', lat: 23.2420, lon: 69.6669 },
  'bhuj (kutch)': { name: 'Bhuj (Kutch)', lat: 23.2420, lon: 69.6669 },
  gandhidham: { name: 'Gandhidham', lat: 23.0753, lon: 70.1337 },
  mehsana: { name: 'Mehsana', lat: 23.5880, lon: 72.3693 },
  palanpur: { name: 'Palanpur', lat: 24.1724, lon: 72.4346 },
  surendranagar: { name: 'Surendranagar', lat: 22.7277, lon: 71.6370 },
  somnath: { name: 'Somnath', lat: 20.8880, lon: 70.4013 },
  veraval: { name: 'Veraval (Somnath)', lat: 20.9080, lon: 70.3667 },
  'veraval (somnath)': { name: 'Veraval (Somnath)', lat: 20.8880, lon: 70.4013 },
  dwarka: { name: 'Dwarka', lat: 22.2442, lon: 68.9685 },
  godhra: { name: 'Godhra', lat: 22.7758, lon: 73.6149 },
  himatnagar: { name: 'Himatnagar', lat: 23.5977, lon: 72.9698 },
  mumbai: { name: 'Mumbai', lat: 19.0760, lon: 72.8777 },
  'mumbai (outstation hub)': { name: 'Mumbai', lat: 19.0760, lon: 72.8777 },
};

// Exact driving distances for key Gujarat pairs
const EXACT_HIGHWAY_PAIRS: Record<string, { km: number; duration: string }> = {
  'bhavnagar-surat': { km: 270, duration: '5h 30m' },
  'surat-bhavnagar': { km: 270, duration: '5h 30m' },
  'bhavnagar-ahmedabad': { km: 172, duration: '3h 15m' },
  'ahmedabad-bhavnagar': { km: 172, duration: '3h 15m' },
  'bhavnagar-ahmedabad airport': { km: 185, duration: '3h 30m' },
  'ahmedabad airport-bhavnagar': { km: 185, duration: '3h 30m' },
  'bhavnagar-vadodara': { km: 205, duration: '3h 50m' },
  'vadodara-bhavnagar': { km: 205, duration: '3h 50m' },
  'bhavnagar-baroda': { km: 205, duration: '3h 50m' },
  'baroda-bhavnagar': { km: 205, duration: '3h 50m' },
  'bhavnagar-rajkot': { km: 175, duration: '3h 30m' },
  'rajkot-bhavnagar': { km: 175, duration: '3h 30m' },
  'bhavnagar-mumbai': { km: 650, duration: '11h 30m' },
  'mumbai-bhavnagar': { km: 650, duration: '11h 30m' },
  'baroda-ahmedabad': { km: 110, duration: '2h 00m' },
  'ahmedabad-baroda': { km: 110, duration: '2h 00m' },
  'vadodara-ahmedabad': { km: 110, duration: '2h 00m' },
  'ahmedabad-vadodara': { km: 110, duration: '2h 00m' },
  'ahmedabad-surat': { km: 260, duration: '4h 45m' },
  'surat-ahmedabad': { km: 260, duration: '4h 45m' },
  'ahmedabad-rajkot': { km: 215, duration: '3h 45m' },
  'rajkot-ahmedabad': { km: 215, duration: '3h 45m' },
  'bhavnagar-somnath': { km: 250, duration: '5h 00m' },
  'somnath-bhavnagar': { km: 250, duration: '5h 00m' },
  'bhavnagar-dwarka': { km: 385, duration: '7h 15m' },
  'dwarka-bhavnagar': { km: 385, duration: '7h 15m' },
  'surat-mumbai': { km: 285, duration: '5h 15m' },
  'mumbai-surat': { km: 285, duration: '5h 15m' },
  'bhavnagar-vapi': { km: 380, duration: '7h 00m' },
  'vapi-bhavnagar': { km: 380, duration: '7h 00m' },
  'bhavnagar-bharuch': { km: 220, duration: '4h 15m' },
  'bharuch-bhavnagar': { km: 220, duration: '4h 15m' },
  'bhavnagar-jamnagar': { km: 255, duration: '4h 45m' },
  'jamnagar-bhavnagar': { km: 255, duration: '4h 45m' },
  'bhavnagar-junagadh': { km: 215, duration: '4h 15m' },
  'junagadh-bhavnagar': { km: 215, duration: '4h 15m' },
};

function normalizeName(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[,\-_()]/g, ' ')
    .replace(/\s+/g, ' ');
}

function findKnownCity(query: string): LocationCoordinates | null {
  const norm = normalizeName(query);
  if (KNOWN_CITIES[norm]) return KNOWN_CITIES[norm];

  for (const [key, val] of Object.entries(KNOWN_CITIES)) {
    if (norm.includes(key) || key.includes(norm)) {
      return val;
    }
  }
  return null;
}

const routeCache = new Map<string, RouteEstimate>();

function calculateHaversineDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c * 1.25);
}

function formatDuration(minutes: number): string {
  const hrs = Math.floor(minutes / 60);
  const mins = Math.round(minutes % 60);
  if (hrs === 0) return `${mins}m`;
  if (mins === 0) return `${hrs}h`;
  return `${hrs}h ${mins}m`;
}

/**
 * Main real-time distance calculator
 * 1. Checks memory cache
 * 2. Checks exact highway table
 * 3. Calls /api/distance (which uses Google Distance Matrix API if key provided)
 * 4. Falls back to OSRM / Haversine
 */
export async function calculateRouteDistance(
  pickupRaw: string,
  dropRaw: string
): Promise<RouteEstimate | null> {
  const pickup = pickupRaw.trim();
  const drop = dropRaw.trim();

  if (!pickup || !drop || pickup.length < 2 || drop.length < 2) {
    return null;
  }

  const cacheKey = `${normalizeName(pickup)}->${normalizeName(drop)}`;
  if (routeCache.has(cacheKey)) {
    return routeCache.get(cacheKey)!;
  }

  // 1. Instant check for known pairs (0ms)
  const normPickup = normalizeName(pickup);
  const normDrop = normalizeName(drop);
  const exactKey = `${normPickup}-${normDrop}`;
  if (EXACT_HIGHWAY_PAIRS[exactKey]) {
    const item = EXACT_HIGHWAY_PAIRS[exactKey];
    const result: RouteEstimate = {
      distanceKm: item.km,
      durationText: item.duration,
      isEstimate: false,
      source: 'Verified Gujarat Route',
    };
    routeCache.set(cacheKey, result);
    return result;
  }

  // 2. Query /api/distance (Google Distance Matrix API with OSRM fallback)
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 3500);

    const apiRes = await fetch(
      `/api/distance?pickup=${encodeURIComponent(pickup)}&drop=${encodeURIComponent(drop)}`,
      { signal: controller.signal }
    );
    clearTimeout(timeout);

    if (apiRes.ok) {
      const data = await apiRes.json();
      if (data && typeof data.distanceKm === 'number' && data.distanceKm > 0) {
        const result: RouteEstimate = {
          distanceKm: data.distanceKm,
          durationText: data.durationText || '4h 00m',
          isEstimate: data.isEstimate || false,
          source: data.source || 'Live GPS',
        };
        routeCache.set(cacheKey, result);
        return result;
      }
    }
  } catch {
    // Proceed to client coordinate fallback
  }

  // 3. Known city coordinates fallback
  const pickupKnown = findKnownCity(pickup);
  const dropKnown = findKnownCity(drop);

  if (pickupKnown && dropKnown) {
    const roadKm = calculateHaversineDistance(
      pickupKnown.lat,
      pickupKnown.lon,
      dropKnown.lat,
      dropKnown.lon
    );
    const estMinutes = (roadKm / 55) * 60;
    const result: RouteEstimate = {
      distanceKm: Math.max(20, roadKm),
      durationText: formatDuration(estMinutes),
      isEstimate: true,
      source: 'Highway Distance',
    };
    routeCache.set(cacheKey, result);
    return result;
  }

  // Fallback
  return {
    distanceKm: 220,
    durationText: '4h 15m',
    isEstimate: true,
    source: 'Estimated',
  };
}
