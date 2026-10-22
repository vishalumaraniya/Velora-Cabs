import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { CITIES } from '@/data/cities';
import { SITE } from '@/data/site';
import { MapPin, Building2, ArrowRight, Phone, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cities We Serve | Cab Service Across Gujarat & Mumbai',
  description:
    'Velora Cabs operates 24x7 local, airport, and outstation taxi service across 14 cities in Gujarat and Mumbai including Bhavnagar, Ahmedabad, Vadodara, Surat, Bharuch, Dahej, Vapi, Daman, Dholera, Mumbai, Bhuj, Gandhidham, Amreli, and Palitana.',
  alternates: {
    canonical: '/cab-service',
  },
  openGraph: {
    title: 'Cities We Serve | Velora Cabs Gujarat & Mumbai',
    description:
      'Explore all 14 cities covered by Velora Cabs with 24x7 doorstep pickup and fixed quotes.',
    url: `${SITE.url}/cab-service`,
    siteName: SITE.name,
    images: [
      {
        url: '/images/og-velora.jpg',
        width: 1200,
        height: 630,
        alt: 'Velora Cabs Network Cities',
      },
    ],
  },
};

export default function CitiesIndexPage() {
  return (
    <div className="min-h-screen bg-[#EBF9FF] flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 sm:pt-28 pb-16">
        <Breadcrumbs items={[{ label: 'Cities We Serve' }]} />

        {/* Hero Banner */}
        <section className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#bde9ff] shadow-sm space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#92EEFF]/30 border border-[#bde9ff]">
              <MapPin className="w-4 h-4 text-[#0284c7]" />
              <span className="text-xs font-bold text-[#0284c7] uppercase tracking-wider">
                14 Network Hubs
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a2a3d] tracking-tight">
              Cab Service in Gujarat & Mumbai
            </h1>

            <p className="text-base sm:text-lg text-[#2d6180] max-w-3xl leading-relaxed">
              With our operational roots in Bhavnagar, Velora Cabs connects Gujarat’s primary economic districts, industrial ports, international airports, and spiritual heritage sites with Mumbai. Explore each city hub below for local pickup details, popular highway routes, and booking information.
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
                  'Hello Velora Cabs, I would like to inquire about taxi service in my city.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#28A745] text-white text-xs sm:text-sm font-bold shadow-xs hover:bg-[#1e8c38] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Free Quote</span>
              </a>
            </div>
          </div>
        </section>

        {/* 14 Cities Cards */}
        <section className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CITIES.map((city) => (
              <Link
                key={city.slug}
                href={`/cab-service/${city.slug}`}
                className="group bg-white rounded-3xl p-6 sm:p-7 border border-[#bde9ff] hover:border-[#30AFFF] shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#EBF9FF] border border-[#bde9ff] flex items-center justify-center text-[#0284c7] group-hover:scale-105 transition-transform">
                    <Building2 className="w-6 h-6" />
                  </div>

                  <h2 className="text-xl font-bold text-[#0a2a3d] group-hover:text-[#0284c7] transition-colors">
                    {city.name}
                  </h2>

                  <p className="text-xs sm:text-sm text-[#2d6180] line-clamp-3 leading-relaxed">
                    {city.intro}
                  </p>

                  <div className="pt-2">
                    <span className="text-[11px] font-bold text-[#0284c7] uppercase tracking-wider block mb-1">
                      Key Pickup Areas:
                    </span>
                    <span className="text-xs text-[#5c9ab8] line-clamp-1">
                      {city.pickupAreas.slice(0, 4).join(', ')}...
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#bde9ff]/60 flex items-center justify-between text-xs font-bold text-[#0284c7]">
                  <span>Explore {city.name} Cab Service</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
