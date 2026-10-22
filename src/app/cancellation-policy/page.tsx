import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { SITE } from '@/data/site';
import { RotateCcw, AlertCircle, Phone, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cancellation & Refund Policy',
  description:
    'Velora Cabs cancellation and refund policy. Learn about cancellation timelines, advance deposits, and rescheduling your cab booking.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/cancellation-policy',
  },
};

export default function CancellationPolicyPage() {
  return (
    <div className="min-h-screen bg-[#EBF9FF] flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 sm:pt-28 pb-16">
        <Breadcrumbs items={[{ label: 'Cancellation & Refund Policy' }]} />

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#bde9ff] shadow-sm space-y-8">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF9FF] text-[#0284c7] text-xs font-bold border border-[#bde9ff]">
                <RotateCcw className="w-4 h-4" />
                <span>Last Updated: October 2026</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-black text-[#0a2a3d]">
                Cancellation & Refund Policy
              </h1>

              {/* Visible Legal Review Notice */}
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs sm:text-sm flex items-start gap-2.5">
                <AlertCircle className="w-5 h-5 shrink-0 text-amber-600 mt-0.5" />
                <div>
                  <strong>Notice:</strong> Standard operational guidelines for booking cancellations and adjustments. <em>TODO: owner to confirm exact cancellation fee windows and refund processing timelines.</em>
                </div>
              </div>
            </div>

            <div className="space-y-6 text-sm text-[#2d6180] leading-relaxed">
              <section className="space-y-2">
                <h2 className="text-lg font-bold text-[#0a2a3d]">1. Cancellation Windows & Requests</h2>
                <p>
                  We understand that travel plans can change unexpectedly due to meeting reschedules, flight cancellations, or personal emergencies. You may request a cancellation or reschedule by contacting our dispatch team via phone (+91 87803 11279) or WhatsApp.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Advance Cancellations (6+ Hours Before Pickup):</strong> Cancellations notified at least 6 hours prior to the scheduled departure time are processed with zero cancellation charges {/* TODO: owner to confirm */}.</li>
                  <li><strong>Late Cancellations (Under 3 Hours Before Pickup):</strong> If a cancellation is requested after the driver has already been dispatched or is en route to your doorstep, a nominal vehicle mobilization fee may apply to compensate the chauffeur {/* TODO: owner to confirm */}.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-[#0a2a3d]">2. Rescheduling Your Journey</h2>
                <p>
                  If you need to adjust your departure time or shift your travel date, please notify us as early as possible. We make every reasonable effort to accommodate revised timings at no additional rescheduling fee, subject to vehicle availability.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-[#0a2a3d]">3. Refunds & Advance Payments</h2>
                <p>
                  Where advance booking deposits have been paid for outstation or multi-day journeys, eligible refunds are processed back to the original payment source within 3 to 5 business days {/* TODO: owner to confirm refund SLA */}.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-[#0a2a3d]">4. How to Request Help</h2>
                <p>
                  For immediate cancellation support, please reach out directly:
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href={`tel:${SITE.phoneFormatted}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0a2a3d] text-white text-xs font-bold"
                  >
                    <Phone className="w-4 h-4 text-[#92EEFF]" />
                    <span>Call {SITE.phone}</span>
                  </a>
                  <a
                    href={SITE.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#28A745] text-white text-xs font-bold"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Support</span>
                  </a>
                </div>
              </section>
            </div>

          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
