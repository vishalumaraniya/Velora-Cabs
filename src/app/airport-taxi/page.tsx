import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { SITE } from '@/data/site';
import {
  Plane,
  Clock,
  Luggage,
  ShieldCheck,
  Phone,
  MessageCircle,
  ChevronDown,
  ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Airport Taxi Service in Gujarat & Mumbai | Airport Transfers',
  description:
    'Reliable 24x7 airport cab transfers to and from Ahmedabad SVPI Airport, Vadodara Airport, Surat Airport, Bhavnagar Airport, Mumbai Airport (BOM) & Bhuj. Punctual doorstep pickups, fixed fares.',
  alternates: {
    canonical: '/airport-taxi',
  },
  openGraph: {
    title: 'Airport Taxi Service Gujarat & Mumbai | Velora Cabs',
    description:
      'Book dependable airport pickups and drop-offs across Ahmedabad, Vadodara, Surat, Bhavnagar & Mumbai with Velora Cabs.',
    url: `${SITE.url}/airport-taxi`,
    siteName: SITE.name,
    images: [
      {
        url: '/images/og-velora.jpg',
        width: 1200,
        height: 630,
        alt: 'Velora Cabs Airport Taxi Service',
      },
    ],
  },
};

const airportFaqs = [
  {
    question: 'How early should I book an airport taxi with Velora Cabs?',
    answer:
      'For domestic flights, we recommend booking at least 6 to 12 hours before your scheduled airport arrival or departure time to ensure optimal vehicle assignment and punctual doorstep pickup. For international flights from Ahmedabad or Mumbai, booking 24 hours in advance is advisable.',
  },
  {
    question: 'Does Velora Cabs track flight arrivals if my flight is delayed?',
    answer:
      'Yes, when you provide your flight number during booking, our dispatch team coordinates pickup timing so your driver is ready when you exit the terminal, minimizing airport waiting stress.',
  },
  {
    question: 'How much luggage can your airport cabs accommodate?',
    answer:
      'Our Maruti Swift Dzire sedans carry up to 2 large trolley bags and 2 cabin bags in the trunk. For families or groups with 3 to 5 large suitcases, we recommend our Maruti Suzuki Ertiga MUV or a Tempo Traveller.',
  },
  {
    question: 'Are midnight and early morning airport rides available?',
    answer:
      'Yes, Velora Cabs operates 24 hours a day, 7 days a week. We routinely dispatch cabs at 2 AM, 4 AM, and throughout the night for early morning flight schedules.',
  },
];

const airportsCovered = [
  {
    name: 'Ahmedabad (AMD)',
    fullName: 'Sardar Vallabhbhai Patel International Airport',
    desc: 'Primary international and domestic hub for Gujarat. We provide daily highway transfers between Bhavnagar, Vadodara, Rajkot, and Ahmedabad Airport.',
    routeSlug: 'bhavnagar-to-ahmedabad',
  },
  {
    name: 'Vadodara (BDQ)',
    fullName: 'Vadodara Airport (Civil Airport Harni)',
    desc: 'Serving Central Gujarat travelers. Punctual doorstep pickups connecting Vadodara Airport with Bharuch, Dahej, Anand, and Bhavnagar.',
    routeSlug: 'bhavnagar-to-vadodara',
  },
  {
    name: 'Surat (STV)',
    fullName: 'Surat International Airport (Magdalla)',
    desc: 'Fast airport connectivity for South Gujarat diamond, textile, and coastal business travelers connecting Surat with Bharuch, Vapi, and Daman.',
    routeSlug: 'bhavnagar-to-surat',
  },
  {
    name: 'Bhavnagar (BHU)',
    fullName: 'Bhavnagar Airport',
    desc: 'Local doorstep transfers to and from Bhavnagar Airport connecting to city hotels, Palitana pilgrimage, Alang, and regional towns.',
    routeSlug: 'bhavnagar-to-palitana',
  },
  {
    name: 'Mumbai (BOM)',
    fullName: 'Chhatrapati Shivaji Maharaj International Airport',
    desc: 'Interstate long-distance transfers between South Gujarat (Vapi, Daman, Surat, Bharuch) and Mumbai International Airport Terminals 1 and 2.',
    routeSlug: 'surat-to-mumbai',
  },
  {
    name: 'Bhuj (BHJ)',
    fullName: 'Bhuj Airport (Kutch)',
    desc: 'Kutch regional airport transfers connecting Bhuj with Gandhidham, Kandla, Mundra Port, and heritage desert sites.',
    routeSlug: 'gandhidham-to-bhuj',
  },
];

export default function AirportTaxiPage() {
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Airport Taxi Service Gujarat & Mumbai',
    serviceType: 'Airport Taxi Service',
    description:
      'Doorstep airport transfers to and from Ahmedabad, Vadodara, Surat, Bhavnagar, and Mumbai airports with flight tracking and 24x7 dispatch.',
    provider: {
      '@type': 'TaxiService',
      '@id': `${SITE.url}/#business`,
    },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: airportFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-[#EBF9FF] flex flex-col">
      <Navbar />

      <JsonLd data={serviceJsonLd} />
      <JsonLd data={faqJsonLd} />

      <main className="flex-1 pt-24 sm:pt-28 pb-16">
        <Breadcrumbs items={[{ label: 'Airport Taxi Transfers' }]} />

        {/* Hero Section */}
        <section className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#bde9ff] shadow-sm space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#92EEFF]/30 border border-[#bde9ff]">
              <Plane className="w-4 h-4 text-[#0284c7]" />
              <span className="text-xs font-bold text-[#0284c7] uppercase tracking-wider">
                Dedicated Airport Transfers
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a2a3d] tracking-tight">
              Airport Taxi Service in Gujarat & Mumbai
            </h1>

            <p className="text-base sm:text-lg text-[#2d6180] max-w-3xl leading-relaxed">
              Never worry about missing a flight. Velora Cabs provides punctual, round-the-clock airport transfers connecting Bhavnagar and major Gujarat cities with Ahmedabad (SVPI), Vadodara, Surat, Bhuj, and Mumbai International Airport. Enjoy dedicated luggage space, courteous drivers, and fixed fare confirmations.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={`tel:${SITE.phoneFormatted}`}
                className="flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0a2a3d] hover:bg-[#123952] text-white font-bold text-sm shadow-md transition-all active:scale-95"
              >
                <Phone className="w-4 h-4 text-[#92EEFF]" />
                <span>Call Airport Dispatch: {SITE.phone}</span>
              </a>

              <a
                href={`${SITE.whatsapp}?text=${encodeURIComponent(
                  'Hello Velora Cabs, I want to book an airport cab transfer.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 rounded-xl bg-[#28A745] hover:bg-[#1e8c38] text-white font-bold text-sm shadow-md transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Airport Quote</span>
              </a>
            </div>
          </div>
        </section>

        {/* Airport Pillars Grid */}
        <section className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-6 border border-[#bde9ff] space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EBF9FF] border border-[#bde9ff] flex items-center justify-center text-[#0284c7]">
                <Clock className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-[#0a2a3d]">Punctual Pickup Assurance</h2>
              <p className="text-xs sm:text-sm text-[#2d6180] leading-relaxed">
                Drivers arrive 15 minutes before your scheduled departure time to load luggage and navigate traffic seamlessly.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-[#bde9ff] space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EBF9FF] border border-[#bde9ff] flex items-center justify-center text-[#28A745]">
                <Luggage className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-[#0a2a3d]">Luggage Capacity & Care</h2>
              <p className="text-xs sm:text-sm text-[#2d6180] leading-relaxed">
                Dedicated trunk space for airline suitcases with chauffeur assistance during loading and terminal drop-offs.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-[#bde9ff] space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EBF9FF] border border-[#bde9ff] flex items-center justify-center text-[#0284c7]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-[#0a2a3d]">24x7 Night & Dawn Service</h2>
              <p className="text-xs sm:text-sm text-[#2d6180] leading-relaxed">
                Round-the-clock dispatch handling 3 AM departure pickups and midnight international arrival meet-and-greets.
              </p>
            </div>
          </div>
        </section>

        {/* Airports Covered */}
        <section className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-[#0a2a3d]">
              Major Airports We Connect
            </h2>
            <p className="text-xs sm:text-sm text-[#2d6180]">
              Door-to-terminal taxi transfers connecting regional cities with Gujarat and Mumbai airports.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {airportsCovered.map((apt, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-[#bde9ff] flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#EBF9FF] text-[#0284c7] border border-[#bde9ff]">
                    {apt.name}
                  </span>
                  <h3 className="text-base font-bold text-[#0a2a3d]">
                    {apt.fullName}
                  </h3>
                  <p className="text-xs text-[#2d6180] leading-relaxed">
                    {apt.desc}
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href={`/taxi/${apt.routeSlug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0284c7] hover:underline"
                  >
                    <span>View Popular Taxi Route</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Airport FAQs */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-[#0a2a3d]">
              Airport Taxi Service FAQs
            </h2>
            <p className="text-xs sm:text-sm text-[#2d6180]">
              Common questions about booking airport rides with Velora Cabs.
            </p>
          </div>

          <div className="space-y-3">
            {airportFaqs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-white rounded-2xl border border-[#bde9ff] overflow-hidden open:border-[#30AFFF] open:shadow-xs transition-colors"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none select-none font-bold text-sm sm:text-base text-[#0a2a3d] group-hover:text-[#0284c7]">
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown className="w-4 h-4 text-[#0284c7] shrink-0 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#2d6180] leading-relaxed border-t border-[#bde9ff]/40">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
