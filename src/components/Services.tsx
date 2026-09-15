'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Car, Plane, MapPin, Clock, CheckCircle2, Sparkles, Navigation, Luggage, Compass, Zap } from 'lucide-react';
import { SERVICES } from '@/lib/constants';

export default function Services() {
  const handleSelectService = (serviceId: string) => {
    const formElement = document.getElementById('inquiry');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
      const event = new CustomEvent('select-trip-type', {
        detail: serviceId.includes('airport')
          ? 'airport'
          : serviceId.includes('outstation')
            ? 'outstation'
            : 'local',
      });
      window.dispatchEvent(event);
    }
  };

  const cardThemeMap: Record<
    string,
    {
      cardClass: string;
      badgeText: string;
      badgeStyle: string;
      icon: React.ReactNode;
      iconBg: string;
      checkColor: string;
      hoverTitle: string;
      BackgroundIcon: React.ComponentType<{ className?: string }>;
      vectorColor: string;
      vectorGlow: string;
    }
  > = {
    'local-rides': {
      cardClass: 'neomorph-card-amber border-amber-500/40',
      badgeText: 'In-City Commute',
      badgeStyle: 'bg-[#F5B921]/15 border-[#F5B921]/40 text-[#F5B921]',
      icon: <Car className="w-7 h-7 text-[#F5B921]" />,
      iconBg: 'bg-amber-500/10 border-amber-500/30',
      checkColor: 'text-[#F5B921]',
      hoverTitle: 'group-hover:text-[#F5B921]',
      BackgroundIcon: Navigation,
      vectorColor: 'text-[#F5B921]/30 group-hover:text-[#F5B921]/70',
      vectorGlow: 'group-hover:drop-shadow-[0_0_14px_rgba(245,185,33,0.4)]',
    },
    'airport-transfers': {
      cardClass: 'neomorph-card-cyan border-cyan-500/40',
      badgeText: 'Flight Guaranteed',
      badgeStyle: 'bg-[#06B6D4]/15 border-[#06B6D4]/40 text-[#06B6D4]',
      icon: <Plane className="w-7 h-7 text-[#06B6D4]" />,
      iconBg: 'bg-cyan-500/10 border-cyan-500/30',
      checkColor: 'text-[#06B6D4]',
      hoverTitle: 'group-hover:text-[#06B6D4]',
      BackgroundIcon: Luggage,
      vectorColor: 'text-[#06B6D4]/30 group-hover:text-[#06B6D4]/70',
      vectorGlow: 'group-hover:drop-shadow-[0_0_14px_rgba(6,182,212,0.4)]',
    },
    'outstation-trips': {
      cardClass: 'neomorph-card-violet border-violet-500/40',
      badgeText: 'Intercity Express',
      badgeStyle: 'bg-[#8B5CF6]/15 border-[#8B5CF6]/40 text-[#8B5CF6]',
      icon: <MapPin className="w-7 h-7 text-[#8B5CF6]" />,
      iconBg: 'bg-violet-500/10 border-violet-500/30',
      checkColor: 'text-[#8B5CF6]',
      hoverTitle: 'group-hover:text-[#8B5CF6]',
      BackgroundIcon: Compass,
      vectorColor: 'text-[#8B5CF6]/30 group-hover:text-[#8B5CF6]/70',
      vectorGlow: 'group-hover:drop-shadow-[0_0_14px_rgba(139,92,246,0.4)]',
    },
    'express-service': {
      cardClass: 'neomorph-card-rose border-rose-500/40',
      badgeText: '24x7 Emergency',
      badgeStyle: 'bg-[#F43F5E]/15 border-[#F43F5E]/40 text-[#F43F5E]',
      icon: <Clock className="w-7 h-7 text-[#F43F5E]" />,
      iconBg: 'bg-rose-500/10 border-rose-500/30',
      checkColor: 'text-[#F43F5E]',
      hoverTitle: 'group-hover:text-[#F43F5E]',
      BackgroundIcon: Zap,
      vectorColor: 'text-[#F43F5E]/30 group-hover:text-[#F43F5E]/70',
      vectorGlow: 'group-hover:drop-shadow-[0_0_14px_rgba(244,63,94,0.4)]',
    },
  };

  return (
    <section id="services" className="py-10 sm:py-16 lg:py-20 bg-[#0b0b0e] relative border-t border-white/5">
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16 space-y-4">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Our Premium <span className="gold-gradient-text">Cab Services</span>
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            Whether it’s a quick local ride, a scheduled airport transfer, or an outstation trip, Velora Cabs delivers luxury comfort on every road.
          </p>
        </div>

        {/* 4 Cards Grid with Related Lucide React Icons Backgrounds */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {SERVICES.map((service, idx) => {
            const config = cardThemeMap[service.id] || cardThemeMap['local-rides'];
            const BackgroundIcon = config.BackgroundIcon;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => handleSelectService(service.id)}
                className={`neomorph-card ${config.cardClass} p-5 sm:p-7 flex flex-col justify-between group relative cursor-pointer hover:scale-[1.02] transition-all duration-300 overflow-hidden`}
              >
                {/* Background Frosted Glass Icon Watermark (Subtle watermark by default, softly glows on hover) */}
                <div
                  className={`absolute right-3 bottom-3 pointer-events-none transition-all duration-500 ease-out opacity-25 group-hover:opacity-60 group-hover:scale-105 z-0 ${config.vectorColor} ${config.vectorGlow}`}
                >
                  <BackgroundIcon className="w-14 h-14 sm:w-16 sm:h-16 stroke-[1.2] transition-all duration-500 blur-[0.8px] group-hover:blur-[1.2px]" />
                </div>

                {/* Top Corner Badge for ALL cards */}
                <div className={`absolute top-4 right-4 z-20 px-3 py-1 rounded-full border text-[10px] font-extrabold tracking-wider uppercase ${config.badgeStyle}`}>
                  {config.badgeText}
                </div>

                {/* Foreground Content inside Frosted Glass */}
                <div className="relative z-10">
                  {/* Icon Header */}
                  <div className={`w-14 h-14 rounded-2xl neomorph-inset border ${config.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    {config.icon}
                  </div>

                  {/* Service Titles */}
                  <h3 className={`text-xl font-extrabold text-white mb-1 ${config.hoverTitle} transition-colors`}>
                    {service.title}
                  </h3>
                  <span className="inline-block text-xs font-semibold text-gray-400 mb-3">
                    {service.subtitle}
                  </span>

                  {/* Description */}
                  <p className="text-gray-300 text-xs sm:text-sm mb-6 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2.5 border-t border-white/5 pt-4">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs text-gray-300">
                        <CheckCircle2 className={`w-4 h-4 ${config.checkColor} shrink-0`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
