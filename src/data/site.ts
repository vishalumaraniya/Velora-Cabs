// Single source of truth for site-wide configuration
// TODO: owner to confirm address, Facebook, YouTube, Google Business Profile

export const SITE = {
  name: 'Velora Cabs',
  url: 'https://www.veloracabs.in',
  tagline: 'Safe Rides. On Time. Every Time.',
  description:
    'Book 24x7 AC cabs from Bhavnagar to Ahmedabad, Surat, Vadodara & Mumbai. Verified drivers, doorstep pickup, fixed fares. Call +91 87803 11279.',
  phone: '+91 87803 11279',
  phoneRaw: '8780311279',
  phoneFormatted: '+918780311279',
  whatsapp: 'https://wa.me/918780311279',
  whatsappNumber: '918780311279',
  email: 'veloracabs07@gmail.com',
  // TODO: owner to confirm full street address
  address: {
    streetAddress: 'TODO: owner to confirm street address',
    addressLocality: 'Bhavnagar',
    addressRegion: 'Gujarat',
    postalCode: 'TODO: owner to confirm',
    addressCountry: 'IN',
  },
  geo: {
    latitude: 21.7645,
    longitude: 72.1519,
  },
  social: {
    instagram: 'https://www.instagram.com/velora_cabs_official/',
    // TODO: owner to confirm Facebook page URL
    facebook: '',
    // TODO: owner to confirm YouTube channel URL
    youtube: '',
    // TODO: owner to confirm Google Business Profile URL
    googleBusinessProfile: '',
  },
  vehicles: [
    {
      id: 'dzire',
      name: 'Maruti Swift Dzire',
      type: 'Sedan',
      passengers: 4,
      luggage: 2,
      image: '/images/velora_dzire.webp',
      fallbackImage: '/images/velora_dzire.png',
    },
    {
      id: 'ertiga',
      name: 'Maruti Suzuki Ertiga',
      type: 'Family MUV',
      passengers: 6,
      luggage: 4,
      image: '/images/velora_ertiga.webp',
      fallbackImage: '/images/velora_ertiga.png',
    },
    {
      id: 'tempo-traveller',
      name: 'Tempo Traveller',
      type: 'Group/Pilgrimage',
      passengers: 15,
      luggage: 8,
      image: '/images/velora_traveller.webp',
      fallbackImage: '/images/velora_traveller.png',
    },
  ],
  cities: [
    'Bhavnagar',
    'Ahmedabad',
    'Vadodara',
    'Surat',
    'Bharuch',
    'Dahej',
    'Vapi',
    'Daman',
    'Dholera',
    'Mumbai',
    'Bhuj',
    'Gandhidham',
    'Amreli',
    'Palitana',
  ] as const,
  services: [
    'Local City Rides',
    'Airport Transfers',
    'Outstation One-Way',
    'Outstation Round Trip',
    '24x7 Service',
  ],
};

// Returns only real, non-empty social URLs (no TODO placeholders, no empty strings)
export function getRealSocialLinks(): { platform: string; url: string }[] {
  const links: { platform: string; url: string }[] = [];
  if (SITE.social.instagram && !SITE.social.instagram.startsWith('TODO')) {
    links.push({ platform: 'Instagram', url: SITE.social.instagram });
  }
  if (SITE.social.facebook && !SITE.social.facebook.startsWith('TODO')) {
    links.push({ platform: 'Facebook', url: SITE.social.facebook });
  }
  if (SITE.social.youtube && !SITE.social.youtube.startsWith('TODO')) {
    links.push({ platform: 'YouTube', url: SITE.social.youtube });
  }
  return links;
}

// Returns sameAs array with only real URLs for JSON-LD
export function getSameAs(): string[] {
  return getRealSocialLinks().map((l) => l.url);
}

export type CityName = (typeof SITE.cities)[number];
