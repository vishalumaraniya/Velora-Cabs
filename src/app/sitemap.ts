import { MetadataRoute } from 'next';
import { getConfirmedRoutes } from '@/data/routes';
import { getConfirmedCities } from '@/data/cities';
import { SITE } from '@/lib/site';

const BASE = SITE.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Core verified static pages (Section 6 & 10)
  // Note: /privacy-policy, /terms, and /cancellation-policy are draft pages marked noindex, strictly excluded from sitemap per Section 10
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/routes`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/cities`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/services/outstation-taxi`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/services/airport-taxi-transfer`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/services/local-city-cab`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/services/24x7-cab-service`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/fleet`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/fleet/swift-dzire`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/fleet/ertiga`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/fleet/tempo-traveller`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ];

  // Only published & service-confirmed routes (Anti-doorway rule per Section 6)
  const routePages: MetadataRoute.Sitemap = getConfirmedRoutes().map((r) => ({
    url: `${BASE}/routes/${r.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Only published & service-confirmed cities (Anti-doorway rule per Section 6)
  const cityPages: MetadataRoute.Sitemap = getConfirmedCities().map((c) => ({
    url: `${BASE}/taxi-service/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...routePages, ...cityPages];
}
