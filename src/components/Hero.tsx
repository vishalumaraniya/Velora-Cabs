'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Clock,
  ShieldCheck,
  CheckCircle2,
  Car,
  Plane,
  Compass,
  Star,
  Phone,
  MessageCircle,
  Calendar,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { SITE } from '@/lib/site';
import { trackCallClick, trackWhatsAppClick } from '@/lib/analytics';

const SLIDES = [
  {
    id: 'city',
    title: 'City Cabs',
    label: 'Daily Commutes & City Rides',
    icon: Car,
    image: '/images/velora_hero_city_v2.webp',
    alt: 'Maruti Swift Dzire taxi for Bhavnagar local city rides and daily commutes',
    subtitle:
      'Comfortable daily city commutes and local point-to-point drops in Bhavnagar. Well-maintained AC sedans with verified drivers and fixed quote on WhatsApp.',
    badge: 'On-Time Local Pickup',
  },
  {
    id: 'airport',
    title: 'Airport Transfer',
    label: 'Airport Pickups & Drops',
    icon: Plane,
    image: '/images/velora_hero_airport_v2.webp',
    alt: 'Airport taxi transfer from Bhavnagar to Ahmedabad Airport (AMD) with luggage assistance',
    subtitle:
      'Punctual airport pickup and drop connecting Bhavnagar with Ahmedabad Airport (AMD), Mumbai, Surat, and Vadodara airports with full luggage assistance.',
    badge: 'Airport Schedule Focus',
  },
  {
    id: 'outstation',
    title: 'Outstation Trip',
    label: 'Outstation & Family Journeys',
    icon: Compass,
    image: '/images/velora_hero_outstation_v2.webp',
    alt: 'Maruti Suzuki Ertiga family outstation cab from Bhavnagar to Ahmedabad, Surat and Mumbai',
    subtitle:
      'Spacious AC sedans, Ertiga & Tempo Traveller for comfortable journeys across Gujarat, Mumbai, and pilgrimage destinations like Palitana.',
    badge: 'One-Way & Round Trips',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isClientLoaded, setIsClientLoaded] = useState(false);

  // Lazy enable slider cycling only after component mounts (protects LCP)
  useEffect(() => {
    setIsClientLoaded(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  const active = SLIDES[currentSlide];

  return (
    <section
      id="home"
      className="relative w-full min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden bg-[#EBF9FF] border-b border-[#bde9ff]"
    >
      {/* Decorative ambient backdrop glows */}
      <div className="absolute top-[-10%] right-[-5%] w-[650px] h-[650px] xl:w-[850px] xl:h-[850px] rounded-full bg-[#92EEFF]/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[550px] h-[550px] xl:w-[750px] xl:h-[750px] rounded-full bg-[#3DBE6B]/15 blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 sm:pt-28 lg:pt-28 xl:pt-32 pb-8 sm:pb-12 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Headlines, CTAs, Trust Elements */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5 z-10 text-left">

            {/* Category Selector Tab Pills (Hidden on Mobile) */}
            <div className="hidden sm:inline-flex items-center gap-1 p-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#bde9ff] shadow-xs">
              {SLIDES.map((slide, idx) => {
                const isActive = idx === currentSlide;
                const Icon = slide.icon;
                return (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentSlide(idx)}
                    type="button"
                    className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${isActive
                      ? 'bg-gradient-to-r from-[#0284c7] to-[#30AFFF] text-white shadow-xs'
                      : 'text-[#2d6180] hover:text-[#0B1F33] hover:bg-[#EBF9FF]'
                      }`}
                  >
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span>{slide.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Exactly ONE H1 on the homepage per Section 7 */}
            <div className="space-y-1.5">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-3xl xl:text-4xl font-black text-[#0B1F33] tracking-tight leading-[1.2] max-w-xl">
                Cab & Taxi Service in Bhavnagar <span className="sm:block">and Across Gujarat</span>
              </h1>
              <p className="text-sm sm:text-base font-bold text-[#0284c7] tracking-wide">
                Safe Rides. On Time. Every Time.
              </p>
            </div>

            {/* Dynamic Subheading */}
            <div className="min-h-[56px] sm:min-h-[64px]">
              <AnimatePresence mode="wait">
                <motion.p
                  key={active.subtitle}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="text-sm sm:text-base text-[#2d6180] leading-relaxed max-w-xl"
                >
                  {active.subtitle}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Rating & Defensible Commuter Social Proof Badge (Section 5.1 & 5.2) */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              {SITE.rating ? (
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#bde9ff] shadow-xs text-xs font-bold text-[#0B1F33]">
                  <Star className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                  <span>{SITE.rating.value}/5 on Google</span>
                </div>
              ) : SITE.googleReviewUrl ? (
                <a
                  href={SITE.googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#bde9ff] shadow-xs text-xs font-bold text-[#0284c7] hover:underline"
                >
                  <Star className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                  <span>Read our Google reviews</span>
                </a>
              ) : (
                /* TODO: Show real rating only after verified Google reviews exist */
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#bde9ff] shadow-xs text-xs font-bold text-[#0B1F33]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#28A745]" />
                  <span>Verified Drivers & Fleet</span>
                </div>
              )}

              <div className="text-xs font-semibold text-[#2d6180] flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#92EEFF]/30 border border-[#bde9ff]">
                <Sparkles className="w-3.5 h-3.5 text-[#0284c7]" />
                <span>
                  {SITE.stats?.trips
                    ? `${SITE.stats.trips.toLocaleString()}+ Trips Completed`
                    : 'Serving Bhavnagar & All Gujarat'}
                </span>
              </div>
            </div>

            {/* CTAs: Book Now + WhatsApp (in a single line) and Call button below them */}
            <div className="pt-2 space-y-2.5 sm:space-y-3 max-w-md sm:max-w-lg">
              {/* Row 1: Book Now & WhatsApp side-by-side in a single line */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                <a
                  href="#inquiry"
                  className="px-3 sm:px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-[#FFB400] hover:bg-[#e6a200] text-[#0B1F33] shadow-md transition-all flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer active:scale-95 text-center"
                >
                  <Calendar className="w-4 h-4 shrink-0" />
                  <span>Book Now</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0 hidden xs:inline" />
                </a>

                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('hero')}
                  className="px-3 sm:px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-[#28A745] hover:bg-[#218838] text-white shadow-sm transition-all flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer active:scale-95 text-center"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>WhatsApp Quote</span>
                </a>
              </div>

              {/* Row 2: Call button below them */}
              <div>
                <a
                  href={`tel:${SITE.phone}`}
                  onClick={() => trackCallClick('hero')}
                  className="w-full px-4 sm:px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-white hover:bg-[#EBF9FF] text-[#0B1F33] border border-[#bde9ff] shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 text-center"
                >
                  <Phone className="w-4 h-4 text-[#0284c7] shrink-0" />
                  <span>Call {SITE.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Trust Strip under the Hero (Section 12) */}
            <div className="pt-3 text-xs font-semibold text-[#2d6180] flex flex-wrap items-center gap-3">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#0284c7]" /> 24x7 Dispatch
              </span>
              <span>·</span>
              {/* TODO: Confirm with Dharmeshbhai if GPS-monitored is defensible */}
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#28A745]" /> GPS-tracked cabs
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0284c7]" /> Verified drivers
              </span>
              <span>·</span>
              {/* TODO: Show real rating only after verified Google reviews exist */}
              <span className="flex items-center gap-1 text-[#0B1F33] font-bold">
                <Sparkles className="w-3.5 h-3.5 text-[#0284c7]" /> Sanitized AC Cabs
              </span>
            </div>

          </div>

          {/* Right Column: Single LCP WebP Hero Image with Priority (Section 3.2) */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
            <div className="relative w-full max-w-lg lg:max-w-xl">

              {/* Active Slide Image */}
              <div className="relative aspect-[4/3] w-full flex items-center justify-center">
                <Image
                  src={active.image}
                  alt={active.alt}
                  width={800}
                  height={600}
                  priority={currentSlide === 0}
                  loading={currentSlide === 0 ? 'eager' : 'lazy'}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                  className="w-full h-auto object-contain filter drop-shadow-md select-none transition-opacity duration-500"
                />
              </div>

              {/* Slide Indicators */}
              <div className="flex items-center justify-center gap-2 pt-4">
                {SLIDES.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentSlide(idx)}
                    type="button"
                    aria-label={`View ${slide.title}`}
                    className={`h-2 rounded-full transition-all cursor-pointer ${idx === currentSlide
                      ? 'w-8 bg-gradient-to-r from-[#0284c7] to-[#30AFFF]'
                      : 'w-2 bg-[#bde9ff] hover:bg-[#30AFFF]/50'
                      }`}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
