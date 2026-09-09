'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Navigation, Clock, MapPin, ArrowRight, Sparkles, Gauge, Building2, Car, Compass } from 'lucide-react';
import { POPULAR_ROUTES } from '@/lib/constants';
import VeloraLogo from '@/components/VeloraLogo';

export default function PopularRoutes() {
  const handleGetQuote = (route: typeof POPULAR_ROUTES[0]) => {
    const formElement = document.getElementById('inquiry');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
      const event = new CustomEvent('select-route', {
        detail: {
          pickup: route.origin,
          drop: route.destination,
        },
      });
      window.dispatchEvent(event);
    }
  };

  return (
    <section id="routes" className="py-24 bg-[#0b0b0e] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#16161e] border border-[#06B6D4]/30">
            <Navigation className="w-3.5 h-3.5 text-[#06B6D4]" />
            <span className="text-xs font-bold text-[#06B6D4] uppercase tracking-wider">
              Frequent Intercity Trips
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Popular <span className="cyan-gradient-text">Cab Routes</span>
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            Transparent per-KM pricing with zero surprise charges. Travel comfortably between major cities in Gujarat and pan-India destinations.
          </p>
        </div>

        {/* Routes Grid with Frosted Glass & Related Lucide Icons floating behind */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {POPULAR_ROUTES.map((route, idx) => {
            // Corner glow on Card #0 ONLY
            const isFeatured = idx === 0;

            let BackgroundIcon = Navigation;
            let badgeClass = 'bg-amber-500/15 text-[#F5B921] border-amber-500/30';
            let iconColor = 'text-[#F5B921]';
            let originDot = 'bg-[#F5B921]';
            let vectorColor = 'text-amber-400/20';

            if (idx === 1) {
              BackgroundIcon = Gauge;
              badgeClass = 'bg-cyan-500/15 text-[#06B6D4] border-cyan-500/30';
              iconColor = 'text-[#06B6D4]';
              originDot = 'bg-[#06B6D4]';
              vectorColor = 'text-cyan-400/20';
            } else if (idx === 2) {
              BackgroundIcon = Building2;
              badgeClass = 'bg-violet-500/15 text-[#8B5CF6] border-violet-500/30';
              iconColor = 'text-[#8B5CF6]';
              originDot = 'bg-[#8B5CF6]';
              vectorColor = 'text-violet-400/20';
            } else if (idx === 3) {
              BackgroundIcon = Car;
              badgeClass = 'bg-emerald-500/15 text-[#10B981] border-emerald-500/30';
              iconColor = 'text-[#10B981]';
              originDot = 'bg-[#10B981]';
              vectorColor = 'text-emerald-400/20';
            }

            return (
              <motion.div
                key={route.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`neomorph-card ${
                  isFeatured ? 'neomorph-card-amber border-amber-500/40' : ''
                } p-6 flex flex-col justify-between group relative overflow-hidden`}
              >
                {/* Related Lucide React Icon Floating Behind Frosted Glass (Softly Blurred when Glowing) */}
                <div className={`absolute right-0.5 bottom-0.5 pointer-events-none transition-all duration-500 group-hover:scale-105 group-hover:opacity-40 opacity-20 ${vectorColor}`}>
                  <BackgroundIcon className="w-32 h-32 stroke-[1.2] blur-sm group-hover:blur-[2.5px] transition-all duration-500" />
                </div>

                <div className="relative z-10">
                  {/* Route Pill Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full border text-[11px] font-bold ${badgeClass}`}>
                      {route.popularFor}
                    </span>
                    <Navigation className={`w-5 h-5 text-gray-500 group-hover:${iconColor} transition-colors`} />
                  </div>

                  {/* Origin to Destination Display */}
                  <div className="my-4 p-4 rounded-xl neomorph-inset space-y-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-2.5 h-2.5 rounded-full ${originDot} shrink-0`} />
                      <div>
                        <span className="text-[10px] text-gray-400 uppercase tracking-wider block">From</span>
                        <span className="text-base font-extrabold text-white">{route.origin}</span>
                      </div>
                    </div>

                    <div className="ml-1 pl-3 border-l-2 border-dashed border-gray-700 h-4" />

                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400 shrink-0" />
                      <div>
                        <span className="text-[10px] text-gray-400 uppercase tracking-wider block">To</span>
                        <span className="text-base font-extrabold text-white">{route.destination}</span>
                      </div>
                    </div>
                  </div>

                  {/* Distance & Time Specs */}
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-300 my-4">
                    <div className="flex items-center gap-1.5 bg-white/5 p-2 rounded-lg border border-white/5">
                      <MapPin className={`w-4 h-4 ${iconColor}`} />
                      <span>{route.distance}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-white/5 p-2 rounded-lg border border-white/5">
                      <Clock className={`w-4 h-4 ${iconColor}`} />
                      <span>{route.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="relative z-10 pt-4 border-t border-white/5">
                  <button
                    onClick={() => handleGetQuote(route)}
                    className="w-full py-3 px-4 rounded-xl text-xs font-extrabold neomorph-button-gold flex items-center justify-center gap-2"
                  >
                    <span>Get Instant Quote</span>
                    <ArrowRight className="w-4 h-4 text-amber-950" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Custom Outstation Neomorphic Banner */}
        <div className="mt-14 neomorph-card neomorph-card-violet p-8 relative overflow-hidden">
          {/* Related Lucide React Icon floating in background */}
          <div className="absolute right-6 -bottom-6 pointer-events-none text-violet-400/20 opacity-25 hidden lg:block">
            <Compass className="w-64 h-64 stroke-[1.2]" />
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
            <div className="flex items-center gap-5">
              <div className="p-2 rounded-2xl neomorph-inset shrink-0 hidden sm:block">
                <VeloraLogo size={52} animated={true} />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/15 text-[#8B5CF6] border border-violet-500/30 text-xs font-bold mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Custom Tour Packages</span>
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-1">
                  Planning a Custom Pilgrimage or Outstation Tour?
                </h3>
                <p className="text-sm text-gray-300 max-w-xl leading-relaxed">
                  We design tailored multi-day itineraries for Somnath, Dwarka, Statue of Unity, Rajasthan, and pan-India destinations with experienced drivers.
                </p>
              </div>
            </div>

            <a
              href="#inquiry"
              className="w-full lg:w-auto px-8 py-4 rounded-2xl font-extrabold text-sm neomorph-button-gold shrink-0 text-center flex items-center justify-center gap-2"
            >
              <span>Request Custom Package</span>
              <ArrowRight className="w-4 h-4 text-amber-950" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
