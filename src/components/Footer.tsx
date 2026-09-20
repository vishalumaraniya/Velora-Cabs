'use client';

import React from 'react';
import { Phone, Mail, MessageCircle, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';
import VeloraLogo from '@/components/VeloraLogo';

export default function Footer() {
  return (
    <footer className="bg-[#071828] text-[#5c9ab8] border-t border-[#1a3a52] pb-20 sm:pb-0">
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">

        {/* Left: Brand & Copyright */}
        <div className="flex items-center justify-center sm:justify-start gap-3 text-center sm:text-left flex-wrap">
          <div className="flex items-center gap-2">
            <div className="p-1 rounded-lg bg-[#0d2236] border border-[#1a3a52]">
              <VeloraLogo size={22} animated={false} />
            </div>
            <span className="font-bold text-sm tracking-tight text-white">
              VELORA <span className="text-[#30AFFF]">CABS</span>
            </span>
          </div>
          <span className="text-[#1a3a52]">•</span>
          <span className="text-[#5c9ab8] text-xs">
            © {new Date().getFullYear()} Velora Cabs. All rights reserved.
          </span>
          <span className="text-[#1a3a52] hidden md:inline">•</span>

        </div>

        {/* Right: Quick Contacts */}
        <div className="hidden sm:flex items-center justify-end flex-wrap gap-5 text-[#92EEFF] font-medium">
          <a
            href={`tel:${BUSINESS_INFO.phones[0].formatted}`}
            className="flex items-center gap-1.5 hover:text-[#30AFFF] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#30AFFF]" />
            <span>{BUSINESS_INFO.phones[0].display}</span>
          </a>
          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-[#28A745] transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#28A745]" />
            <span>WhatsApp Direct</span>
          </a>
          <a
            href={`mailto:${BUSINESS_INFO.email}`}
            className="hidden md:flex items-center gap-1.5 hover:text-[#30AFFF] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#30AFFF]" />
            <span>{BUSINESS_INFO.email}</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
