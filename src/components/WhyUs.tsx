'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, UserCheck, Clock, Timer, BadgeIndianRupee, Sparkles, Award, CheckCircle2, ChevronRight } from 'lucide-react';
import { WHY_US_FEATURES } from '@/lib/constants';

const featureDetailsMap = [
  {
    num: '01',
    badge: '100% Safety Verified',
    themeColor: '#F5B921',
    badgeClass: 'bg-[#F5B921]/10 border-[#F5B921]/30 text-[#F5B921]',
    glowStyle: 'text-[#F5B921]',
    LargeIcon: ShieldCheck,
    highlight: 'GPS Tracking & Emergency SOS Button Enabled',
  },
  {
    num: '02',
    badge: 'Police Verified 5★ Drivers',
    themeColor: '#06B6D4',
    badgeClass: 'bg-[#06B6D4]/10 border-[#06B6D4]/30 text-[#06B6D4]',
    glowStyle: 'text-[#06B6D4]',
    LargeIcon: UserCheck,
    highlight: 'Seasoned Highway Experts & Polite Conduct',
  },
  {
    num: '03',
    badge: 'Always Operating 24/7',
    themeColor: '#F43F5E',
    badgeClass: 'bg-[#F43F5E]/10 border-[#F43F5E]/30 text-[#F43F5E]',
    glowStyle: 'text-[#F43F5E]',
    LargeIcon: Clock,
    highlight: 'Immediate Late-Night & Flight Cab Assignment',
  },
  {
    num: '04',
    badge: '10-Min Pre-Arrival',
    themeColor: '#3B82F6',
    badgeClass: 'bg-[#3B82F6]/10 border-[#3B82F6]/30 text-[#3B82F6]',
    glowStyle: 'text-[#3B82F6]',
    LargeIcon: Timer,
    highlight: 'Driver Arrives 10 Minutes Prior to Pickup Time',
  },
  {
    num: '05',
    badge: 'Zero Hidden Surge Charges',
    themeColor: '#F59E0B',
    badgeClass: 'bg-[#F59E0B]/10 border-[#F59E0B]/30 text-[#F59E0B]',
    glowStyle: 'text-[#F59E0B]',
    LargeIcon: BadgeIndianRupee,
    highlight: 'Clear Per-KM & Fixed Route Pricing Upfront',
  },
  {
    num: '06',
    badge: 'Fresh & Sanitized Sedans',
    themeColor: '#8B5CF6',
    badgeClass: 'bg-[#8B5CF6]/10 border-[#8B5CF6]/30 text-[#8B5CF6]',
    glowStyle: 'text-[#8B5CF6]',
    LargeIcon: Sparkles,
    highlight: 'Thorough Sanitation & Interior Fragrance Refresh',
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

        // Skip if section is completely out of view
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
    <section id="why-us" ref={sectionRef} className="py-10 sm:py-16 lg:py-24 bg-[#09090c] relative border-t border-white/5">

      {/* Dynamic Ambient Radial Lighting Glow (Subtle & Soft) */}
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[350px] h-[350px] rounded-full blur-[90px] pointer-events-none transition-all duration-700 opacity-5"
        style={{ backgroundColor: activeConfig.themeColor }}
      />

      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16 space-y-4">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Why Choose <span className="gold-gradient-text">Velora Cabs</span>?
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            Explore our 6 core commitments below. Watch the interactive showcase on the right update dynamically as each reason comes into focus.
          </p>
        </div>

        {/* 2-Column Pinned Scroll Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Scrolling Column: 6 Reason Cards */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
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
                  className={`neomorph-card p-5 sm:p-8 rounded-3xl cursor-pointer transition-all duration-500 relative overflow-hidden group ${isActive
                      ? 'bg-[#161622] scale-[1.01] border-l-4'
                      : 'border border-white/10 opacity-75 hover:opacity-100 hover:border-white/20'
                    }`}
                  style={{
                    borderLeftColor: isActive ? config.themeColor : undefined,
                    borderColor: isActive ? `${config.themeColor}44` : undefined,
                    boxShadow: isActive ? `0 4px 20px rgba(0,0,0,0.3)` : undefined,
                  }}
                >
                  <div className="flex items-start gap-5 relative z-10">

                    {/* Index Badge */}
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center text-sm font-black shrink-0 transition-all ${isActive ? 'text-amber-950 scale-105' : 'neomorph-inset text-gray-400'
                        }`}
                      style={{
                        backgroundColor: isActive ? config.themeColor : undefined,
                      }}
                    >
                      {config.num}
                    </div>

                    {/* Content */}
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center justify-between">
                        <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${config.badgeClass}`}>
                          {config.badge}
                        </span>
                        <ChevronRight
                          className={`w-5 h-5 transition-transform ${isActive ? 'translate-x-1' : 'text-gray-600'
                            }`}
                          style={{ color: isActive ? config.themeColor : undefined }}
                        />
                      </div>

                      <h3 className={`text-xl font-extrabold transition-colors ${isActive ? 'text-white' : 'text-gray-200 group-hover:text-white'}`}>
                        {feature.title}
                      </h3>

                      <p className="text-gray-300 text-sm leading-relaxed">
                        {feature.description}
                      </p>

                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="pt-3 flex items-center gap-2 text-xs font-semibold"
                          style={{ color: config.themeColor }}
                        >
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Active Commitment Guaranteed</span>
                        </motion.div>
                      )}
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Sticky Column: Interactive Liquid Glass Showcase Pod */}
          <div className="hidden lg:block lg:col-span-5 lg:sticky lg:top-28 h-fit space-y-6 z-20">

            <div
              className="relative p-8 rounded-3xl overflow-hidden bg-[#12121a]/60 backdrop-blur-2xl border border-white/20 shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),_inset_0_-1px_2px_rgba(0,0,0,0.5),_0_20px_40px_rgba(0,0,0,0.6)] flex flex-col justify-between items-center text-center min-h-[460px] transition-all duration-700"
            >
              {/* Top & Bottom Specular Glare Reflection Lines */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none z-30" />
              <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none z-30" />

              {/* Liquid Fluid Background Morphing Orbs */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                  className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-[75px] transition-all duration-700 opacity-20"
                  style={{ backgroundColor: activeConfig.themeColor }}
                />
                <div
                  className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-56 h-56 rounded-full blur-[65px] transition-all duration-700 opacity-15"
                  style={{ backgroundColor: activeConfig.themeColor }}
                />
              </div>

              {/* Top Dynamic Status Bar */}
              <div className="w-full flex items-center justify-between z-20 pb-4 border-b border-white/10">
                <span className="text-xs font-black text-white/50 tracking-wider">
                  FEATURE {activeConfig.num} / 06
                </span>
                <span className={`px-3 py-1 rounded-full border text-[10px] font-extrabold tracking-wider uppercase backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] ${activeConfig.badgeClass}`}>
                  {activeConfig.badge}
                </span>
              </div>

              {/* Center Liquid Glass Orb & Morphing React Icon */}
              <div className="relative my-6 flex items-center justify-center w-full h-56 z-20">

                {/* Concentric Liquid Rings */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div
                    className="w-52 h-52 rounded-full border border-white/10 opacity-30 shadow-[inset_0_1px_2px_rgba(255,255,255,0.15)]"
                  />
                  <div
                    className="w-40 h-40 rounded-full border border-white/15 opacity-40 shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)]"
                  />
                </div>

                {/* Liquid Glass Floating Orb Pod */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 0.82, rotate: -6 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.82, rotate: 6 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="relative z-10 p-8 rounded-3xl bg-white/[0.07] border border-white/25 shadow-[inset_0_2px_4px_rgba(255,255,255,0.35),_inset_0_-2px_4px_rgba(0,0,0,0.5),_0_16px_36px_rgba(0,0,0,0.4)] backdrop-blur-3xl flex items-center justify-center group"
                  >
                    {/* Interior Glare Reflection */}
                    <div className="absolute top-1 left-3 right-3 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />

                    <ActiveIcon
                      className="w-24 h-24 transition-colors duration-300 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
                      style={{ color: activeConfig.themeColor }}
                    />
                  </motion.div>
                </AnimatePresence>

              </div>

              {/* Bottom Feature Live Highlight in Liquid Glass Card */}
              <div className="w-full z-20 pt-4 border-t border-white/10 flex items-center justify-between text-left bg-white/[0.03] backdrop-blur-xl p-4 rounded-2xl border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
                <div>
                  <h4 className="text-base font-extrabold text-white">
                    {WHY_US_FEATURES[activeIndex].title}
                  </h4>
                  <p className="text-xs text-gray-300 mt-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" style={{ color: activeConfig.themeColor }} />
                    <span>{activeConfig.highlight}</span>
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.07] border border-white/20 shrink-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]">
                  <ActiveIcon className="w-5 h-5" style={{ color: activeConfig.themeColor }} />
                </div>
              </div>

            </div>

            {/* Liquid Micro Progress Bar */}
            <div className="grid grid-cols-6 gap-2 px-2">
              {WHY_US_FEATURES.map((_, i) => {
                const cfg = featureDetailsMap[i];
                const isSelected = i === activeIndex;
                return (
                  <div
                    key={i}
                    onClick={() => handleSelectCard(i)}
                    className="h-1.5 rounded-full cursor-pointer transition-all duration-300 relative overflow-hidden bg-white/10 border border-white/5 group/pill"
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="liquid-pill"
                        className="absolute inset-0 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                        style={{ backgroundColor: cfg.themeColor }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
