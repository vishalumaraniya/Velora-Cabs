'use client';

import React from 'react';
import { Phone, MessageCircle, Clock } from 'lucide-react';
import { SITE } from '@/data/site';
import { trackEvent } from '@/lib/analytics';

export default function HomeCtaBand() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#071828] via-[#0d2840] to-[#071828] text-white relative overflow-hidden border-b border-[#1a3a52]">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#30AFFF]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-[#28A745]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          
          {/* Headlines */}
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#30AFFF]/15 border border-[#30AFFF]/30 text-[#92EEFF] text-xs font-bold uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5" />
              <span>Instant Confirmation • 24x7 Support</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
              Ready to Book Your Journey? Get a Free Fixed Quote Today
            </h2>
            {/* TODO: Keep "No hidden surge charges" only if confirmed by business owner */}
            <p className="text-xs sm:text-sm text-[#8ab9d1] leading-relaxed">
              No hidden surge charges. Verified drivers, clean AC cars, and punctual doorstep pickups across Bhavnagar, Ahmedabad, Vadodara, Surat, and Mumbai.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
            {/* Phone Call */}
            <a
              href={`tel:${SITE.phoneFormatted}`}
              onClick={() => trackEvent('call_click', { location: 'cta_band' })}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-white hover:bg-[#EBF9FF] text-[#0a2a3d] font-bold text-sm shadow-lg transition-all active:scale-95"
            >
              <Phone className="w-4 h-4 text-[#30AFFF]" />
              <span>Call {SITE.phone}</span>
            </a>

            {/* WhatsApp */}
            <a
              href={`${SITE.whatsapp}?text=${encodeURIComponent(
                'Hello Velora Cabs, I would like to get a free quote for cab booking.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('whatsapp_click', { location: 'cta_band' })}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#28A745] hover:bg-[#1e8c38] text-white font-bold text-sm shadow-lg transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Direct Quote</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
