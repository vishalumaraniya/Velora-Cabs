'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Calendar, Clock, Award, ShieldCheck, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';
import VeloraLogo from '@/components/VeloraLogo';
import SvgTaxiIllustration from '@/components/SvgTaxiIllustration';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-[#0b0b0e]">

      {/* Main Container for Left Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Clean Title & Primary CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-7 text-center lg:text-left"
          >
            {/* Animated SVG Crest Top Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#16161e] border border-[#F5B921]/30 shadow-lg">
              <VeloraLogo size={22} animated={true} />
              <span className="text-xs font-extrabold text-[#F5B921] uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Premier Cab Service in Gujarat & Pan-India
              </span>
            </div>

            {/* Main Tagline & Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              <span className="block text-gray-100">Safe Rides.</span>
              <span className="gold-gradient-text block">On Time. Every Time.</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Experience seamless outstation trips, airport transfers, and local city rides in clean, sanitized Maruti Suzuki Dzire sedans. Driven by experienced drivers available 24x7.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
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
            <div className="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-gray-300 border-t border-white/5">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#F5B921]" />
                <span>24x7 Availability</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#06B6D4]" />
                <span>Verified Drivers</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#8B5CF6]" />
                <span>Flat Transparent Rates</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Full Bleed Right Viewport Edge Car Layer */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[62%] xl:w-[50%] flex items-center justify-start pointer-events-none z-0">
        <SvgTaxiIllustration />
      </div>

    </section>
  );
}
