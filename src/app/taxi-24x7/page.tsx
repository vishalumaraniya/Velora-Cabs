import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { SITE } from '@/data/site';
import {
  Clock,
  ShieldCheck,
  Phone,
  MessageCircle,
  AlertCircle,
  ChevronDown,
} from 'lucide-react';

export const metadata: Metadata = {
  title: '24x7 Cab Service in Bhavnagar & Gujarat | Emergency Taxi',
  description:
    'Need a taxi right now? Velora Cabs provides 24 hours a day, 7 days a week emergency and night cab dispatch across Bhavnagar, Ahmedabad, Vadodara, Surat, and Mumbai. Call +91 87803 11279.',
  alternates: {
    canonical: '/taxi-24x7',
  },
  openGraph: {
    title: '24x7 Cab Service in Bhavnagar & Gujarat | Velora Cabs',
    description:
      'Round-the-clock emergency, midnight, and dawn cab bookings across Gujarat and Mumbai with Velora Cabs.',
    url: `${SITE.url}/taxi-24x7`,
    siteName: SITE.name,
    images: [
      {
        url: '/images/og-velora.jpg',
        width: 1200,
        height: 630,
        alt: 'Velora Cabs 24x7 Taxi Service',
      },
    ],
  },
};

const roundTheClockFaqs = [
  {
    question: 'Can I call Velora Cabs at 2:00 AM or 3:00 AM for an emergency ride?',
    answer:
      'Yes, our phone line (+91 87803 11279) is active 24 hours a day, 365 days a year. Our dispatch team is awake and operational throughout the night to assist with urgent hospital trips, early morning flights, and sudden travel needs.',
  },
  {
    question: 'Is it safe to travel at night on Gujarat highways with Velora Cabs?',
    answer:
      'Yes, passenger safety is our utmost priority. Our highway drivers are seasoned night chauffeurs who follow strict speed protocols, avoid fatigued driving, and operate well-maintained vehicles equipped with bright headlamps and safety kits.',
  },
  {
    question: 'Are there hidden night surge charges applied to midnight bookings?',
    answer:
      'No, Velora Cabs never applies predatory surge pricing. Any night driver allowances or fixed charges are communicated and agreed upon clearly with you before the driver departs.',
  },
  {
    question: 'Which cities have active 24x7 dispatch available?',
    answer:
      'Our 24x7 service covers all 14 cities in our network, including Bhavnagar, Ahmedabad, Vadodara, Surat, Bharuch, Dahej, Vapi, Daman, Dholera, Mumbai, Bhuj, Gandhidham, Amreli, and Palitana.',
  },
];

export default function Taxi24x7Page() {
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: '24x7 Cab Service Gujarat & Mumbai',
    serviceType: 'Emergency and Round the Clock Taxi Service',
    description:
      'Continuous 24-hour taxi dispatch for emergency transit, midnight airport runs, and dawn highway departures.',
    provider: {
      '@type': 'TaxiService',
      '@id': `${SITE.url}/#business`,
    },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: roundTheClockFaqs.map((faq) => ({
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
        <Breadcrumbs items={[{ label: '24x7 Cab Service' }]} />

        {/* Hero Section */}
        <section className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#bde9ff] shadow-sm space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#92EEFF]/30 border border-[#bde9ff]">
              <Clock className="w-4 h-4 text-[#0284c7]" />
              <span className="text-xs font-bold text-[#0284c7] uppercase tracking-wider">
                Continuous Operations
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a2a3d] tracking-tight">
              24x7 Cab Service in Bhavnagar & Across Gujarat
            </h1>

            <p className="text-base sm:text-lg text-[#2d6180] max-w-3xl leading-relaxed">
              Travel emergencies and urgent travel requirements don’t wait for business hours. Whether you receive a sudden call to visit family, need an urgent hospital transit in the middle of the night, or have an early 5:00 AM international flight from Ahmedabad or Mumbai, Velora Cabs provides reliable round-the-clock dispatch. A single phone call connects you directly to our active coordinator.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={`tel:${SITE.phoneFormatted}`}
                className="flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0a2a3d] hover:bg-[#123952] text-white font-bold text-sm shadow-md transition-all active:scale-95"
              >
                <Phone className="w-4 h-4 text-[#92EEFF]" />
                <span>Call 24x7 Desk: {SITE.phone}</span>
              </a>

              <a
                href={`${SITE.whatsapp}?text=${encodeURIComponent(
                  'Hello Velora Cabs, I need an immediate or 24x7 cab booking.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 rounded-xl bg-[#28A745] hover:bg-[#1e8c38] text-white font-bold text-sm shadow-md transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Instant Inquire</span>
              </a>
            </div>
          </div>
        </section>

        {/* 24x7 Pillars */}
        <section className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-6 border border-[#bde9ff] space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EBF9FF] border border-[#bde9ff] flex items-center justify-center text-[#0284c7]">
                <Clock className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-[#0a2a3d]">Always Human-Answered</h2>
              <p className="text-xs sm:text-sm text-[#2d6180] leading-relaxed">
                No automated bot menus or unanswered rings. When you call late at night, an experienced coordinator picks up to dispatch your vehicle immediately.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-[#bde9ff] space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EBF9FF] border border-[#bde9ff] flex items-center justify-center text-[#28A745]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-[#0a2a3d]">Night-Highway Certified</h2>
              <p className="text-xs sm:text-sm text-[#2d6180] leading-relaxed">
                Our drivers are rigorously vetted for safe night driving, possessing full familiarity with state and national highway toll checkpoints and conditions.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-[#bde9ff] space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EBF9FF] border border-[#bde9ff] flex items-center justify-center text-[#0284c7]">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-[#0a2a3d]">Emergency Medical & Travel</h2>
              <p className="text-xs sm:text-sm text-[#2d6180] leading-relaxed">
                Rapid response for sudden hospital visits, patient inter-city transfers, missed train re-routings, and unscheduled business trips.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-[#0a2a3d]">
              24x7 Taxi Service FAQs
            </h2>
            <p className="text-xs sm:text-sm text-[#2d6180]">
              Common questions about midnight, dawn, and emergency cab bookings.
            </p>
          </div>

          <div className="space-y-3">
            {roundTheClockFaqs.map((faq, idx) => (
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
