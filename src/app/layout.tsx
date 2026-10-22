import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import MantineProviderWrapper from '@/components/MantineProviderWrapper';
import FloatingActionBar from '@/components/FloatingActionBar';
import Preloader from '@/components/Preloader';
import { SITE, getSameAs } from '@/data/site';
import './globals.css';

// PHASE 2: next/font with display:swap, latin subset only
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

// PHASE 1: metadataBase = canonical primary domain
// PHASE 2: Global metadata
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Cab Service in Bhavnagar | Outstation & Airport Taxi – Velora Cabs',
    template: '%s | Velora Cabs',
  },
  description:
    'Book 24x7 AC cabs from Bhavnagar to Ahmedabad, Surat, Vadodara & Mumbai. Verified drivers, doorstep pickup, fixed fares. Call +91 87803 11279.',
  // PHASE 2: remove meta keywords entirely per prompt rule
  openGraph: {
    title: 'Cab Service in Bhavnagar | Outstation & Airport Taxi – Velora Cabs',
    description:
      'Book 24x7 AC cabs from Bhavnagar to Ahmedabad, Surat, Vadodara & Mumbai. Verified drivers, doorstep pickup, fixed fares.',
    url: SITE.url,
    siteName: SITE.name,
    images: [
      {
        url: '/images/og-velora.jpg',
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
    title: 'Cab Service in Bhavnagar | Outstation & Airport Taxi – Velora Cabs',
    description:
      'Book 24x7 AC cabs from Bhavnagar to Ahmedabad, Surat, Vadodara & Mumbai. Fixed fares, verified drivers.',
    images: ['/images/og-velora.jpg'],
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
  alternates: {
    canonical: '/',
  },
};

// PHASE 6: Homepage JSON-LD — TaxiService + WebSite
const businessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TaxiService',
  '@id': `${SITE.url}/#business`,
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/icon-512.png`,
  image: `${SITE.url}/images/og-velora.jpg`,
  description:
    'Safe Rides. On Time. Every Time. 24x7 AC cab service from Bhavnagar across Gujarat and to Mumbai.',
  telephone: SITE.phoneFormatted,
  email: SITE.email,
  // NO priceRange, NO aggregateRating, NO Review (Global Rules 3 & 4)
  address: {
    '@type': 'PostalAddress',
    addressLocality: SITE.address.addressLocality,
    addressRegion: SITE.address.addressRegion,
    addressCountry: SITE.address.addressCountry,
    // TODO: owner to confirm street address and postal code
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: SITE.geo.latitude,
    longitude: SITE.geo.longitude,
  },
  areaServed: SITE.cities.map((city) => ({
    '@type': 'City',
    name: city,
  })),
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '00:00',
    closes: '23:59',
  },
  // Only real, non-empty URLs from social config
  sameAs: getSameAs(),
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE.name,
  url: SITE.url,
};

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    // PHASE 2 + 3: lang="en-IN"
    <html lang="en-IN" className={`${inter.variable}`} style={{ colorScheme: 'light' }}>
      <head>
        <JsonLd data={businessJsonLd} />
        <JsonLd data={websiteJsonLd} />
      </head>
      <body className="min-h-screen bg-[#EBF9FF] text-[#0a2a3d] antialiased font-sans">
        <MantineProviderWrapper>
          <Preloader />
          {children}
          <FloatingActionBar />
        </MantineProviderWrapper>
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
