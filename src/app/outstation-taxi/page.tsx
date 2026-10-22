import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { SITE } from '@/data/site';
import { ROUTES } from '@/data/routes';
import {
  Navigation,
  RotateCcw,
  Phone,
  MessageCircle,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Outstation Taxi Service in Gujarat & Mumbai | One-Way & Round Trip',
  description:
    'Book comfortable outstation cabs for one-way drops and return journeys across Gujarat and Mumbai. Fixed fare confirmations, experienced highway chauffeurs, 24x7 service.',
  alternates: {
    canonical: '/outstation-taxi',
  },
  openGraph: {
    title: 'Outstation Taxi Service Gujarat & Mumbai | Velora Cabs',
    description:
      'Safe, reliable outstation cab hire with Velora Cabs. Clean AC sedans, MUVs, and Tempo Travellers for intercity and pilgrimage journeys.',
    url: `${SITE.url}/outstation-taxi`,
    siteName: SITE.name,
    images: [
      {
        url: '/images/og-velora.jpg',
        width: 1200,
        height: 630,
        alt: 'Velora Cabs Outstation Taxi Service',
      },
    ],
  },
};

const outstationFaqs = [
  {
    question: 'What is the difference between one-way drop and round trip outstation cab hire?',
    answer:
      'A one-way drop is designed for passengers who only need transportation from their origin city to a single destination (such as an airport transfer or relocation), paying only for the single journey. A round trip includes dedicated cab and driver retention throughout your visit and returns you to the origin city, ideal for meetings, family visits, and multi-day vacations.',
  },
  {
    question: 'How does Velora Cabs determine the fare for outstation trips?',
    answer:
      'We provide a transparent fixed quote before you confirm your booking based on your route distance, vehicle choice, and whether you require a one-way or round trip. There are no sudden meter spikes or hidden surge charges.',
  },
  {
    question: 'Are night driving charges or driver allowances included?',
    answer:
      'All driver terms and journey details are clearly communicated and agreed upon upfront before departure, ensuring peace of mind throughout your highway trip.',
  },
  {
    question: 'Can we stop for refreshments or meals along the highway?',
    answer:
      'Absolutely. Our drivers are happy to pause at clean highway food plazas, restaurants, or fuel stops per your convenience during intercity travel.',
  },
];

export default function OutstationTaxiPage() {
  const popularOutstation = ROUTES.slice(0, 6);

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Outstation Taxi Service Gujarat & Mumbai',
    serviceType: 'Outstation Taxi Service',
    description:
      'Safe, comfortable one-way and round-trip highway cab bookings connecting Bhavnagar and major Gujarat cities with Mumbai.',
    provider: {
      '@type': 'TaxiService',
      '@id': `${SITE.url}/#business`,
    },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: outstationFaqs.map((faq) => ({
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
        <Breadcrumbs items={[{ label: 'Outstation Taxi Service' }]} />

        {/* Hero Section */}
        <section className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#bde9ff] shadow-sm space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#92EEFF]/30 border border-[#bde9ff]">
              <Navigation className="w-4 h-4 text-[#0284c7]" />
              <span className="text-xs font-bold text-[#0284c7] uppercase tracking-wider">
                Highway & Intercity Travel
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a2a3d] tracking-tight">
              Outstation Taxi Service Across Gujarat & Mumbai
            </h1>

            <p className="text-base sm:text-lg text-[#2d6180] max-w-3xl leading-relaxed">
              Travel between cities in complete comfort without the hassle of bus schedules, train waitlists, or stressful highway self-driving. Velora Cabs provides reliable one-way drops and flexible multi-day round trips with experienced chauffeurs, doorstep pickup, and fixed quotes.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={`tel:${SITE.phoneFormatted}`}
                className="flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0a2a3d] hover:bg-[#123952] text-white font-bold text-sm shadow-md transition-all active:scale-95"
              >
                <Phone className="w-4 h-4 text-[#92EEFF]" />
                <span>Call to Book: {SITE.phone}</span>
              </a>

              <a
                href={`${SITE.whatsapp}?text=${encodeURIComponent(
                  'Hello Velora Cabs, I would like to get an outstation taxi quote.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 rounded-xl bg-[#28A745] hover:bg-[#1e8c38] text-white font-bold text-sm shadow-md transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Get WhatsApp Fixed Quote</span>
              </a>
            </div>
          </div>
        </section>

        {/* One-Way vs Round Trip Comparison */}
        <section className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* One-Way Drop */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#bde9ff] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#EBF9FF] border border-[#bde9ff] flex items-center justify-center text-[#0284c7]">
                <ArrowRight className="w-6 h-6" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0a2a3d]">
                One-Way Intercity Drops
              </h2>
              <p className="text-xs sm:text-sm text-[#2d6180] leading-relaxed">
                Ideal for travelers relocating, catching flights, or taking onward travel from another city. Pay only for the single journey from your door in city A to your exact drop address in city B.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-[#2d6180] pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#28A745] shrink-0" />
                  <span>No need to pay return fares for one-way trips</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#28A745] shrink-0" />
                  <span>Direct doorstep pickup and doorstep drop</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#28A745] shrink-0" />
                  <span>Perfect for airport departures and hospital visits</span>
                </li>
              </ul>
            </div>

            {/* Round Trip Journeys */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#bde9ff] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#EBF9FF] border border-[#bde9ff] flex items-center justify-center text-[#28A745]">
                <RotateCcw className="w-6 h-6" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0a2a3d]">
                Round Trip & Pilgrimage Packages
              </h2>
              <p className="text-xs sm:text-sm text-[#2d6180] leading-relaxed">
                Keep the same dedicated cab and driver with you throughout your journey. Perfect for family pilgrimages to Palitana Shatrunjaya, corporate multi-stop tours, and weekend vacations.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-[#2d6180] pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#28A745] shrink-0" />
                  <span>Dedicated chauffeur and car stays at your disposal</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#28A745] shrink-0" />
                  <span>Flexible sightseeing and multiple stopovers</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#28A745] shrink-0" />
                  <span>Convenient return right back to your home doorstep</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Popular Outstation Routes Links */}
        <section className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl font-black text-[#0a2a3d]">
              High-Demand Outstation Routes
            </h2>
            <Link href="/taxi" className="text-xs sm:text-sm font-bold text-[#0284c7] hover:underline">
              View all 25+ routes →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {popularOutstation.map((route) => (
              <Link
                key={route.slug}
                href={`/taxi/${route.slug}`}
                className="group bg-white rounded-2xl p-5 border border-[#bde9ff] hover:border-[#30AFFF] shadow-2xs hover:shadow-xs transition-all flex items-center justify-between text-sm font-bold text-[#0a2a3d] hover:text-[#0284c7]"
              >
                <div>
                  <span>{route.from} to {route.to} Taxi</span>
                  <span className="block text-xs text-[#2d6180] font-normal mt-0.5">
                    ~{route.distanceKm} km • ~{route.durationHrs}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-[#0284c7] group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-[#0a2a3d]">
              Outstation Cab Booking FAQs
            </h2>
            <p className="text-xs sm:text-sm text-[#2d6180]">
              Answers to common queries regarding intercity cab travel with Velora Cabs.
            </p>
          </div>

          <div className="space-y-3">
            {outstationFaqs.map((faq, idx) => (
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
