import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import MantineProviderWrapper from '@/components/MantineProviderWrapper';
import FloatingActionBar from '@/components/FloatingActionBar';
import Preloader from '@/components/Preloader';
import { BUSINESS_INFO } from '@/lib/constants';
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
  title: 'Velora Cabs | Safe Rides. On Time. Every Time.',
  description:
    'Premier cab & outstation taxi service. Local city rides, on-time airport transfers, and outstation trips in clean, comfortable AC sedans. Call +91 87803 11279.',
  keywords: [
    'Velora Cabs',
    'Outstation cab service',
    'Airport taxi service',
    'AC sedan taxi booking',
    '24x7 cab service',
    'Doorstep cab pickup',
    'Intercity taxi service',
  ],
  authors: [{ name: 'Velora Cabs' }, { name: 'Dharmeshbhai B. Kava' }],
  metadataBase: new URL('https://veloracabs.com'),
  openGraph: {
    title: 'Velora Cabs | Safe Rides. On Time. Every Time.',
    description:
      'Reliable local, airport, and outstation cab booking. Clean AC sedans, experienced drivers & 24x7 service.',
    url: 'https://veloracabs.com',
    siteName: 'Velora Cabs',
    images: [
      {
        url: '/images/velora_dzire_sedan.jpg',
        width: 1200,
        height: 675,
        alt: 'Velora Cabs Premium AC Sedan',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Velora Cabs | Safe Rides. On Time. Every Time.',
    description:
      'Book outstation & local cabs. Clean sedans, punctual drivers & 24x7 availability.',
    images: ['/images/velora_dzire_sedan.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/icon.svg',
    apple: '/apple-touch-icon.png',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['TaxiService', 'LocalBusiness'],
  name: BUSINESS_INFO.name,
  image: 'https://veloracabs.com/images/velora_dzire_sedan.jpg',
  logo: 'https://veloracabs.com/images/velora_logo.jpg',
  description: 'Safe Rides. On Time. Every Time. Premier local & outstation taxi service with clean AC cabs.',
  telephone: BUSINESS_INFO.phones[0].display,
  email: BUSINESS_INFO.email,
  priceRange: '₹₹',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 21.7645,
    longitude: 72.1519,
  },
  areaServed: BUSINESS_INFO.serviceAreas,
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  founder: {
    '@type': 'Person',
    name: BUSINESS_INFO.contactPerson,
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '128',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable}`} style={{ colorScheme: 'light' }}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#EBF9FF] text-[#0a2a3d] antialiased font-sans">
        <MantineProviderWrapper>
          <Preloader />
          {children}
          <FloatingActionBar />
        </MantineProviderWrapper>
      </body>
    </html>
  );
}
