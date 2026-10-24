/**
 * Single source of truth for site-wide configuration
 * Strictly adheres to Section 1 of the SEO Master Prompt.
 * Unknown or unconfirmed values must remain undefined.
 */

export const VEHICLES = [
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
] as const;

export const SITE_CITIES = [
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
] as const;

export type SiteConfig = {
  url: string;
  name: string;
  phone: string;
  phoneDisplay: string;
  phoneFormatted: string;
  whatsapp: string;
  email: string;
  owner?: string;
  tagline: string;
  description: string;
  // Optional: leave undefined until the owner confirms the real value.
  address?: {
    street?: string;
    city: string;
    state: string;
    postalCode?: string;
    country: string;
  };
  geo?: { lat: number; lng: number };
  googleBusinessUrl?: string;
  googleReviewUrl?: string;
  rating?: { value: number; count: number }; // visible text only; confirm against live Google profile
  logo?: string; // absolute URL of a real logo file
  image?: string; // absolute URL of a real social/OG image
  open24x7?: boolean; // true ONLY if the owner confirms round-the-clock service
  gaId?: string;
  gscVerification?: string;
  social?: {
    facebook?: string;
    instagram?: string;
    youtube?: string;
  };
  claimsConfirmed?: boolean;
  stats?: {
    trips?: number;
  };
  vehicles: typeof VEHICLES;
  cities: typeof SITE_CITIES;
};

export const SITE: SiteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.veloracabs.in",
  name: "Velora Cabs",
  phone: "+918780311279",
  phoneDisplay: "+91 87803 11279",
  phoneFormatted: "+918780311279",
  whatsapp: "https://wa.me/918780311279",
  email: "veloracabs07@gmail.com",
  owner: "Dharmeshbhai B. Kava",
  tagline: "Safe Rides. On Time. Every Time.",
  description:
    "Book local, airport and outstation AC cabs from Bhavnagar to Ahmedabad, Vadodara, Surat, Mumbai & more. Call +91 87803 11279 for a quote.",
  // Confirmed social profile:
  social: {
    instagram: "https://www.instagram.com/velora_cabs_official/",
  },
  // Default values for brand assets:
  logo: "https://www.veloracabs.in/icon-512.png",
  image: "https://www.veloracabs.in/images/og-velora.jpg",
  vehicles: VEHICLES,
  cities: SITE_CITIES,
};

export const SITE_URL = SITE.url;
