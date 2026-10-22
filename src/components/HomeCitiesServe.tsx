import React from 'react';
import Link from 'next/link';
import { MapPin, ArrowRight, Building2 } from 'lucide-react';
import { CITIES } from '@/data/cities';

export default function HomeCitiesServe() {
  return (
    <section className="py-20 bg-white border-b border-[#bde9ff]">
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#92EEFF]/30 border border-[#bde9ff]">
            <MapPin className="w-4 h-4 text-[#0284c7]" />
            <span className="text-xs font-bold text-[#0284c7] uppercase tracking-wider">
              Network Coverage
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a2a3d]">
            Cities We Serve in Gujarat & Maharashtra
          </h2>
          <p className="text-sm sm:text-base text-[#2d6180] leading-relaxed">
            From our headquarters in Bhavnagar to major commercial ports, international airports, and pilgrimage centers, Velora Cabs provides 24x7 local and outstation taxi service.
          </p>
        </div>

        {/* 14 Cities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3 sm:gap-4">
          {CITIES.map((city) => (
            <Link
              key={city.slug}
              href={`/cab-service/${city.slug}`}
              className="group bg-[#EBF9FF]/60 hover:bg-white rounded-xl p-4 border border-[#bde9ff] hover:border-[#30AFFF] shadow-2xs hover:shadow-xs transition-all text-center flex flex-col items-center justify-center space-y-2"
            >
              <div className="w-9 h-9 rounded-lg bg-white group-hover:bg-[#30AFFF]/15 border border-[#bde9ff] flex items-center justify-center transition-colors">
                <Building2 className="w-4 h-4 text-[#0284c7]" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-[#0a2a3d] group-hover:text-[#0284c7] transition-colors">
                  {city.name}
                </h3>
                <span className="text-[11px] text-[#2d6180] block mt-0.5">
                  Cab Service →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Hub highlights footer */}
        <div className="p-4 sm:p-6 rounded-2xl bg-[#EBF9FF] border border-[#bde9ff] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#2d6180]">
          <span>
            <strong>Need a cab from a nearby village or highway junction?</strong> We provide doorstep pickups anywhere within our 14 network zones.
          </span>
          <Link
            href="/contact"
            className="shrink-0 text-[#0284c7] hover:underline font-bold flex items-center gap-1"
          >
            <span>Inquire for Custom Pickup</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
