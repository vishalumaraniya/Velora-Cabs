'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Calendar, Clock, Award, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';
import ClassicCarSvg from '@/components/ClassicCarSvg';

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-12 sm:pt-32 sm:pb-16 md:pt-40 md:pb-32 overflow-hidden bg-[#0b0b0e]">

      {/* Main Container for Hero Content & Car */}
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">

          {/* Left Column: Clean Title & Primary CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 xl:col-span-6 space-y-7 text-left relative z-10"
          >

            {/* Main Tagline & Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              <span className="block text-gray-100">Safe Rides.</span>
              <span className="gold-gradient-text block">On Time. Every Time.</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-gray-300 max-w-xl font-normal leading-relaxed">
              Experience seamless outstation trips, airport transfers, and local city rides in clean, sanitized premium AC sedans. Driven by experienced drivers available 24x7.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4 pt-4 lg:pt-8">
              <a
                href="#inquiry"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl font-extrabold text-sm neomorph-button-gold flex items-center justify-center gap-2 group"
              >
                <Calendar className="w-4 h-4 text-amber-950 group-hover:scale-110 transition-transform" />
                <span>Book a Ride Now</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phones[0].raw}`}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-sm neomorph-button-dark flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#06B6D4]" />
                <span>Call {BUSINESS_INFO.phones[0].display}</span>
              </a>
            </div>

            {/* Key Trust Highlights Footer */}
            <div className="pt-6 flex flex-wrap items-center justify-start gap-6 sm:gap-8 text-sm sm:text-base font-medium text-gray-200 border-t border-white/10">
              <div className="flex items-center gap-2.5">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-[#F5B921] shrink-0" />
                <span>24x7 Availability</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#06B6D4] shrink-0" />
                <span>Verified Drivers</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-[#8B5CF6] shrink-0" />
                <span>Flat Transparent Rates</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Car Illustration (locked to grid on all displays including >1500px) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="hidden lg:flex lg:col-span-5 xl:col-span-6 items-center justify-center lg:justify-end relative pointer-events-none"
          >
            <div className="w-full max-w-[540px] xl:max-w-[640px] 2xl:max-w-[720px] lg:translate-x-2 xl:translate-x-6">
              <ClassicCarSvg
                asRawSvg
                strokeWidth={32}
                className="w-full h-auto filter drop-shadow-[0_0_35px_rgba(245,185,33,0.55)]"
              />
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
