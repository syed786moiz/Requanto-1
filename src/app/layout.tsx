import type { Metadata, Viewport } from 'next';
import './globals.css';
import { SiteShell } from '@/components/SiteShell';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://requanto.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: 'Requanto Technologies',
  title: {
    default: 'Requanto Technologies — Enterprise AI Transformation',
    template: '%s | Requanto Technologies',
  },
  description:
    'Requanto Technologies helps organizations modernize operations through AI-powered SaaS platforms, workflow automation, cybersecurity, and executive advisory.',
  keywords: [
    'Enterprise AI',
    'AI Transformation',
    'Workflow Automation',
    'Cybersecurity',
    'Virtual CISO',
    'Virtual CTO',
    'AI SaaS Platform',
    'Requanto Technologies',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Requanto Technologies — Enterprise AI Transformation',
    description:
      'AI-powered SaaS platforms, workflow automation, cybersecurity, and executive advisory for enterprises.',
    url: '/',
    siteName: 'Requanto Technologies',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/favicon.ico',
        width: 512,
        height: 512,
        alt: 'Requanto Technologies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Requanto Technologies — Enterprise AI Transformation',
    description:
      'AI-powered SaaS platforms, workflow automation, cybersecurity, and executive advisory for enterprises.',
    images: ['/favicon.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    shortcut: ['/favicon.svg'],
    apple: [{ url: '/favicon.svg' }],
  },
};

export const viewport: Viewport = {
  themeColor: '#0F172A',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Requanto Technologies',
    url: siteUrl,
    logo: `${siteUrl}/favicon.svg`,
    description:
      'Requanto Technologies helps organizations modernize operations through AI-powered SaaS platforms, workflow automation, cybersecurity, and executive advisory.',
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
