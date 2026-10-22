import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { SITE } from '@/data/site';
import {
  Car,
  Clock,
  ShieldCheck,
  Phone,
  MessageCircle,
  ChevronDown,
  Building2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Local City Cab Service in Bhavnagar & Gujarat | Hourly Taxi Rental',
  description:
    'Hire clean AC cabs for local city travel, business meetings, shopping, railway station drops, and hospital visits in Bhavnagar and Gujarat cities. Punctual doorstep pickup, fixed rates.',
  alternates: {
    canonical: '/local-city-rides',
  },
  openGraph: {
    title: 'Local City Cab Service | Velora Cabs',
    description:
      'Convenient local cab hire in Bhavnagar, Ahmedabad, Vadodara, and Surat with Velora Cabs.',
    url: `${SITE.url}/local-city-rides`,
    siteName: SITE.name,
    images: [
      {
        url: '/images/og-velora.jpg',
        width: 1200,
        height: 630,
        alt: 'Velora Cabs Local City Rides',
      },
    ],
  },
};

const localFaqs = [
  {
    question: 'Can I book a cab for a few hours with multiple stops in the city?',
    answer:
      'Yes, Velora Cabs offers flexible local packages for intra-city transit, including multi-stop business appointments, family shopping trips, and temple visits. The driver remains with you throughout your booking duration.',
  },
  {
    question: 'How quickly can a cab arrive for a local pickup in Bhavnagar?',
    answer:
      'For immediate local bookings, our average dispatch time is 20 to 30 minutes depending on your neighborhood. For critical appointments or railway station drops, pre-booking at least 1 to 2 hours in advance is strongly recommended.',
  },
  {
    question: 'Are local cabs air-conditioned?',
    answer:
      'Yes, 100% of the Velora Cabs fleet consists of well-maintained, climate-controlled AC vehicles to keep you cool and refreshed in Gujarat’s weather.',
  },
  {
    question: 'Do you offer railway station and bus terminal pickups?',
    answer:
      'Yes, we provide dedicated pickups and drop-offs at Bhavnagar Terminus, Ahmedabad Junction (Kalupur), Vadodara Junction, Surat Railway Station, and regional ST bus stands.',
  },
];

export default function LocalCityRidesPage() {
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Local City Cab Service Bhavnagar & Gujarat',
    serviceType: 'City Taxi Service',
    description:
      'Dedicated intra-city passenger cab hire for multi-stop commutes, railway pickups, hospital visits, and local shopping.',
    provider: {
      '@type': 'TaxiService',
      '@id': `${SITE.url}/#business`,
    },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: localFaqs.map((faq) => ({
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
        <Breadcrumbs items={[{ label: 'Local City Rides' }]} />

        {/* Hero Banner */}
        <section className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#bde9ff] shadow-sm space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#92EEFF]/30 border border-[#bde9ff]">
              <Car className="w-4 h-4 text-[#0284c7]" />
              <span className="text-xs font-bold text-[#0284c7] uppercase tracking-wider">
                Intra-City & Local Travel
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a2a3d] tracking-tight">
              Local City Cab Service in Bhavnagar & Gujarat
            </h1>

            <p className="text-base sm:text-lg text-[#2d6180] max-w-3xl leading-relaxed">
              Navigating crowded city streets, finding scarce parking spaces, or hailing auto-rickshaws in peak afternoon heat can be exhausting. With Velora Cabs, enjoy private, air-conditioned city transit with a professional driver ready at your gate. Whether you are running errands in Bhavnagar, attending corporate meetings in Ahmedabad, or catching a train from Vadodara Junction, our local cabs make every trip peaceful and punctual.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={`tel:${SITE.phoneFormatted}`}
                className="flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0a2a3d] hover:bg-[#123952] text-white font-bold text-sm shadow-md transition-all active:scale-95"
              >
                <Phone className="w-4 h-4 text-[#92EEFF]" />
                <span>Call for Local Cab: {SITE.phone}</span>
              </a>

              <a
                href={`${SITE.whatsapp}?text=${encodeURIComponent(
                  'Hello Velora Cabs, I would like to book a local city cab ride.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 rounded-xl bg-[#28A745] hover:bg-[#1e8c38] text-white font-bold text-sm shadow-md transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Local Quote</span>
              </a>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-6 border border-[#bde9ff] space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EBF9FF] border border-[#bde9ff] flex items-center justify-center text-[#0284c7]">
                <Clock className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-[#0a2a3d]">Hourly Packages & Multi-Stop</h2>
              <p className="text-xs sm:text-sm text-[#2d6180] leading-relaxed">
                Rent a car for 4, 8, or 12 hours with unlimited stops. Keep the vehicle waiting while you attend meetings, medical check-ups, or family functions.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-[#bde9ff] space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EBF9FF] border border-[#bde9ff] flex items-center justify-center text-[#28A745]">
                <Building2 className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-[#0a2a3d]">Railway Station Transfers</h2>
              <p className="text-xs sm:text-sm text-[#2d6180] leading-relaxed">
                Avoid crowded platform exit chaos. Have our courteous driver wait at the station parking with luggage assistance right to your doorstep.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-[#bde9ff] space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EBF9FF] border border-[#bde9ff] flex items-center justify-center text-[#0284c7]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-[#0a2a3d]">Safe Family & Senior Rides</h2>
              <p className="text-xs sm:text-sm text-[#2d6180] leading-relaxed">
                Respectful, verified drivers who drive with calm care, making local travel completely reassuring for elderly family members and children.
              </p>
            </div>
          </div>
        </section>

        {/* Local FAQs */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-[#0a2a3d]">
              Local City Ride FAQs
            </h2>
            <p className="text-xs sm:text-sm text-[#2d6180]">
              Frequently asked questions about intra-city cab rentals.
            </p>
          </div>

          <div className="space-y-3">
            {localFaqs.map((faq, idx) => (
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
