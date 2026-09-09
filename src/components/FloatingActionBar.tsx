'use client';

import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';

export default function FloatingActionBar() {
  return (
    <aside aria-label="Quick Mobile Actions" className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#0d0d0f]/95 backdrop-blur-xl border-t border-white/10 shadow-2xl">
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        <a
          href={`tel:${BUSINESS_INFO.phones[0].raw}`}
          className="py-3 px-4 rounded-xl text-xs font-bold neomorph-button-dark flex items-center justify-center gap-2 text-white"
        >
          <Phone className="w-4 h-4 text-[#06B6D4]" />
          <span>Call Now</span>
        </a>

        <a
          href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
            'Hello Velora Cabs, I want to book a ride.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 px-4 rounded-xl text-xs font-extrabold bg-[#25D366] text-black flex items-center justify-center gap-2 shadow-lg"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>WhatsApp</span>
        </a>
      </div>
    </aside>
  );
}
