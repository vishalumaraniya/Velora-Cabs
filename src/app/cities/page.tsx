import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { getConfirmedCities } from '@/data/cities';
import { SITE } from '@/lib/site';
import { buildMetadata } from '@/lib/metadata';
import {
  Building2,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Phone,
  MessageCircle,
  Car,
} from 'lucide-react';

export const metadata: Metadata = buildMetadata({
  title: 'Cities We Serve Across Gujarat & Mumbai | Velora Cabs',
  description:
    'Discover 24x7 local, airport and outstation cab coverage across 14 cities in Gujarat and Maharashtra. Bhavnagar HQ, Ahmedabad, Surat, Vadodara & Mumbai.',
  path: '/cities',
});

export default function CitiesIndexPage() {
  const cities = getConfirmedCities();

  const getAudienceBadge = (audience: string) => {
    switch (audience) {
      case 'industrial':
        return { label: 'Industrial Hub', bg: 'bg-amber-500/10 text-amber-700 border-amber-200' };
      case 'pilgrimage-leisure':
        return { label: 'Pilgrimage & Leisure', bg: 'bg-emerald-500/10 text-emerald-700 border-emerald-200' };
      default:
        return { label: 'Commercial Metro', bg: 'bg-[#30AFFF]/10 text-[#0284c7] border-[#bde9ff]' };
    }
  };

  return (
    <div className="min-h-screen bg-[#EBF9FF] flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 sm:pt-28 pb-16">
        <Breadcrumbs items={[{ label: 'Cities We Serve' }]} />

        {/* Hero Section */}
        <section className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#bde9ff] shadow-sm space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#92EEFF]/30 border border-[#bde9ff]">
              <MapPin className="w-4 h-4 text-[#0284c7]" />
              <span className="text-xs font-bold text-[#0284c7] uppercase tracking-wider">
                Full Gujarat & Mumbai Network
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1F33] tracking-tight">
              Cities We Serve in Gujarat & Maharashtra
            </h1>

            <p className="text-base sm:text-lg text-[#2d6180] max-w-3xl leading-relaxed">
              From our operational headquarters in Bhavnagar to international commercial ports, state capitals, industrial GIDC corridors, and sacred pilgrimage destinations, Velora Cabs provides reliable 24x7 local rides, airport transfers, and outstation taxi connectivity.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={`tel:${SITE.phoneFormatted}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0B1F33] text-white text-xs sm:text-sm font-bold shadow-xs hover:bg-[#123952] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#92EEFF]" />
                <span>Call Dispatch: {SITE.phoneDisplay}</span>
              </a>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#28A745] text-white text-xs sm:text-sm font-bold shadow-xs hover:bg-[#1e8c38] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp City Inquiry</span>
              </a>
            </div>
          </div>
        </section>

        {/* 14 Cities Grid */}
        <section className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city) => {
              const badge = getAudienceBadge(city.audience);

              return (
                <div
                  key={city.slug}
                  className="bg-white rounded-2xl p-6 border border-[#bde9ff] hover:border-[#30AFFF] shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border ${badge.bg}`}>
                        {badge.label}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-[#EBF9FF] flex items-center justify-center text-[#0284c7]">
                        <Building2 className="w-4 h-4" />
                      </div>
                    </div>

                    <div>
                      <h2 className="text-xl font-bold text-[#0B1F33]">
                        <Link
                          href={`/taxi-service/${city.slug}`}
                          className="hover:text-[#30AFFF] transition-colors"
                        >
                          {city.name} Taxi Service
                        </Link>
                      </h2>
                      <span className="text-xs text-[#2d6180] block mt-1">
                        {city.h1}
                      </span>
                    </div>

                    <p className="text-xs text-[#2d6180] line-clamp-3 leading-relaxed">
                      {city.intro}
                    </p>

                    {/* Local Highlights list */}
                    <div className="space-y-1.5 pt-3 border-t border-[#bde9ff]/50 text-xs text-[#2d6180]">
                      <div className="flex items-start gap-2">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#28A745] shrink-0 mt-0.5" />
                        <span className="truncate">{city.localHooks[0]}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Car className="w-3.5 h-3.5 text-[#0284c7] shrink-0 mt-0.5" />
                        <span className="truncate">{city.services[0]}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#bde9ff]/50 flex items-center justify-between text-xs font-bold text-[#0284c7]">
                    <span className="text-[#2d6180] font-normal">24x7 Cab Coverage</span>
                    <Link
                      href={`/taxi-service/${city.slug}`}
                      className="inline-flex items-center gap-1 hover:text-[#0B1F33] group-hover:translate-x-1 transition-all"
                      aria-label={`View Cab Service in ${city.name}`}
                    >
                      <span>Explore City</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Network Reach Banner */}
        <section className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#bde9ff] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h2 className="text-xl font-black text-[#0B1F33]">
                Traveling Beyond These 14 Hubs?
              </h2>
              <p className="text-xs sm:text-sm text-[#2d6180] max-w-2xl leading-relaxed">
                Whether departing from rural talukas in Saurashtra, seaport checkpoints, or border industrial estates, Velora Cabs arranges custom doorstep pickups with verified chauffeurs.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 px-6 py-3.5 rounded-xl bg-[#0B1F33] hover:bg-[#123952] text-white font-bold text-sm shadow-md transition-all active:scale-95"
            >
              Contact Dispatch Desk
            </Link>
          </div>
        </section>
      </main>

      <JsonLd
        type="breadcrumb"
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Cities We Serve', path: '/cities' },
        ]}
      />

      <Footer />
    </div>
  );
}
