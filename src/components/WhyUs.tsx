'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, UserCheck, Clock, Timer, BadgeIndianRupee, Sparkles, CheckCircle2, ChevronRight, Phone } from 'lucide-react';
import { WHY_US_FEATURES, BUSINESS_INFO } from '@/lib/constants';

const featureDetailsMap = [
  {
    num: '01',
    badge: '100% Safety Verified',
    badgeClass: 'bg-[#3DBE6B]/60 border-[#28A745] text-[#1a5c2a]',
    LargeIcon: ShieldCheck,
    highlight: 'GPS Live Tracking & SOS Assistance Enabled',
  },
  {
    num: '02',
    badge: 'Police Verified 5★ Drivers',
    badgeClass: 'bg-[#EBF9FF] border-[#92EEFF] text-[#0a6ea8]',
    LargeIcon: UserCheck,
    highlight: 'Seasoned Highway Experts & Polite Conduct',
  },
  {
    num: '03',
    badge: 'Always Operating 24/7',
    badgeClass: 'bg-[#EBF9FF] border-[#bde9ff] text-[#074d78]',
    LargeIcon: Clock,
    highlight: 'Immediate Late-Night & Flight Cab Dispatch',
  },
  {
    num: '04',
    badge: '10-Min Pre-Arrival',
    badgeClass: 'bg-[#DDF6FF] border-[#92EEFF] text-[#0a6ea8]',
    LargeIcon: Timer,
    highlight: 'Chauffeur Arrives 10 Minutes Prior to Pickup Time',
  },
  {
    num: '05',
    badge: 'Zero Hidden Surge Charges',
    badgeClass: 'bg-[#EBF9FF] border-[#bde9ff] text-[#074d78]',
    LargeIcon: BadgeIndianRupee,
    highlight: 'Transparent Per-KM & Fixed Route Rates Upfront',
  },
  {
    num: '06',
    badge: 'Fresh & Sanitized Sedans',
    badgeClass: 'bg-[#3DBE6B]/60 border-[#28A745] text-[#1a5c2a]',
    LargeIcon: Sparkles,
    highlight: 'Thorough Cleaning & Fresh AC Fragrance',
  },
];

export default function WhyUs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Real-time Center-of-Screen Active Card Detection
  useEffect(() => {
    let rafId: number;

    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (!sectionRef.current) return;

        const sectionRect = sectionRef.current.getBoundingClientRect();
        const viewportCenter = window.innerHeight * 0.5;

        if (sectionRect.bottom < 0 || sectionRect.top > window.innerHeight) {
          return;
        }

        let closestIndex = 0;
        let minDistance = Infinity;

        cardsRef.current.forEach((cardEl, index) => {
          if (!cardEl) return;
          const rect = cardEl.getBoundingClientRect();
          const cardCenter = rect.top + rect.height * 0.5;
          const distance = Math.abs(cardCenter - viewportCenter);

          if (distance < minDistance) {
            minDistance = distance;
            closestIndex = index;
          }
        });

        setActiveIndex((prev) => (prev !== closestIndex ? closestIndex : prev));
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const activeConfig = featureDetailsMap[activeIndex] || featureDetailsMap[0];
  const ActiveIcon = activeConfig.LargeIcon;

  const handleSelectCard = (index: number) => {
    setActiveIndex(index);
    const targetEl = cardsRef.current[index];
    if (targetEl) {
      targetEl.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <section id="why-us" ref={sectionRef} className="py-14 sm:py-18 bg-[#F5FDFF] relative border-t border-[#bde9ff]/60">
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF9FF] border border-[#92EEFF] text-[#0a2a3d] text-xs font-bold uppercase tracking-wider">
            <span>Why Velora Cabs?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a2a3d]">
            6 Pillars of Our <span className="text-[#30AFFF]">Passenger Commitment</span>
          </h2>
          <p className="text-[#2d6180] text-sm leading-relaxed">
            Built for safety, punctual arrivals, and zero hidden fare surprises across every journey.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Left Scrolling Column: 6 Reason Cards */}
          <div className="lg:col-span-7 space-y-3">
            {WHY_US_FEATURES.map((feature, idx) => {
              const config = featureDetailsMap[idx % featureDetailsMap.length];
              const isActive = idx === activeIndex;

              return (
                <div
                  key={feature.title}
                  ref={(el) => {
                    cardsRef.current[idx] = el;
                  }}
                  onClick={() => handleSelectCard(idx)}
                  className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 relative border ${
                    isActive
                      ? 'bg-white border-[#30AFFF] shadow-lg shadow-[#30AFFF]/15 ring-2 ring-[#30AFFF]/20 opacity-100 blur-none scale-[1.01]'
                      : 'bg-[#EBF9FF]/40 border-[#bde9ff]/70 opacity-60 blur-[0.8px] hover:opacity-95 hover:blur-none hover:bg-white hover:border-[#92EEFF]'
                  }`}
                >
                  <div className="flex items-start gap-4 relative z-10">

                    {/* Index Badge */}
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black shrink-0 transition-colors ${
                        isActive
                          ? 'bg-[#30AFFF] text-white font-black shadow-md shadow-[#30AFFF]/30'
                          : 'bg-white border border-[#bde9ff] text-[#2d6180]'
                      }`}
                    >
                      {config.num}
                    </div>

                    {/* Content */}
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center justify-between">
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${config.badgeClass}`}>
                          {config.badge}
                        </span>
                        <ChevronRight
                          className={`w-4 h-4 transition-transform ${
                            isActive ? 'translate-x-1 text-[#30AFFF]' : 'text-[#5c9ab8]'
                          }`}
                        />
                      </div>

                      <h3 className={`text-base font-bold transition-colors ${isActive ? 'text-[#0a2a3d]' : 'text-[#2d4a5e]'}`}>
                        {feature.title}
                      </h3>

                      <p className="text-[#2d6180] text-xs leading-relaxed">
                        {feature.description}
                      </p>

                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="pt-1.5 flex items-center gap-1.5 text-xs font-semibold text-[#1e7a35]"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#1e7a35]" />
                          <span>Guaranteed on every ride with Velora Cabs</span>
                        </motion.div>
                      )}
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Sticky Column: Trust Showcase */}
          <div className="hidden lg:block lg:col-span-5 lg:sticky lg:top-28 h-fit space-y-4 z-20">
            <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0c2f48] via-[#103a58] to-[#0a263a] text-white shadow-2xl shadow-[#0c2f48]/25 flex flex-col justify-between items-center text-center min-h-[440px] relative overflow-hidden border border-[#30AFFF]/25">
              
              {/* Decorative aura glows */}
              <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-[#30AFFF]/20 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-52 h-52 rounded-full bg-[#92EEFF]/15 blur-3xl pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(48,175,255,0.08)_0%,_transparent_60%)] pointer-events-none" />

              {/* Top Status Bar */}
              <div className="w-full flex items-center justify-between z-20 pb-4 border-b border-white/10">
                <span className="text-xs font-bold text-[#92EEFF] tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#30AFFF] animate-pulse" />
                  FEATURE {activeConfig.num} OF 06
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-[#30AFFF]/30 text-[#92EEFF] text-[10px] font-extrabold uppercase shadow-xs">
                  {activeConfig.badge}
                </span>
              </div>

              {/* Center Icon & Feature Card with Blur-to-Clear Transition */}
              <div className="my-5 flex flex-col items-center justify-center w-full z-20">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, filter: 'blur(10px)', scale: 0.92, y: 10 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', scale: 1, y: 0 }}
                    exit={{ opacity: 0, filter: 'blur(10px)', scale: 0.92, y: -10 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="w-full p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex flex-col items-center justify-center shadow-xl shadow-black/10 relative overflow-hidden"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#30AFFF]/30 to-[#30AFFF]/10 border border-[#30AFFF]/40 flex items-center justify-center mb-3.5 shadow-[0_0_20px_rgba(48,175,255,0.25)]">
                      <ActiveIcon className="w-8 h-8 text-[#92EEFF] drop-shadow-[0_2px_8px_rgba(48,175,255,0.5)]" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2 tracking-tight">
                      {WHY_US_FEATURES[activeIndex]?.title}
                    </h4>
                    <p className="text-xs text-[#BAE6FD] max-w-xs leading-relaxed font-medium">
                      {activeConfig.highlight}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[11px] font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Guaranteed Standard</span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom Hotline */}
              <div className="w-full z-20 pt-3 flex items-center justify-between text-left bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/10">
                <div>
                  <span className="text-[10px] text-[#92EEFF] uppercase tracking-wider block font-semibold">
                    24x7 Driver Control Support
                  </span>
                  <span className="text-sm font-extrabold text-white">
                    {BUSINESS_INFO.phones[0].display}
                  </span>
                </div>
                <a
                  href={`tel:${BUSINESS_INFO.phones[0].raw}`}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#30AFFF] to-[#0284c7] hover:from-[#38BDF8] hover:to-[#0369A1] text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-md shadow-[#30AFFF]/25 cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </a>
              </div>

            </div>

            {/* Micro Progress Bar */}
            <div className="grid grid-cols-6 gap-2 px-2">
              {WHY_US_FEATURES.map((_, i) => {
                const isSelected = i === activeIndex;
                return (
                  <div
                    key={i}
                    onClick={() => handleSelectCard(i)}
                    className={`h-1.5 rounded-full cursor-pointer transition-all duration-300 ${
                      isSelected ? 'bg-[#30AFFF] shadow-sm' : 'bg-[#bde9ff] hover:bg-[#92EEFF]'
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
