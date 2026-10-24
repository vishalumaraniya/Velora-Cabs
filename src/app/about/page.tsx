import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { SITE } from '@/data/site';
import InstagramIcon from '@/components/InstagramIcon';
import {
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Trusted Cab Service in Bhavnagar & Gujarat',
  description:
    'Learn about Velora Cabs: our mission, values, Bhavnagar headquarters, professional chauffeur safety standards, and regional coverage across Gujarat and to Mumbai.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Us | Velora Cabs',
    description:
      'Learn about Velora Cabs - Bhavnagar’s trusted partner for safe, reliable outstation and airport taxi travel.',
    url: `${SITE.url}/about`,
    siteName: SITE.name,
    images: [
      {
        url: '/images/og-velora.jpg',
        width: 1200,
        height: 630,
        alt: 'About Velora Cabs',
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#EBF9FF] flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 sm:pt-28 pb-16">
        <Breadcrumbs items={[{ label: 'About Us' }]} />

        {/* Hero Section */}
        <section className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#bde9ff] shadow-sm space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#92EEFF]/30 border border-[#bde9ff]">
              <ShieldCheck className="w-4 h-4 text-[#0284c7]" />
              <span className="text-xs font-bold text-[#0284c7] uppercase tracking-wider">
                Our Story & Mission
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a2a3d] tracking-tight">
              About Velora Cabs
            </h1>

            <p className="text-base sm:text-lg text-[#2d6180] max-w-3xl leading-relaxed">
              Velora Cabs was founded in Bhavnagar with a simple, steadfast conviction: travel between Gujarat cities should be safe, punctual, completely transparent, and stress-free. Every day, we bring reliable personal transportation to commuters, business executives, families, and pilgrims.
            </p>

            {/* Instagram Social Follow Link */}
            {SITE.social?.instagram && (
              <div className="pt-2">
                <a
                  href={SITE.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer me"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0d2236] text-[#92EEFF] hover:text-white border border-[#1a3a52] text-xs font-bold transition-all shadow-xs"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>Follow us on Instagram @velora_cabs_official</span>
                </a>
              </div>
            )}
          </div>
        </section>

        {/* Company Narrative & Safety Pillars */}
        <section className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Story Text */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#bde9ff] space-y-6">
              <h2 className="text-2xl font-black text-[#0B1F33]">
                Bhavnagar’s Dedicated Passenger Transportation Partner
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#2d6180] leading-relaxed">
                <p>
                  Established in Bhavnagar, Velora Cabs was founded to solve the challenges travelers routinely face: unpredictable taxi cancellations, opaque pricing structures, and unpunctual airport transfers.
                </p>
                <p>
                  From our central dispatch base in Bhavnagar, our operations have steadily expanded across Saurashtra, Central Gujarat, the southern industrial corridor of Bharuch, Dahej, Vapi, and Daman, and long-distance connectivity into Mumbai.
                </p>
                <p>
                  We operate under professional passenger transport guidelines. Our fleet comprises fuel-efficient Maruti Swift Dzire sedans, spacious Maruti Suzuki Ertiga MUVs, and large-capacity Tempo Travellers for group pilgrimages and corporate tours.
                </p>
              </div>

              <div className="pt-4 border-t border-[#bde9ff] space-y-3">
                <h3 className="text-base font-bold text-[#0B1F33]">
                  Our Safety Commitments:
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-[#2d6180]">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#28A745] shrink-0" />
                    <span>Background-verified drivers with clean driving records</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#28A745] shrink-0" />
                    <span>Routinely sanitized, climate-controlled air-conditioned vehicles</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#28A745] shrink-0" />
                    <span>Upfront fixed fare confirmation with zero hidden fees</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#28A745] shrink-0" />
                    <span>24x7 active emergency phone coordination</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Fast Facts Card */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-[#bde9ff] space-y-6">
              <h2 className="text-xl font-black text-[#0B1F33]">
                At a Glance
              </h2>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-4 rounded-2xl bg-[#EBF9FF] border border-[#bde9ff]">
                  <span className="font-bold text-[#0B1F33] block">Operational Headquarters:</span>
                  <span className="text-[#2d6180] block font-medium">{SITE.address?.street}</span>
                  <span className="text-[11px] text-[#5c9ab8] block">
                    {SITE.address?.city}, {SITE.address?.state} - {SITE.address?.postalCode}, {SITE.address?.country}
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-[#EBF9FF] border border-[#bde9ff]">
                  <span className="font-bold text-[#0a2a3d] block">Network Coverage:</span>
                  <span className="text-[#2d6180]">14 Key Cities across Gujarat & Mumbai</span>
                </div>

                <div className="p-4 rounded-2xl bg-[#EBF9FF] border border-[#bde9ff]">
                  <span className="font-bold text-[#0a2a3d] block">Dispatch Hours:</span>
                  <span className="text-[#2d6180]">24 Hours a Day • 7 Days a Week • 365 Days</span>
                </div>

                <div className="p-4 rounded-2xl bg-[#EBF9FF] border border-[#bde9ff]">
                  <span className="font-bold text-[#0a2a3d] block">Vehicle Categories:</span>
                  <span className="text-[#2d6180]">Sedans (Dzire), MUVs (Ertiga), Tempo Travellers</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#0a2a3d] text-white font-bold text-xs sm:text-sm shadow-xs hover:bg-[#123952] transition-colors"
                >
                  <span>Contact Our Operations Team</span>
                  <ArrowRight className="w-4 h-4 text-[#92EEFF]" />
                </Link>
              </div>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
