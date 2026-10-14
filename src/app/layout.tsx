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
  title: {
    default: 'Velora Cabs | Cab Booking in Bhavnagar, Ahmedabad, Vadodara, Mumbai & Gujarat',
    template: '%s | Velora Cabs',
  },
  description:
    'Book safe 24x7 cabs with Velora Cabs across Bhavnagar, Ahmedabad, Vadodara, Surat, Bharuch, Dahej, Vapi, Daman, Dholera, Mumbai, Bhuj, Gandhidham, Amreli & Palitana. Clean AC cars, doorstep pickup & transparent rates. Call +91 87803 11279.',
  keywords: [
    // Brand keywords
    'Velora Cabs',
    'Velora Cab booking',
    'Velora Cabs Bhavnagar',
    'Velora Taxi Gujarat',

    // City-specific cab services
    'Bhavnagar cab service',
    'Bhavnagar taxi booking',
    'Ahmedabad cab service',
    'Ahemdabad cab service',
    'Ahmedabad taxi booking',
    'Ahemdabad taxi',
    'Vadodara cab service',
    'Baroda taxi service',
    'Surat cab service',
    'Surat taxi booking',
    'Bharuch cab service',
    'Bharuch taxi booking',
    'Dahej cab service',
    'Dahej port taxi',
    'Vapi cab service',
    'Vapi taxi booking',
    'Daman cab service',
    'Daman taxi booking',
    'Dholera cab service',
    'Dholera SIR taxi service',
    'Mumbai outstation cab',
    'Mumbai to Bhavnagar taxi',
    'Bhuj cab service',
    'Bhuj Kutch taxi booking',
    'Gandhidham cab service',
    'Gandhidham taxi',
    'Amreli cab service',
    'Amreli taxi booking',
    'Palitana cab service',
    'Palitana Shatrunjaya taxi',

    // Intercity and highway route keywords
    'Bhavnagar to Ahmedabad cab',
    'Ahmedabad to Bhavnagar cab',
    'Ahemdabad to Bhavnagar taxi',
    'Bhavnagar to Vadodara cab',
    'Vadodara to Bhavnagar taxi',
    'Bhavnagar to Surat cab',
    'Surat to Bhavnagar cab',
    'Bhavnagar to Mumbai cab',
    'Mumbai to Bhavnagar cab',
    'Bhavnagar to Bharuch cab',
    'Bharuch to Bhavnagar cab',
    'Bhavnagar to Dahej cab',
    'Dahej to Bhavnagar taxi',
    'Bhavnagar to Dholera cab',
    'Dholera to Bhavnagar cab',
    'Bhavnagar to Palitana cab',
    'Palitana to Bhavnagar taxi',
    'Bhavnagar to Amreli cab',
    'Amreli to Bhavnagar taxi',
    'Bhavnagar to Vapi cab',
    'Vapi to Bhavnagar cab',
    'Bhavnagar to Daman cab',
    'Daman to Bhavnagar taxi',
    'Bhavnagar to Bhuj cab',
    'Bhuj to Bhavnagar cab',
    'Bhavnagar to Gandhidham cab',
    'Gandhidham to Bhavnagar taxi',
    'Bharuch to Dahej cab',
    'Vapi to Daman taxi',
    'Bhuj to Gandhidham cab',
    'Ahmedabad to Dholera cab',
    'Mumbai to Vapi cab',

    // General high-intent taxi queries
    'Outstation cab service Gujarat',
    'One way cab Gujarat',
    'Round trip taxi booking Gujarat',
    'Airport taxi Ahmedabad Bhavnagar',
    'Doorstep cab pickup',
    '24x7 cab service Gujarat',
    'AC sedan taxi booking',
    'Affordable outstation taxi',
  ],
  authors: [{ name: 'Velora Cabs' }, { name: 'Dharmeshbhai B. Kava' }],
  creator: 'Velora Cabs',
  publisher: 'Velora Cabs',
  category: 'Transportation',
  metadataBase: new URL('https://veloracabs.com'),
  alternates: {
    canonical: 'https://veloracabs.com',
  },
  openGraph: {
    title: 'Velora Cabs | Cab Booking in Bhavnagar, Ahmedabad, Vadodara, Mumbai & Gujarat',
    description:
      'Book reliable outstation & local AC cabs across Bhavnagar, Ahmedabad, Vadodara, Surat, Bharuch, Dahej, Vapi, Daman, Dholera, Mumbai, Bhuj, Gandhidham, Amreli & Palitana. 24x7 doorstep pickup & best rates.',
    url: 'https://veloracabs.com',
    siteName: 'Velora Cabs',
    images: [
      {
        url: '/images/velora_dzire_sedan.jpg',
        width: 1200,
        height: 675,
        alt: 'Velora Cabs - Bhavnagar, Ahmedabad, Vadodara, Mumbai Cab Service',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Velora Cabs | Gujarat Outstation & Airport Taxi Service',
    description:
      'Safe & on-time cabs in Bhavnagar, Ahmedabad, Vadodara, Bharuch, Dahej, Vapi, Daman, Dholera, Mumbai, Bhuj, Gandhidham, Amreli & Palitana.',
    images: ['/images/velora_dzire_sedan.jpg'],
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
  description:
    'Safe Rides. On Time. Every Time. Premier local & outstation taxi service with clean AC cabs across Bhavnagar, Ahmedabad, Vadodara, Surat, Bharuch, Dahej, Vapi, Daman, Dholera, Mumbai, Bhuj, Gandhidham, Amreli, and Palitana.',
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
  areaServed: [
    { '@type': 'City', name: 'Bhavnagar' },
    { '@type': 'City', name: 'Ahmedabad' },
    { '@type': 'City', name: 'Vadodara' },
    { '@type': 'City', name: 'Surat' },
    { '@type': 'City', name: 'Bharuch' },
    { '@type': 'City', name: 'Dahej' },
    { '@type': 'City', name: 'Vapi' },
    { '@type': 'City', name: 'Daman' },
    { '@type': 'City', name: 'Dholera' },
    { '@type': 'City', name: 'Mumbai' },
    { '@type': 'City', name: 'Bhuj' },
    { '@type': 'City', name: 'Gandhidham' },
    { '@type': 'City', name: 'Amreli' },
    { '@type': 'City', name: 'Palitana' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Intercity Taxi Routes',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Bhavnagar to Ahmedabad Cab Service',
          description: 'Safe, comfortable one-way and round trip taxi from Bhavnagar to Ahmedabad and Ahmedabad Airport.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Bhavnagar to Vadodara (Baroda) Cab Service',
          description: 'Direct highway cab service between Bhavnagar and Vadodara with doorstep pickup.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Bhavnagar to Mumbai Outstation Cab Service',
          description: 'Interstate long distance outstation cab from Bhavnagar to Mumbai and Mumbai to Bhavnagar.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Bhavnagar to Surat Cab Service',
          description: 'Reliable one-way and round trip taxi service between Bhavnagar and Surat.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Bhavnagar to Bharuch & Dahej Cab Service',
          description: 'Industrial corridor taxi service connecting Bhavnagar, Bharuch and Dahej Port.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Bhavnagar to Dholera SIR Cab Service',
          description: 'Direct cab transfers between Bhavnagar and Dholera Special Investment Region.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Bhavnagar to Palitana & Amreli Cab Service',
          description: 'Pilgrimage and Saurashtra intercity taxi service to Palitana Shatrunjaya and Amreli.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Bhavnagar to Vapi & Daman Cab Service',
          description: 'South Gujarat corridor and tourist cab service to Vapi and Daman.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Bhavnagar to Bhuj & Gandhidham Cab Service',
          description: 'Kutch express outstation cab service between Bhavnagar, Gandhidham and Bhuj.',
        },
      },
    ],
  },
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
