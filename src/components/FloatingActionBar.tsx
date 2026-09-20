'use client';

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';

export default function FloatingActionBar() {
  return (
    <aside aria-label="Quick Mobile Actions" className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#EBF9FF]/95 backdrop-blur-md border-t border-[#bde9ff] shadow-xl">
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        <a
          href={`tel:${BUSINESS_INFO.phones[0].raw}`}
          className="py-3 px-4 rounded-xl text-xs font-bold bg-[#071828] hover:bg-[#0d2236] text-white flex items-center justify-center gap-2 shadow-sm transition-all active:scale-95"
        >
          <Phone className="w-4 h-4 text-[#92EEFF]" />
          <span>Call Now</span>
        </a>

        <a
          href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
            'Hello Velora Cabs, I want to book a ride.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 px-4 rounded-xl text-xs font-bold bg-[#28A745] hover:bg-[#1e8c38] text-white flex items-center justify-center gap-2 shadow-sm transition-all active:scale-95"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>
      </div>
    </aside>
  );
}
