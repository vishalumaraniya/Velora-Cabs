import React from 'react';
import Link from 'next/link';
import { Navigation, Clock, ArrowRight } from 'lucide-react';
import { ROUTES } from '@/data/routes';

export default function HomePopularRoutes() {
  // Show top 8 high-demand routes
  const popularRoutes = ROUTES.slice(0, 8);

  return (
    <section id="routes-section" className="py-20 bg-[#EBF9FF] border-b border-[#bde9ff]">
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#92EEFF]/30 border border-[#bde9ff]">
            <Navigation className="w-4 h-4 text-[#0284c7]" />
            <span className="text-xs font-bold text-[#0284c7] uppercase tracking-wider">
              Popular Intercity Routes
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a2a3d]">
            Popular Taxi Routes Across Gujarat & Mumbai
          </h2>
          <p className="text-sm sm:text-base text-[#2d6180] leading-relaxed">
            Direct doorstep pickups with fixed fare confirmations. Choose one-way drops or relaxed round trips with experienced highway drivers.
          </p>
        </div>

        {/* 8 Routes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {popularRoutes.map((route) => (
            <Link
              key={route.slug}
              href={`/taxi/${route.slug}`}
              className="group bg-white rounded-2xl p-5 border border-[#bde9ff] hover:border-[#30AFFF] shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#EBF9FF] text-[#0284c7] border border-[#bde9ff]">
                    Intercity Taxi
                  </span>
                  <div className="flex items-center gap-1 text-xs text-[#2d6180]">
                    <Clock className="w-3.5 h-3.5 text-[#30AFFF]" />
                    <span>~{route.durationHrs}</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-[#0a2a3d] group-hover:text-[#0284c7] transition-colors leading-snug">
                  {route.from} to {route.to} Taxi
                </h3>

                <p className="text-xs text-[#2d6180] line-clamp-2">
                  {route.intro}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#bde9ff]/60 flex items-center justify-between text-xs font-semibold text-[#0284c7]">
                <span>Distance: ~{route.distanceKm} km</span>
                <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  View Route <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Link to All Routes */}
        <div className="text-center pt-2">
          <Link
            href="/taxi"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-[#bde9ff] text-sm font-bold text-[#0a2a3d] hover:bg-[#0a2a3d] hover:text-white transition-all shadow-xs"
          >
            <span>Explore All 25+ Gujarat & Mumbai Taxi Routes</span>
            <ArrowRight className="w-4 h-4 text-[#30AFFF]" />
          </Link>
        </div>

      </div>
    </section>
  );
}
