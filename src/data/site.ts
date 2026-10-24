import { SITE, SiteConfig, SITE_URL } from '@/lib/site';

export { SITE, SITE_URL };
export type { SiteConfig };

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

export type CityName = (typeof SITE_CITIES)[number];

export function getRealSocialLinks(): { platform: string; url: string }[] {
  const links: { platform: string; url: string }[] = [];
  if (SITE.social?.instagram) {
    links.push({ platform: 'Instagram', url: SITE.social.instagram });
  }
  if (SITE.social?.facebook) {
    links.push({ platform: 'Facebook', url: SITE.social.facebook });
  }
  if (SITE.social?.youtube) {
    links.push({ platform: 'YouTube', url: SITE.social.youtube });
  }
  return links;
}

export function getSameAs(): string[] {
  return [
    ...Object.values(SITE.social ?? {}),
    SITE.googleBusinessUrl,
  ].filter(Boolean) as string[];
}
