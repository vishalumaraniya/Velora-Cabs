import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { SITE } from '@/lib/site';
import { ShieldCheck, Phone, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Velora Cabs',
  description: 'Standard booking terms, passenger safety guidelines, and carriage conditions for Velora Cabs.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function TermsPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Terms & Conditions', href: '/terms' },
  ];

  return (
    <div className="min-h-screen bg-[#EBF9FF] flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="mb-6">
          <Breadcrumbs items={breadcrumbs} />
        </div>

        <article className="bg-white rounded-3xl p-6 sm:p-10 border border-[#bde9ff] space-y-8 shadow-xs">
          <div className="space-y-3 border-b border-[#bde9ff]/60 pb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF9FF] text-[#0284c7] text-xs font-bold border border-[#bde9ff]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Service Terms</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-[#0B1F33]">
              Terms & Conditions
            </h1>
          </div>

          <div className="space-y-6 text-sm text-[#2d6180] leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#0B1F33]">1. Acceptance of Terms</h2>
              <p>
                By booking a taxi or utilizing passenger road transport services provided by Velora Cabs, you agree to comply with and be bound by these service terms and conditions.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#0B1F33]">2. Booking & Confirmation</h2>
              <p>
                Cab reservations made via website inquiries, WhatsApp, or phone calls are considered confirmed once our dispatch team issues a formal quote and booking acknowledgment with agreed-upon itinerary details and vehicle class.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#0B1F33]">3. Pricing, Tolls & Inclusions</h2>
              <p>
                Fares are quoted based on designated origins, destinations, and trip type (one-way drop or round trip). State border permits, national highway tolls, and destination parking fees are handled in accordance with the specific quotation agreed upon prior to departure. Please confirm full inclusions with your coordinator.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#0B1F33]">4. Passenger Conduct & Safety</h2>
              <p>
                Passengers are required to adhere to Indian motor vehicle regulations, including wearing seatbelts. Carriage of illegal substances, hazardous materials, or smoking inside vehicles is strictly prohibited.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#0B1F33]">5. Luggage Policy</h2>
              <p>
                Each vehicle category supports designated luggage capacity (Dzire: 2 medium bags, Ertiga: 4 bags, Tempo Traveller: 8+ bags). Extra-large baggage should be reported at the time of booking so appropriate carrier-equipped vehicles can be assigned.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#0B1F33]">6. Customer Support</h2>
              <p>
                For questions regarding bookings, driver dispatch, or service terms:
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={`tel:${SITE.phone}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0B1F33] text-white text-xs font-bold hover:bg-[#123952] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#30AFFF]" />
                  <span>Call {SITE.phoneDisplay}</span>
                </a>
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#28A745] text-white text-xs font-bold hover:bg-[#218838] transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Desk</span>
                </a>
              </div>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
