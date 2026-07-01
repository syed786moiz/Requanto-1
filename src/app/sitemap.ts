import type { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://requanto.com';

const routes = [
  '/',
  '/solutions',
  '/products',
  '/services',
  '/industries',
  '/financial-services',
  '/innovation-lab',
  '/agents',
  '/assessment',
  '/cyber-check',
  '/resources',
  '/about',
  '/contact',
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.8,
  }));
}
