'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Car, Plane, MapPin, Clock, CheckCircle2, ChevronRight } from 'lucide-react';
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

  const cardConfigMap: Record<
    string,
    {
      badgeText: string;
      badgeClass: string;
      icon: React.ReactNode;
      WatermarkIcon: React.ElementType;
      iconBoxClass: string;
      cardClass: string;
      cardShadow: string;
      cardHoverShadow: string;
      titleHoverClass: string;
      checkColor: string;
      dividerClass: string;
      actionTextClass: string;
      watermarkClass: string;
    }
  > = {
    'local-rides': {
      badgeText: 'City Commute',
      badgeClass: 'bg-[#E0F2FE] border-[#7DD3FC] text-[#0369A1]',
      icon: <Car className="w-5 h-5 text-[#0284c7]" />,
      WatermarkIcon: Car,
      iconBoxClass:
        'bg-gradient-to-br from-[#E0F2FE] to-[#BAE6FD] border border-[#7DD3FC]/80 shadow-[3px_3px_7px_rgba(2,132,199,0.16),-2px_-2px_6px_rgba(255,255,255,0.95)]',
      cardClass:
        'border border-[#BAE6FD] hover:border-[#38BDF8] bg-gradient-to-b from-white via-white to-[#F0F9FF]/60',
      cardShadow:
        'shadow-[4px_4px_14px_rgba(2,132,199,0.08),-4px_-4px_12px_rgba(255,255,255,0.95)]',
      cardHoverShadow:
        'hover:shadow-[6px_6px_22px_rgba(2,132,199,0.18),-4px_-4px_14px_rgba(255,255,255,1)]',
      titleHoverClass: 'group-hover:text-[#0284c7]',
      checkColor: 'text-[#0284c7]',
      dividerClass: 'border-[#BAE6FD]/60',
      actionTextClass: 'text-[#0284c7] group-hover:text-[#0369A1]',
      watermarkClass: 'text-sky-400/10 group-hover:text-sky-500/20',
    },
    'airport-transfers': {
      badgeText: 'On-Time Flight',
      badgeClass: 'bg-[#EEF2FF] border-[#C7D2FE] text-[#4338CA]',
      icon: <Plane className="w-5 h-5 text-[#4F46E5]" />,
      WatermarkIcon: Plane,
      iconBoxClass:
        'bg-gradient-to-br from-[#EEF2FF] to-[#E0E7FF] border border-[#C7D2FE]/80 shadow-[3px_3px_7px_rgba(79,70,229,0.16),-2px_-2px_6px_rgba(255,255,255,0.95)]',
      cardClass:
        'border border-[#C7D2FE] hover:border-[#818CF8] bg-gradient-to-b from-white via-white to-[#FAF5FF]/60',
      cardShadow:
        'shadow-[4px_4px_14px_rgba(79,70,229,0.08),-4px_-4px_12px_rgba(255,255,255,0.95)]',
      cardHoverShadow:
        'hover:shadow-[6px_6px_22px_rgba(79,70,229,0.18),-4px_-4px_14px_rgba(255,255,255,1)]',
      titleHoverClass: 'group-hover:text-[#4F46E5]',
      checkColor: 'text-[#4F46E5]',
      dividerClass: 'border-[#C7D2FE]/60',
      actionTextClass: 'text-[#4F46E5] group-hover:text-[#3730A3]',
      watermarkClass: 'text-indigo-400/10 group-hover:text-indigo-500/20',
    },
    'outstation-trips': {
      badgeText: 'Intercity Trips',
      badgeClass: 'bg-[#ECFDF5] border-[#A7F3D0] text-[#047857]',
      icon: <MapPin className="w-5 h-5 text-[#059669]" />,
      WatermarkIcon: MapPin,
      iconBoxClass:
        'bg-gradient-to-br from-[#ECFDF5] to-[#D1FAE5] border border-[#A7F3D0]/80 shadow-[3px_3px_7px_rgba(5,150,105,0.16),-2px_-2px_6px_rgba(255,255,255,0.95)]',
      cardClass:
        'border border-[#A7F3D0] hover:border-[#34D399] bg-gradient-to-b from-white via-white to-[#F0FDF4]/60',
      cardShadow:
        'shadow-[4px_4px_14px_rgba(5,150,105,0.08),-4px_-4px_12px_rgba(255,255,255,0.95)]',
      cardHoverShadow:
        'hover:shadow-[6px_6px_22px_rgba(16,185,129,0.18),-4px_-4px_14px_rgba(255,255,255,1)]',
      titleHoverClass: 'group-hover:text-[#059669]',
      checkColor: 'text-[#059669]',
      dividerClass: 'border-[#A7F3D0]/60',
      actionTextClass: 'text-[#059669] group-hover:text-[#065F46]',
      watermarkClass: 'text-emerald-400/10 group-hover:text-emerald-500/20',
    },
    'express-service': {
      badgeText: '24x7 Available',
      badgeClass: 'bg-[#FFFBEB] border-[#FDE68A] text-[#B45309]',
      icon: <Clock className="w-5 h-5 text-[#D97706]" />,
      WatermarkIcon: Clock,
      iconBoxClass:
        'bg-gradient-to-br from-[#FFFBEB] to-[#FEF3C7] border border-[#FDE68A]/80 shadow-[3px_3px_7px_rgba(217,119,6,0.16),-2px_-2px_6px_rgba(255,255,255,0.95)]',
      cardClass:
        'border border-[#FDE68A] hover:border-[#FBBF24] bg-gradient-to-b from-white via-white to-[#FFFDF5]/60',
      cardShadow:
        'shadow-[4px_4px_14px_rgba(217,119,6,0.08),-4px_-4px_12px_rgba(255,255,255,0.95)]',
      cardHoverShadow:
        'hover:shadow-[6px_6px_22px_rgba(245,158,11,0.18),-4px_-4px_14px_rgba(255,255,255,1)]',
      titleHoverClass: 'group-hover:text-[#D97706]',
      checkColor: 'text-[#D97706]',
      dividerClass: 'border-[#FDE68A]/60',
      actionTextClass: 'text-[#D97706] group-hover:text-[#92400E]',
      watermarkClass: 'text-amber-400/10 group-hover:text-amber-500/20',
    },
  };

  return (
    <section id="services" className="py-14 sm:py-18 bg-[#F5FDFF] relative border-t border-[#bde9ff]/60">
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <p className="text-xs font-bold text-[#30AFFF] uppercase tracking-widest">
            Reliable Cab Options
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a2a3d]">
            Our Taxi <span className="text-[#30AFFF]">Booking Services</span>
          </h2>
          <p className="text-[#2d6180] text-sm leading-relaxed">
            Whether it&apos;s a quick local ride, airport transfer, or outstation journey, Velora Cabs delivers dependable service on every road.
          </p>
        </div>

        {/* 4 Clean Neomorphic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service, idx) => {
            const config = cardConfigMap[service.id] || cardConfigMap['local-rides'];
            const Watermark = config.WatermarkIcon;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onClick={() => handleSelectService(service.id)}
                className={`rounded-2xl p-5 flex flex-col justify-between group cursor-pointer transition-all duration-300 relative overflow-hidden hover:-translate-y-1.5 ${config.cardClass} ${config.cardShadow} ${config.cardHoverShadow}`}
              >
                {/* Neomorphic Watermark Icon in Background */}
                <div className={`absolute -right-3 -bottom-3 pointer-events-none transition-all duration-500 group-hover:scale-110 ${config.watermarkClass}`}>
                  <Watermark className="w-24 h-24 stroke-[1.2] blur-[0.5px]" />
                </div>

                <div className="relative z-10">
                  {/* Top Badge & Neomorphic Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform ${config.iconBoxClass}`}>
                      {config.icon}
                    </div>
                    <span className={`px-2.5 py-1 rounded-full border text-[10px] font-bold uppercase tracking-wider ${config.badgeClass}`}>
                      {config.badgeText}
                    </span>
                  </div>

                  {/* Service Titles */}
                  <h3 className={`text-lg font-bold text-[#0a2a3d] mb-1 transition-colors ${config.titleHoverClass}`}>
                    {service.title}
                  </h3>
                  <span className="inline-block text-xs font-semibold text-[#5c9ab8] mb-3">
                    {service.subtitle}
                  </span>

                  {/* Description */}
                  <p className="text-[#2d6180] text-xs sm:text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className={`space-y-1.5 border-t pt-3 ${config.dividerClass}`}>
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-[#2d6180]">
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${config.checkColor}`} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className={`pt-4 mt-4 border-t flex items-center justify-between text-xs font-bold transition-colors relative z-10 ${config.dividerClass} ${config.actionTextClass}`}>
                  <span>Book This Service</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
