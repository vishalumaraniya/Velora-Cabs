'use client';

import React, { useState, useEffect, useRef } from 'react';
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
    subtitle: 'Swift daily commutes and local city drops. Clean, sanitized AC vehicles with verified drivers and zero surge pricing.',
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
    subtitle: 'Guaranteed on-time airport pickups and drops. Real-time flight tracking, zero wait fee on delays, and luggage help.',
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
    subtitle: 'Spacious AC sedans, Ertiga & Innova cabs for memorable family holidays and outstation travels. Transparent flat rates with zero return charges.',
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

  // Auto-advance slides with consistent 4.5s settle time per slide
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
      className="relative w-full min-h-screen lg:min-h-[calc(100vh-64px)] flex items-center overflow-hidden bg-[#EBF9FF] border-b border-[#bde9ff]"
    >
      {/* Decorative background ambient glows */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] rounded-full bg-[#92EEFF]/25 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full bg-[#3DBE6B]/15 blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 sm:pt-24 lg:pt-28 pb-10 sm:pb-12">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-6 xl:col-span-5 space-y-5 z-10">

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="font-extrabold tracking-tight text-[#0a2a3d] leading-[1.15]"
            >
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl">
                Safe Rides.
              </span>
              <span className="bg-gradient-to-r from-[#30AFFF] via-[#0284c7] to-[#0072bc] bg-clip-text text-transparent block text-[21px] xs:text-2xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl whitespace-nowrap mt-0.5 sm:mt-1">
                On Time. Every Time.
              </span>
            </motion.h1>

            {/* Dynamic Subheading */}
            <div className="min-h-[58px] sm:min-h-[52px]">
              <AnimatePresence mode="wait">
                <motion.p
                  key={active.subtitle}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="text-base sm:text-lg text-[#2d6180] font-normal leading-relaxed max-w-lg"
                >
                  {active.subtitle}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Rider Trust & Ratings Social Proof */}
            <div className="flex flex-col sm:flex-row sm:items-center items-start gap-1 sm:gap-3 pt-1">
              <div className="flex items-center gap-0.5 text-[#F59E0B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#F59E0B]" />
                ))}
              </div>
              <div className="text-[11px] sm:text-sm font-bold text-[#0a2a3d] flex items-center gap-1.5 sm:gap-2 whitespace-nowrap">
                <span>4.9/5 Rating</span>
                <span className="text-[#92EEFF]">•</span>
                <span className="text-[#2d6180] font-medium">15,000+ Happy Commuters</span>
              </div>
            </div>


            {/* Trust Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="pt-3 flex flex-wrap items-center gap-5 sm:gap-7 text-xs sm:text-sm font-semibold text-[#0a2a3d] border-t border-[#bde9ff]/60"
            >
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#30AFFF] shrink-0" />
                <span>24x7 Dispatch</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#28A745] shrink-0" style={{ color: '#28A745' }} />
                <span>Verified Drivers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#30AFFF] shrink-0" />
                <span>Doorstep Pickup</span>
              </div>
            </motion.div>

            {/* Action Buttons (Bottom of Banner Content) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5"
            >
              <a
                href="#inquiry"
                className="px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-[#0284c7] via-[#0ea5e9] to-[#0284c7] hover:brightness-105 text-white shadow-md shadow-[#0284c7]/25 hover:shadow-lg hover:shadow-[#0284c7]/35 transition-all duration-200 flex items-center justify-center gap-2.5 active:scale-95 group cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                <span>Book Now</span>
                <ArrowRight className="w-4 h-4 text-white/90 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phones[0].raw}`}
                className="px-6 py-3.5 rounded-xl font-bold text-sm bg-white hover:bg-[#EBF9FF] text-[#0a2a3d] border border-[#bde9ff] hover:border-[#30AFFF] shadow-xs hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2.5 active:scale-95 group cursor-pointer"
              >
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#28A745] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#28A745]" />
                </span>
                <Phone className="w-4 h-4 text-[#0284c7] group-hover:rotate-12 transition-transform" />
                <span>Call {BUSINESS_INFO.phones[0].display}</span>
              </a>
            </motion.div>

          </div>

          {/* Right Column: Visual Showcase with Floating Glass Cards & Indicators */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col items-center justify-center lg:justify-end relative">

            {/* Outer Container with Relative Positioning for Floating Badges */}
            <div className="relative w-full max-w-xl lg:max-w-2xl xl:max-w-3xl flex items-center justify-center">

              {/* Floating Glassmorphic Badge 1: Dynamic per slide */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.statBadge.title}
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  className="absolute top-2 sm:top-6 left-0 sm:-left-2 z-20 hidden sm:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/90 backdrop-blur-md border border-[#bde9ff] shadow-lg shadow-[#30AFFF]/10 pointer-events-none"
                >
                  <div className={`w-9 h-9 rounded-xl ${active.statBadge.bgIcon} flex items-center justify-center shrink-0`}>
                    <active.statBadge.icon className={`w-5 h-5 ${active.statBadge.iconColor}`} />
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-[#0a2a3d] leading-tight">
                      {active.statBadge.title}
                    </div>
                    <div className="text-[11px] text-[#2d6180] font-medium leading-tight">
                      {active.statBadge.subtitle}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Floating Glassmorphic Badge 2: Constant Fleet Quality */}
              <div className="absolute bottom-4 sm:bottom-8 right-0 sm:-right-2 z-20 hidden sm:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/90 backdrop-blur-md border border-[#bde9ff] shadow-lg shadow-[#30AFFF]/10 pointer-events-none">
                <div className="w-9 h-9 rounded-xl bg-[#28A745]/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-[#28A745]" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-[#0a2a3d] leading-tight">
                    Clean AC Fleet
                  </div>
                  <div className="text-[11px] text-[#2d6180] font-medium leading-tight">
                    Sanitized after every ride
                  </div>
                </div>
              </div>

              {/* Stacked Transparent Illustrations */}
              <div className="relative w-full">
                {SLIDES.map((slide, index) => (
                  <div
                    key={slide.id}
                    className="flex items-center justify-center transition-opacity duration-[800ms] ease-in-out pointer-events-none"
                    style={{
                      opacity: index === currentSlide ? 1 : 0,
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
                      width={1024}
                      height={764}
                      priority={index === 0}
                      unoptimized
                      className="w-full h-auto max-h-[440px] sm:max-h-[500px] lg:max-h-[540px] xl:max-h-[580px] object-contain select-none"
                    />
                  </div>
                ))}
              </div>

            </div>

            {/* Slide Navigation Indicators */}
            <div className="flex items-center gap-2 pt-3 z-20">
              {SLIDES.map((slide, idx) => {
                const isActive = idx === currentSlide;
                return (
                  <button
                    key={slide.id}
                    onClick={() => handleTabClick(idx)}
                    type="button"
                    aria-label={`Switch to ${slide.title}`}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'w-8 bg-[#30AFFF]'
                        : 'w-2 bg-[#bde9ff] hover:bg-[#30AFFF]/50'
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
