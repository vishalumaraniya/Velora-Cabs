import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import MantineProviderWrapper from '@/components/MantineProviderWrapper';
import FloatingActionBar from '@/components/FloatingActionBar';
import ScrollToTop from '@/components/ScrollToTop';
import JsonLd from '@/components/JsonLd';
import { SITE } from '@/lib/site';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#30AFFF',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Taxi Service in Bhavnagar & Gujarat | Velora Cabs',
    template: '%s | Velora Cabs',
  },
  description:
    'Book local, airport and outstation AC cabs from Bhavnagar to Ahmedabad, Vadodara, Surat, Mumbai & more. Call +91 87803 11279 for a quote.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Velora Cabs | Taxi Service in Bhavnagar & Gujarat',
    description:
      'Book local, airport and outstation AC cabs from Bhavnagar to Ahmedabad, Vadodara, Surat, Mumbai & more. Call +91 87803 11279 for a quote.',
    url: SITE.url,
    siteName: SITE.name,
    images: [
      {
        url: `${SITE.url}/og/home.jpg`,
        width: 1200,
        height: 630,
        alt: 'Velora Cabs – Cab Service in Bhavnagar & Gujarat',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Velora Cabs | Taxi Service in Bhavnagar & Gujarat',
    description:
      'Book local, airport and outstation AC cabs from Bhavnagar to Ahmedabad, Vadodara, Surat, Mumbai & more. Call +91 87803 11279 for a quote.',
    images: [`${SITE.url}/og/home.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon-48x48.png',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.webmanifest',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = SITE.gaId || process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en-IN" className={`${inter.variable}`} style={{ colorScheme: 'light' }}>
      <head>
        <JsonLd type="root" />
        {SITE.gscVerification && (
          <meta name="google-site-verification" content={SITE.gscVerification} />
        )}
      </head>
      <body className="min-h-screen bg-[#EBF9FF] text-[#0a2a3d] antialiased font-sans">
        <MantineProviderWrapper>
          <ScrollToTop />
          {children}
          <FloatingActionBar />
        </MantineProviderWrapper>
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
