import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { SITE } from '@/data/site';
import { Car, Users, Luggage, Wind, ShieldCheck, ArrowRight, Phone, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Taxi Fleet | Dzire Sedan, Ertiga MUV & Tempo Traveller',
  description:
    'Explore the clean, air-conditioned passenger fleet of Velora Cabs. Maruti Swift Dzire (4 pax), Maruti Suzuki Ertiga (6 pax), and Tempo Traveller (15 pax) for Gujarat & Mumbai trips.',
  alternates: {
    canonical: '/fleet',
  },
  openGraph: {
    title: 'Our Taxi Fleet | Velora Cabs',
    description:
      'Inspect our well-maintained commercial taxi fleet for comfortable outstation, airport, and local travel.',
    url: `${SITE.url}/fleet`,
    siteName: SITE.name,
    images: [
      {
        url: '/images/og-velora.jpg',
        width: 1200,
        height: 630,
        alt: 'Velora Cabs Vehicle Fleet',
      },
    ],
  },
};

export default function FleetIndexPage() {
  return (
    <div className="min-h-screen bg-[#EBF9FF] flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 sm:pt-28 pb-16">
        <Breadcrumbs items={[{ label: 'Our Fleet' }]} />

        {/* Hero Section */}
        <section className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#bde9ff] shadow-sm space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#92EEFF]/30 border border-[#bde9ff]">
              <Car className="w-4 h-4 text-[#0284c7]" />
              <span className="text-xs font-bold text-[#0284c7] uppercase tracking-wider">
                Clean, Commercial Fleet
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a2a3d] tracking-tight">
              Our Taxi Fleet & Vehicle Options
            </h1>

            <p className="text-base sm:text-lg text-[#2d6180] max-w-3xl leading-relaxed">
              Every vehicle in the Velora Cabs fleet is commercially registered, routinely sanitized, mechanically inspected, and driven by a courteous, background-verified chauffeur. Whether traveling solo on business, with family, or organizing a group pilgrimage, we have the ideal vehicle for your comfort.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={`tel:${SITE.phoneFormatted}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0a2a3d] text-white text-xs sm:text-sm font-bold shadow-xs hover:bg-[#123952] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#92EEFF]" />
                <span>Call Dispatch: {SITE.phone}</span>
              </a>
              <a
                href={`${SITE.whatsapp}?text=${encodeURIComponent(
                  'Hello Velora Cabs, I would like to inquire about fleet availability.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#28A745] text-white text-xs sm:text-sm font-bold shadow-xs hover:bg-[#1e8c38] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Fleet Inquiry</span>
              </a>
            </div>
          </div>
        </section>

        {/* Vehicles Grid */}
        <section className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SITE.vehicles.map((veh) => (
              <div
                key={veh.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-[#bde9ff] hover:border-[#30AFFF] shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#EBF9FF] text-[#0284c7] border border-[#bde9ff]">
                      {veh.type}
                    </span>
                    <span className="text-xs text-[#28A745] font-bold flex items-center gap-1">
                      <ShieldCheck className="w-4 h-4" /> Commercial Permit
                    </span>
                  </div>

                  <div>
                    <h2 className="text-2xl font-black text-[#0a2a3d]">
                      {veh.name}
                    </h2>
                    <span className="text-xs text-[#2d6180] block mt-1">
                      Ideal for local commutes, airport runs & highway trips
                    </span>
                  </div>

                  {/* Specs List */}
                  <div className="space-y-2.5 pt-2 border-t border-[#bde9ff]/60 text-xs sm:text-sm text-[#2d6180]">
                    <div className="flex items-center gap-2.5">
                      <Users className="w-4 h-4 text-[#0284c7] shrink-0" />
                      <span>Capacity: Up to <strong>{veh.passengers} Passengers</strong></span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Luggage className="w-4 h-4 text-[#0284c7] shrink-0" />
                      <span>Luggage Space: <strong>{veh.luggage} Standard Bags</strong></span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Wind className="w-4 h-4 text-[#0284c7] shrink-0" />
                      <span>Air Conditioning: <strong>Full Climate Control</strong></span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#bde9ff]/60">
                  <Link
                    href={`/fleet/${veh.id}`}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#0a2a3d] hover:bg-[#123952] text-white font-bold text-xs sm:text-sm transition-all shadow-xs"
                  >
                    <span>View {veh.name} Details</span>
                    <ArrowRight className="w-4 h-4 text-[#92EEFF]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quality Standard Banner */}
        <section className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#bde9ff] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h2 className="text-xl font-black text-[#0a2a3d]">
                No Rupee Surcharges or Fare Escalations
              </h2>
              <p className="text-xs sm:text-sm text-[#2d6180] max-w-2xl leading-relaxed">
                We believe in total transparency. Every fleet booking is confirmed with an agreed-upon fixed quote before your departure, giving you peace of mind from start to finish.
              </p>
            </div>
            <Link
              href="/#inquiry"
              className="shrink-0 px-6 py-3.5 rounded-xl bg-[#28A745] hover:bg-[#1e8c38] text-white font-bold text-sm shadow-md transition-all active:scale-95"
            >
              Get Free Instant Quote
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
