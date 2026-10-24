import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { SITE } from '@/lib/site';
import { ShieldCheck, Phone, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cancellation Policy | Velora Cabs',
  description: 'Standard booking cancellation, rescheduling guidelines, and refund terms for Velora Cabs.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function CancellationPolicyPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Cancellation Policy', href: '/cancellation-policy' },
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
              <span>Operational Terms</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-[#0B1F33]">
              Cancellation & Refund Policy
            </h1>
          </div>

          <div className="space-y-6 text-sm text-[#2d6180] leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#0B1F33]">1. Cancellation Windows & Requests</h2>
              <p>
                We understand that travel plans can change unexpectedly due to meeting reschedules, flight cancellations, or personal emergencies. You may request a cancellation or reschedule by contacting our dispatch team via phone (+91 87803 11279) or WhatsApp.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Advance Notice:</strong> Please notify us as early as possible so we can release the scheduled vehicle and reassign the chauffeur.</li>
                <li><strong>Late Cancellations:</strong> If a cancellation is requested after the driver has already been dispatched to your doorstep, a nominal vehicle mobilization fee may apply to compensate the chauffeur. Please confirm exact terms at the time of booking.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#0B1F33]">2. Rescheduling Your Journey</h2>
              <p>
                If you need to adjust your departure time or shift your travel date, please notify our dispatch desk as early as possible. We make every reasonable effort to accommodate revised timings at no additional rescheduling fee, subject to vehicle availability.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#0B1F33]">3. Refunds & Advance Payments</h2>
              <p>
                Where advance booking deposits have been paid for outstation or multi-day journeys, eligible refunds are processed back to the original payment source in coordination with our billing coordinator.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#0B1F33]">4. Contact Support</h2>
              <p>
                For immediate cancellation support, please reach out directly:
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
