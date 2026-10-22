import { MetadataRoute } from 'next';
import { ROUTES } from '@/data/routes';
import { CITIES } from '@/data/cities';
import { SITE } from '@/data/site';
import { BLOG_POSTS } from '@/data/blog';

const BASE = SITE.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/taxi`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/cab-service`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/airport-taxi`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/outstation-taxi`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/local-city-rides`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/taxi-24x7`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/fleet`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${BASE}/privacy-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/cancellation-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const routePages: MetadataRoute.Sitemap = ROUTES.map((r) => ({
    url: `${BASE}/taxi/${r.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const cityPages: MetadataRoute.Sitemap = CITIES.map((c) => ({
    url: `${BASE}/cab-service/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const fleetPages: MetadataRoute.Sitemap = SITE.vehicles.map((v) => ({
    url: `${BASE}/fleet/${v.id}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...routePages, ...cityPages, ...fleetPages, ...blogPages];
}
