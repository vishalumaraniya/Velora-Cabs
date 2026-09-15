'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Users, Briefcase, Check, ArrowRight, ShieldCheck, Car } from 'lucide-react';
import { FLEET_CARS } from '@/lib/constants';

export default function Fleet() {
  const mainCar = FLEET_CARS[0];

  return (
    <section id="fleet" className="py-24 bg-[#0b0b0e] relative border-t border-white/5">
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#16161e] border border-[#F5B921]/30">
            <ShieldCheck className="w-3.5 h-3.5 text-[#F5B921]" />
            <span className="text-xs font-bold text-[#F5B921] uppercase tracking-wider">
              Well-Maintained Fleet
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Our Vehicle <span className="gold-gradient-text">Fleet Showcase</span>
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            Clean, comfortable, fuel-efficient sedans maintained to the highest safety standards for your peace of mind.
          </p>
        </div>

        {/* Fleet Main Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="neomorph-card neomorph-card-amber p-6 md:p-10 relative overflow-hidden group"
        >
          {/* Related Lucide React Icon Floating Behind Frosted Glass (Softly Blurred when Glowing) */}
          <div className="absolute right-0.5 bottom-0.5 pointer-events-none text-amber-400/20 opacity-25 group-hover:opacity-45 group-hover:scale-105 transition-all duration-500 hidden lg:block">
            <Car className="w-56 h-56 stroke-[1.2] blur-sm group-hover:blur-[2.5px] transition-all duration-500" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Car Image Visual */}
            <div className="lg:col-span-7 relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden bg-[#111116] border border-white/10 group/img">
              <Image
                src={mainCar.image}
                alt={mainCar.name}
                fill
                className="object-cover group-hover/img:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute top-4 left-4 bg-[#0b0b0e]/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#F5B921]/40 text-[#F5B921] text-xs font-extrabold shadow-lg">
                Primary Fleet Vehicle
              </div>
            </div>

            {/* Car Details & Specifications */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#F5B921] block mb-1">
                  {mainCar.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {mainCar.name}
                </h3>
                <p className="text-sm text-gray-300 mt-2 leading-relaxed">
                  {mainCar.description}
                </p>
              </div>

              {/* Key Specs Pills */}
              <div className="grid grid-cols-2 gap-3">
                <div className="neomorph-inset p-3 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-amber-500/15 text-[#F5B921]">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 block">Capacity</span>
                    <span className="text-xs font-bold text-white">4 Passengers + Driver</span>
                  </div>
                </div>

                <div className="neomorph-inset p-3 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500/15 text-[#06B6D4]">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 block">Boot Space</span>
                    <span className="text-xs font-bold text-white">Large Luggage Boot</span>
                  </div>
                </div>
              </div>

              {/* Features Checklist */}
              <div className="space-y-2 border-t border-white/10 pt-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                  Vehicle Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300">
                  {mainCar.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#F5B921] shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <a
                  href="#inquiry"
                  className="w-full py-3.5 px-6 rounded-xl text-sm font-extrabold neomorph-button-gold flex items-center justify-center gap-2"
                >
                  <span>Book Premium AC Sedan</span>
                  <ArrowRight className="w-4 h-4 text-amber-950" />
                </a>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
