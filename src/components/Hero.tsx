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
  Zap,
  Phone,
  Calendar,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';

const SLIDES = [
  {
    id: 'city',
    title: 'City Cabs',
    label: 'Daily Commutes & City Rides',
    badgeText: 'Premier Taxi Network',
    badgeClass: 'border-[#92EEFF] text-[#0a2a3d] bg-white/90',
    dotClass: 'bg-[#30AFFF]',
    icon: Car,
    image: '/images/velora_hero_city_v2.png',
    alt: 'Modern Online Taxi Cab Booking Service with GPS Map and Car Illustration',
    tag: 'Quick City Drops',
    subtitle: 'Swift daily commutes and local city drops across major routes. Clean, sanitized AC vehicles with verified drivers and transparent zero surge pricing.',
    statBadge: {
      title: '15-Min Fast Dispatch',
      subtitle: 'Doorstep pickup in major cities',
      icon: Zap,
      iconColor: 'text-[#30AFFF]',
      bgIcon: 'bg-[#30AFFF]/10',
    },
  },
  {
    id: 'airport',
    title: 'Airport Transfer',
    label: 'On-Time Airport Pickups & Drops',
    badgeText: 'Guaranteed 24x7 Airport Flight Pickups',
    badgeClass: 'border-[#92EEFF] text-[#0a2a3d] bg-white/90',
    dotClass: 'bg-[#30AFFF]',
    icon: Plane,
    image: '/images/velora_hero_airport_v2.png',
    alt: 'Airport Taxi Transfer with Chauffeur and Flight Departures Illustration',
    tag: 'Flight Ready',
    subtitle: 'Guaranteed on-time airport pickups and drops 24 hours a day. Enjoy real-time flight tracking, zero wait fee on delays, and full luggage assistance.',
    statBadge: {
      title: 'Flight Tracking 24×7',
      subtitle: 'Free 45-min wait on delays',
      icon: Plane,
      iconColor: 'text-[#30AFFF]',
      bgIcon: 'bg-[#30AFFF]/10',
    },
  },
  {
    id: 'outstation',
    title: 'Outstation Trip',
    label: 'Memorable Family Road Journeys',
    badgeText: 'Comfortable Outstation & Holiday Journeys',
    badgeClass: 'border-[#28A745] text-[#0a2a3d] bg-white/90',
    dotClass: 'bg-[#28A745]',
    icon: Compass,
    image: '/images/velora_hero_outstation_v2.png',
    alt: 'Family Outstation Road Trip with Happy Family and Kids Illustration',
    tag: 'Family Road Trip',
    subtitle: 'Spacious AC sedans, Ertiga & Innova cabs for family holidays. Experience comfortable outstation travel with transparent flat rates and zero return charges.',
    statBadge: {
      title: 'One-Way & Round Trips',
      subtitle: 'Zero return fare on drops',
      icon: ShieldCheck,
      iconColor: 'text-[#28A745]',
      bgIcon: 'bg-[#28A745]/10',
    },
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides with consistent 7s settle time per slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const active = SLIDES[currentSlide];

  const handleTabClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen lg:h-screen flex items-center overflow-hidden bg-[#EBF9FF] border-b border-[#bde9ff]"
    >
      {/* Decorative ambient backdrop glows & subtle geometry pattern for desktop depth */}
      <div className="absolute top-[-10%] right-[-5%] w-[650px] h-[650px] xl:w-[850px] xl:h-[850px] rounded-full bg-[#92EEFF]/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[550px] h-[550px] xl:w-[750px] xl:h-[750px] rounded-full bg-[#3DBE6B]/15 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-25 pointer-events-none bg-[radial-gradient(#30AFFF_1px,transparent_1px)] [background-size:32px_32px] hidden lg:block" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 sm:pt-28 lg:pt-16 xl:pt-20 pb-8 lg:pb-6 flex flex-col justify-center h-full">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 xl:gap-12 items-center">

          {/* Left Column: Interactive Category Tabs, Main Headline, Subtitle, Trust Cards & CTAs */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-4 sm:space-y-5 lg:space-y-6 z-10">

            {/* Interactive Category Selector Pill Bar */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex flex-wrap items-center gap-1 p-1 sm:p-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#bde9ff] shadow-xs relative"
            >
              {SLIDES.map((slide, idx) => {
                const isActive = idx === currentSlide;
                const Icon = slide.icon;
                return (
                  <button
                    key={slide.id}
                    onClick={() => handleTabClick(idx)}
                    type="button"
                    className={`relative flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-4 sm:py-2 rounded-full text-[11px] sm:text-sm font-bold transition-colors duration-200 cursor-pointer ${
                      isActive
                        ? 'text-white'
                        : 'text-[#2d6180] hover:text-[#0a2a3d] hover:bg-[#EBF9FF]/60'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeHeroCategoryPill"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0284c7] via-[#0ea5e9] to-[#30AFFF] shadow-md shadow-[#0284c7]/25"
                        transition={{
                          type: 'spring',
                          stiffness: 400,
                          damping: 32,
                        }}
                      />
                    )}
                    <Icon className={`w-3 h-3 sm:w-4 sm:h-4 relative z-10 transition-colors ${isActive ? 'text-white' : 'text-[#0284c7]'}`} />
                    <span className="relative z-10">{slide.title}</span>
                  </button>
                );
              })}
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="font-black tracking-tight text-[#0a2a3d] leading-[1.1]"
            >
              <span className="block text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                Safe Rides.
              </span>
              <span className="bg-gradient-to-r from-[#30AFFF] via-[#0284c7] to-[#0072bc] bg-clip-text text-transparent block text-[20px] xs:text-2xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl mt-0.5 sm:mt-1.5">
                On Time. Every Time.
              </span>
            </motion.h1>

            {/* Subheading Box */}
            <div className="min-h-[48px] sm:min-h-[76px] lg:min-h-[84px] xl:min-h-[92px] flex items-start">
              <AnimatePresence mode="wait">
                <motion.p
                  key={active.subtitle}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="text-xs sm:text-lg lg:text-lg xl:text-xl text-[#2d6180] font-normal leading-relaxed max-w-xl xl:max-w-2xl"
                >
                  {active.subtitle}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Rider Trust & Ratings Social Proof Badge */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-0.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-xl bg-white/80 backdrop-blur-xs border border-[#bde9ff] shadow-xs">
                <div className="flex items-center gap-0.5 text-[#F59E0B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#F59E0B]" />
                  ))}
                </div>
                <span className="text-[11px] sm:text-sm font-extrabold text-[#0a2a3d]">4.9/5 Rating</span>
              </div>
              <div className="text-[11px] sm:text-sm font-semibold text-[#2d6180] flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-xl bg-[#92EEFF]/30 border border-[#bde9ff]">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0284c7]" />
                <span>15,000+ Happy Commuters</span>
              </div>
            </div>

            {/* Trust Highlights Cards Grid (Compact 3-column row on mobile) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="pt-1 grid grid-cols-3 gap-1.5 sm:gap-3 text-xs sm:text-sm font-semibold text-[#0a2a3d]"
            >
              <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1 sm:gap-2.5 p-2 sm:p-3 rounded-xl bg-white/80 border border-[#bde9ff] shadow-2xs hover:border-[#30AFFF] transition-colors text-center sm:text-left">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#30AFFF]/15 flex items-center justify-center shrink-0">
                  <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0284c7]" />
                </div>
                <span className="font-bold text-[10px] sm:text-xs lg:text-sm leading-tight">24x7 Dispatch</span>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1 sm:gap-2.5 p-2 sm:p-3 rounded-xl bg-white/80 border border-[#bde9ff] shadow-2xs hover:border-[#28A745] transition-colors text-center sm:text-left">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#28A745]/15 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#28A745]" />
                </div>
                <span className="font-bold text-[10px] sm:text-xs lg:text-sm leading-tight">Verified Drivers</span>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1 sm:gap-2.5 p-2 sm:p-3 rounded-xl bg-white/80 border border-[#bde9ff] shadow-2xs hover:border-[#30AFFF] transition-colors text-center sm:text-left">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#30AFFF]/15 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0284c7]" />
                </div>
                <span className="font-bold text-[10px] sm:text-xs lg:text-sm leading-tight">Doorstep Pickup</span>
              </div>
            </motion.div>

            {/* Action Buttons (Bottom of Banner Content) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4"
            >
              <a
                href="#inquiry"
                className="px-5 py-3 sm:px-7 sm:py-3.5 lg:px-8 lg:py-4 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-base bg-gradient-to-r from-[#0284c7] via-[#0ea5e9] to-[#0284c7] hover:brightness-105 text-white shadow-md shadow-[#0284c7]/25 hover:shadow-xl hover:shadow-[#0284c7]/35 transition-all duration-200 flex items-center justify-center gap-2.5 active:scale-95 group cursor-pointer"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:scale-110 transition-transform" />
                <span>Book Now</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white/90 group-hover:translate-x-1.5 transition-transform" />
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phones[0].raw}`}
                className="px-5 py-3 sm:px-7 sm:py-3.5 lg:px-8 lg:py-4 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-base bg-white hover:bg-[#EBF9FF] text-[#0a2a3d] border border-[#bde9ff] hover:border-[#30AFFF] shadow-xs hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2.5 active:scale-95 group cursor-pointer"
              >
                <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#28A745] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-[#28A745]" />
                </span>
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#0284c7] group-hover:rotate-12 transition-transform" />
                <span>Call {BUSINESS_INFO.phones[0].display}</span>
              </a>
            </motion.div>

          </div>

          {/* Right Column: Visual Showcase with Floating Glass Cards */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-center justify-center lg:justify-end relative mt-2 lg:mt-0">

            {/* Outer Container with Relative Positioning for Floating Badges */}
            <div className="relative w-full max-w-xl sm:max-w-2xl lg:max-w-3xl xl:max-w-4xl flex items-center justify-center">

              {/* Floating Glassmorphic Badge 1: Dynamic per slide */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.statBadge.title}
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  className="absolute top-2 sm:top-4 left-0 sm:-left-4 lg:-left-6 z-20 hidden sm:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#bde9ff] shadow-xl shadow-[#30AFFF]/15 pointer-events-none"
                >
                  <div className={`w-9 h-9 rounded-xl ${active.statBadge.bgIcon} flex items-center justify-center shrink-0`}>
                    <active.statBadge.icon className={`w-4 h-4 ${active.statBadge.iconColor}`} />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-extrabold text-[#0a2a3d] leading-tight">
                      {active.statBadge.title}
                    </div>
                    <div className="text-[11px] sm:text-xs text-[#2d6180] font-medium leading-tight mt-0.5">
                      {active.statBadge.subtitle}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Floating Glassmorphic Badge 2: Fleet Quality */}
              <div className="absolute bottom-2 sm:bottom-6 right-0 sm:-right-4 lg:-right-6 z-20 hidden sm:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#bde9ff] shadow-xl shadow-[#30AFFF]/15 pointer-events-none">
                <div className="w-9 h-9 rounded-xl bg-[#28A745]/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-[#28A745]" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-extrabold text-[#0a2a3d] leading-tight">
                    Clean AC Fleet
                  </div>
                  <div className="text-[11px] sm:text-xs text-[#2d6180] font-medium leading-tight mt-0.5">
                    Sanitized after every ride
                  </div>
                </div>
              </div>

              {/* Stacked Transparent Illustrations */}
              <div className="relative w-full">
                {SLIDES.map((slide, index) => (
                  <div
                    key={slide.id}
                    className="flex items-center justify-center transition-all duration-[800ms] ease-in-out pointer-events-none"
                    style={{
                      opacity: index === currentSlide ? 1 : 0,
                      transform: index === currentSlide ? 'scale(1)' : 'scale(0.96)',
                      position: index === currentSlide ? 'relative' : 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      zIndex: index === currentSlide ? 1 : 0,
                    }}
                  >
                    <Image
                      src={slide.image}
                      alt={slide.alt}
                      width={1200}
                      height={900}
                      priority={index === 0}
                      unoptimized
                      className="w-full h-auto max-h-[220px] xs:max-h-[260px] sm:max-h-[460px] lg:max-h-[500px] xl:max-h-[560px] 2xl:max-h-[620px] object-contain select-none filter drop-shadow-md"
                    />
                  </div>
                ))}
              </div>

            </div>

            {/* Slide Navigation Indicators */}
            <div className="flex items-center gap-2 pt-3 lg:pt-5 z-20">
              {SLIDES.map((slide, idx) => {
                const isActive = idx === currentSlide;
                return (
                  <button
                    key={slide.id}
                    onClick={() => handleTabClick(idx)}
                    type="button"
                    aria-label={`Switch to ${slide.title}`}
                    className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'w-7 sm:w-10 bg-gradient-to-r from-[#0284c7] to-[#30AFFF]'
                        : 'w-2 sm:w-2.5 bg-[#bde9ff] hover:bg-[#30AFFF]/50'
                    }`}
                  />
                );
              })}
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}

