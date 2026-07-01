import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Requanto Technologies',
    short_name: 'Requanto',
    description:
      'Enterprise AI transformation with AI-powered SaaS platforms, workflow automation, cybersecurity, and advisory.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0F172A',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
