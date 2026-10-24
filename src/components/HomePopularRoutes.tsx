import React from 'react';
import Link from 'next/link';
import { Navigation, Clock, ArrowRight } from 'lucide-react';
import { getConfirmedRoutes } from '@/data/routes';

export default function HomePopularRoutes() {
  // Show 8 confirmed routes linking to /routes/[route]
  const popularRoutes = getConfirmedRoutes().slice(0, 8);

  return (
    <section id="routes" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#30AFFF]/10 border border-[#30AFFF]/20 text-xs font-semibold text-[#30AFFF]">
            <Navigation className="w-3.5 h-3.5" />
            <span>Popular Intercity Routes</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1F33]">
            Popular Taxi Routes Across Gujarat & Mumbai
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Direct doorstep pickups with fixed fare confirmations. Choose one-way drops or relaxed round trips with experienced highway drivers.
          </p>
        </div>

        {/* 8 Routes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {popularRoutes.map((route) => {
            const cleanDistance = route.approxDistance.replace('depending on route and road conditions', '').trim();
            const routeTitle = `${route.from} to ${route.to} Taxi`;
            const oneLineSummary = `Reliable AC outstation cab transfer from ${route.from} to ${route.to} with verified chauffeur and doorstep pickup.`;

            return (
              <div
                key={route.slug}
                className="group bg-white rounded-2xl p-5 border border-slate-200 hover:border-[#30AFFF] shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#30AFFF]/10 text-[#30AFFF]">
                      Outstation Cab
                    </span>
                    <div className="flex items-center gap-1 text-xs text-slate-500">
                      <Clock className="w-3.5 h-3.5 text-[#30AFFF]" />
                      <span>{route.approxDuration}</span>
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-[#0B1F33] leading-snug">
                    <Link
                      href={`/routes/${route.slug}`}
                      className="hover:text-[#30AFFF] transition-colors"
                    >
                      {routeTitle}
                    </Link>
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-1">
                    {oneLineSummary}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#30AFFF]">
                  <span className="text-slate-500 font-normal truncate max-w-[140px]">
                    {cleanDistance}
                  </span>
                  <Link
                    href={`/routes/${route.slug}`}
                    className="flex items-center gap-1 hover:text-[#0284c7] group-hover:translate-x-1 transition-all shrink-0"
                    aria-label={`View Route: ${routeTitle}`}
                  >
                    <span>View Route</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
