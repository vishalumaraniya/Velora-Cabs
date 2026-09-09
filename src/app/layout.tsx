import type { Metadata, Viewport } from 'next';
import { Outfit } from 'next/font/google';
import { ColorSchemeScript } from '@mantine/core';
import MantineProviderWrapper from '@/components/MantineProviderWrapper';
import FloatingActionBar from '@/components/FloatingActionBar';
import Preloader from '@/components/Preloader';
import { BUSINESS_INFO } from '@/lib/constants';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#0d0d0f',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Velora Cabs | Safe Rides. On Time. Every Time.',
  description:
    'Premier cab & outstation taxi service in Gujarat & Pan-India. Local city rides, airport transfers (Ahmedabad, Surat, Vadodara, Mumbai), and outstation trips in clean Maruti Suzuki Dzire sedans. Call +91 87803 11279.',
  keywords: [
    'Velora Cabs',
    'Bhavnagar taxi service',
    'Bhavnagar to Surat cab',
    'Baroda to Ahmedabad cab',
    'Bhavnagar to Mumbai taxi',
    'Gujarat outstation cab',
    'Airport taxi Ahmedabad',
    'Maruti Dzire sedan booking',
    'Dharmeshbhai Kava cabs',
    '24x7 outstation taxi',
  ],
  authors: [{ name: 'Velora Cabs' }, { name: 'Dharmeshbhai B. Kava' }],
  metadataBase: new URL('https://veloracabs.com'),
  openGraph: {
    title: 'Velora Cabs | Safe Rides. On Time. Every Time.',
    description:
      'Reliable local, airport, and outstation cab booking in Gujarat & Pan-India. Clean Maruti Suzuki Dzire sedans, experienced drivers & 24x7 service.',
    url: 'https://veloracabs.com',
    siteName: 'Velora Cabs',
    images: [
      {
        url: '/images/velora_dzire_sedan.jpg',
        width: 1200,
        height: 675,
        alt: 'Velora Cabs Maruti Suzuki Dzire Sedan',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Velora Cabs | Safe Rides. On Time. Every Time.',
    description:
      'Book outstation & local cabs across Gujarat (Bhavnagar, Surat, Ahmedabad, Baroda, Mumbai). Clean sedans, punctual drivers & 24x7 availability.',
    images: ['/images/velora_dzire_sedan.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/images/velora_logo.jpg',
    shortcut: '/images/velora_logo.jpg',
    apple: '/images/velora_logo.jpg',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['TaxiService', 'LocalBusiness'],
  name: BUSINESS_INFO.name,
  image: 'https://veloracabs.com/images/velora_dzire_sedan.jpg',
  logo: 'https://veloracabs.com/images/velora_logo.jpg',
  description: 'Safe Rides. On Time. Every Time. Premier local & outstation taxi service across Gujarat and pan-India.',
  telephone: BUSINESS_INFO.phones[0].display,
  email: BUSINESS_INFO.email,
  priceRange: '₹₹',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bhavnagar',
    addressRegion: 'Gujarat',
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
    <html lang="en" className={`${outfit.variable} dark`} style={{ colorScheme: 'dark' }}>
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0d0d0f] text-gray-100 antialiased font-sans">
        <MantineProviderWrapper>
          <Preloader />
          {children}
          <FloatingActionBar />
        </MantineProviderWrapper>
      </body>
    </html>
  );
}
