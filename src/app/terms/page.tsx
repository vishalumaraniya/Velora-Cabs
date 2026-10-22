import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { FileText, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Velora Cabs terms and conditions for local, airport, and outstation cab bookings across Gujarat and Mumbai.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/terms',
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#EBF9FF] flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 sm:pt-28 pb-16">
        <Breadcrumbs items={[{ label: 'Terms of Service' }]} />

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#bde9ff] shadow-sm space-y-8">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF9FF] text-[#0284c7] text-xs font-bold border border-[#bde9ff]">
                <FileText className="w-4 h-4" />
                <span>Last Updated: October 2026</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-black text-[#0a2a3d]">
                Terms of Service
              </h1>

              {/* Visible Legal Review Notice */}
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs sm:text-sm flex items-start gap-2.5">
                <AlertCircle className="w-5 h-5 shrink-0 text-amber-600 mt-0.5" />
                <div>
                  <strong>Notice:</strong> Standard operational terms for Velora Cabs passenger taxi services. <em>TODO: owner to complete formal legal review with legal counsel.</em>
                </div>
              </div>
            </div>

            <div className="space-y-6 text-sm text-[#2d6180] leading-relaxed">
              <section className="space-y-2">
                <h2 className="text-lg font-bold text-[#0a2a3d]">1. Acceptance of Terms</h2>
                <p>
                  By booking a taxi or utilizing passenger transport services provided by Velora Cabs, you agree to comply with and be bound by these terms and conditions.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-[#0a2a3d]">2. Booking & Confirmation</h2>
                <p>
                  Cab reservations made via website inquiries, WhatsApp, or phone calls are considered confirmed once our dispatch team issues a formal confirmation with agreed-upon itinerary details, vehicle class, and fixed fare quote.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-[#0a2a3d]">3. Pricing, Tolls & Parking</h2>
                <p>
                  Fares are quoted based on designated origins, destinations, and trip type (one-way drop or round trip). State border permits, national highway tolls, and destination parking fees are handled in accordance with the specific trip quotation agreed upon prior to departure {/* TODO: owner to confirm toll/parking inclusion standard */}.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-[#0a2a3d]">4. Passenger Conduct & Safety</h2>
                <p>
                  Passengers are required to adhere to Indian motor vehicle regulations, including wearing seatbelts. Carriage of illegal substances, flammable items, or smoking inside vehicles is strictly prohibited.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-[#0a2a3d]">5. Force Majeure & Delays</h2>
                <p>
                  While Velora Cabs strives for 100% punctuality, we are not liable for unavoidable travel delays caused by severe weather, unannounced highway blockades, civil strikes, or natural disasters.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-[#0a2a3d]">6. Governing Law</h2>
                <p>
                  These terms are governed by the laws of India, and any disputes shall be subject to the jurisdiction of courts in Bhavnagar, Gujarat.
                </p>
              </section>
            </div>

          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
