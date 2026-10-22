import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { ROUTES } from '@/data/routes';
import { SITE } from '@/data/site';
import { Navigation, Clock, MapPin, ArrowRight, Phone, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Outstation Taxi Routes in Gujarat & Mumbai',
  description:
    'Browse all outstation and intercity cab routes across Bhavnagar, Ahmedabad, Vadodara, Surat, Bharuch, Dahej, Vapi, Daman, Mumbai, Bhuj, and Gandhidham. Fixed fares, 24x7 service.',
  alternates: {
    canonical: '/taxi',
  },
  openGraph: {
    title: 'Outstation Taxi Routes in Gujarat & Mumbai | Velora Cabs',
    description:
      'Browse all one-way and round trip taxi routes with Velora Cabs across Gujarat and Mumbai.',
    url: `${SITE.url}/taxi`,
    siteName: SITE.name,
    images: [
      {
        url: '/images/og-velora.jpg',
        width: 1200,
        height: 630,
        alt: 'Velora Cabs Outstation Routes',
      },
    ],
  },
};

export default function TaxiIndexPage() {
  // Group routes by origin city
  const groupedRoutes: Record<string, typeof ROUTES> = {};
  ROUTES.forEach((route) => {
    if (!groupedRoutes[route.from]) {
      groupedRoutes[route.from] = [];
    }
    groupedRoutes[route.from].push(route);
  });

  const origins = Object.keys(groupedRoutes).sort();

  return (
    <div className="min-h-screen bg-[#EBF9FF] flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 sm:pt-28 pb-16">
        <Breadcrumbs items={[{ label: 'Outstation Routes' }]} />

        {/* Hero Banner */}
        <section className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#bde9ff] shadow-sm space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#92EEFF]/30 border border-[#bde9ff]">
              <Navigation className="w-4 h-4 text-[#0284c7]" />
              <span className="text-xs font-bold text-[#0284c7] uppercase tracking-wider">
                Comprehensive Network
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a2a3d] tracking-tight">
              Outstation Taxi Routes in Gujarat & Mumbai
            </h1>

            <p className="text-base sm:text-lg text-[#2d6180] max-w-3xl leading-relaxed">
              Explore our full catalog of one-way drops and return taxi routes connecting Bhavnagar, Saurashtra, Central & South Gujarat industrial zones, and Mumbai. Every route includes door-to-door pickup, verified drivers, and transparent fixed fare confirmations.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`tel:${SITE.phoneFormatted}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0a2a3d] text-white text-xs sm:text-sm font-bold shadow-xs hover:bg-[#123952] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#92EEFF]" />
                <span>Call Dispatch: {SITE.phone}</span>
              </a>
              <a
                href={`${SITE.whatsapp}?text=${encodeURIComponent(
                  'Hello Velora Cabs, I would like to inquire about outstation taxi routes.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#28A745] text-white text-xs sm:text-sm font-bold shadow-xs hover:bg-[#1e8c38] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Quote</span>
              </a>
            </div>
          </div>
        </section>

        {/* Grouped Routes Listing */}
        <section className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-12">
          {origins.map((origin) => {
            const routesFromCity = groupedRoutes[origin];

            return (
              <div key={origin} className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-[#bde9ff]">
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-5 h-5 text-[#0284c7]" />
                    <h2 className="text-xl sm:text-2xl font-black text-[#0a2a3d]">
                      Cabs Departing From {origin}
                    </h2>
                  </div>
                  <span className="text-xs font-bold text-[#0284c7] bg-white px-3 py-1 rounded-full border border-[#bde9ff]">
                    {routesFromCity.length} Routes
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {routesFromCity.map((route) => (
                    <Link
                      key={route.slug}
                      href={`/taxi/${route.slug}`}
                      className="group bg-white rounded-2xl p-5 border border-[#bde9ff] hover:border-[#30AFFF] shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between space-y-4"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs text-[#2d6180]">
                          <span className="font-semibold">{origin} → {route.to}</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-[#30AFFF]" />
                            ~{route.durationHrs}
                          </span>
                        </div>
                        <h3 className="text-base font-bold text-[#0a2a3d] group-hover:text-[#0284c7] transition-colors">
                          {route.from} to {route.to} Taxi
                        </h3>
                        <p className="text-xs text-[#2d6180] line-clamp-2">
                          {route.intro}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-[#bde9ff]/60 flex items-center justify-between text-xs font-semibold text-[#0284c7]">
                        <span>Distance: ~{route.distanceKm} km</span>
                        <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          View Details <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </section>
      </main>

      <Footer />
    </div>
  );
}
