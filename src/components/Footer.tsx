'use client';

import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';
import VeloraLogo from '@/components/VeloraLogo';

export default function Footer() {
  return (
    <footer className="bg-[#09090c] text-gray-400 border-t border-white/10 pb-20 sm:pb-0">
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs">
        {/* Left: Brand & Copyright */}
        <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 text-center sm:text-left flex-wrap">
          <div className="flex items-center gap-2">
            <VeloraLogo size={24} animated={false} />
            <span className="font-bold text-sm tracking-tight text-white">
              VELORA <span className="text-[#F5B921]">CABS</span>
            </span>
          </div>
          <span className="text-gray-600">•</span>
          <span className="text-gray-500 text-[11px]">
            © {new Date().getFullYear()} All rights reserved.
          </span>
        </div>

        {/* Right: Quick Contacts — Desktop only, hidden on mobile */}
        <div className="hidden sm:flex items-center justify-end flex-wrap gap-5 text-gray-300">
          <a
            href={`tel:${BUSINESS_INFO.phones[0].formatted}`}
            className="flex items-center gap-1.5 hover:text-[#F5B921] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#F5B921]" />
            <span>{BUSINESS_INFO.phones[0].display}</span>
          </a>
          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-[#25D366] transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span>WhatsApp</span>
          </a>
          <a
            href={`mailto:${BUSINESS_INFO.email}`}
            className="hidden md:flex items-center gap-1.5 hover:text-[#F5B921] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#F5B921]" />
            <span>{BUSINESS_INFO.email}</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
