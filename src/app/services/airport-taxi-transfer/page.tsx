import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { SITE } from '@/lib/site';
import { buildMetadata } from '@/lib/metadata';
import {
  Plane,
  Clock,
  Briefcase,
  Phone,
  MessageCircle,
  ChevronDown,
  CheckCircle2,
  Calendar,
  Users,
} from 'lucide-react';

export const metadata: Metadata = buildMetadata({
  title: 'Airport Taxi Transfer | Bhavnagar, Ahmedabad, Mumbai Cabs | Velora Cabs',
  description:
    'Reliable airport taxi transfers to Ahmedabad Airport (AMD), Mumbai BOM & Surat airports. Flight schedule coordination, luggage-friendly AC fleet. Call +91 87803 11279.',
  path: '/services/airport-taxi-transfer',
});

const airportFaqs = [
  {
    q: 'How far in advance should I schedule my airport taxi transfer?',
    a: 'For airport departures, we recommend booking at least 6 to 12 hours in advance. For early-morning international or domestic flights from Ahmedabad (AMD) or Mumbai (BOM), booking 24 hours prior ensures dedicated chauffeur assignment and seamless doorstep pickup.',
  },
  {
    q: 'How do you coordinate airport arrivals for delayed flights?',
    a: 'When you share your airline and flight number during booking, our dispatch team monitors arrival timings so your chauffeur is stationed at the terminal arrivals gate when you collect your luggage, eliminating waiting delays.',
  },
  {
    q: 'How much luggage can your airport cabs accommodate?',
    a: 'Our Maruti Swift Dzire sedans carry up to 2 large suitcases plus 2 cabin bags in the trunk. For family international travel with 4 to 6 large suitcases, our Maruti Suzuki Ertiga MUV or Tempo Traveller is recommended.',
  },
  {
    q: 'Are airport transfer services available during late night or early morning hours?',
    a: 'Yes, Velora Cabs provides round-the-clock airport dispatch. Whether your flight lands at 2:00 AM or departs at 5:00 AM, our drivers provide reliable, punctual doorstep transfers.',
  },
];

const AIRPORTS_SERVED = [
  {
    name: 'Ahmedabad Airport (AMD)',
    distanceFromBhavnagar: 'Approx. 175-185 km',
    travelTime: '3.5 - 4.5 Hours',
    terminals: 'Terminal 1 (Domestic) & Terminal 2 (International)',
    notes: 'Primary international hub for Saurashtra travelers.',
  },
  {
    name: 'Mumbai International Airport (BOM)',
    distanceFromBhavnagar: 'Approx. 600-650 km',
    travelTime: '10 - 12 Hours',
    terminals: 'Terminal 1 & Terminal 2 (CSMIA)',
    notes: 'Dedicated long-distance outstation drop with seasoned highway drivers.',
  },
  {
    name: 'Surat Airport (STV)',
    distanceFromBhavnagar: 'Approx. 270 km',
    travelTime: '5.5 - 6.5 Hours',
    terminals: 'Integrated Domestic & International Terminal',
    notes: 'Connecting textile and diamond business travel.',
  },
  {
    name: 'Vadodara Airport (BDQ)',
    distanceFromBhavnagar: 'Approx. 205 km',
    travelTime: '3.5 - 4.5 Hours',
    terminals: 'Domestic Civil Terminal',
    notes: 'Fast road connection via state express routes.',
  },
  {
    name: 'Bhavnagar Airport (BHU)',
    distanceFromBhavnagar: 'City Terminal (Doorstep Pickup)',
    travelTime: '20 - 30 Minutes',
    terminals: 'Domestic Terminal',
    notes: 'Local doorstep transfers to Crescent, Waghawadi, and suburbs.',
  },
];

export default function AirportTaxiTransferPage() {
  const confirmedCities = [
    'Bhavnagar',
    'Ahmedabad',
    'Vadodara',
    'Surat',
    'Mumbai',
  ];

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services/airport-taxi-transfer' },
    { label: 'Airport Taxi Transfer', href: '/services/airport-taxi-transfer' },
  ];

  return (
    <div className="min-h-screen bg-[#EBF9FF] flex flex-col">
      <Navbar />

      <JsonLd
        type="service"
        serviceType="Airport Taxi Transfer"
        path="/services/airport-taxi-transfer"
        areaServed={confirmedCities}
      />
      <JsonLd type="faq" items={airportFaqs} />

      <main className="flex-1 pt-24 sm:pt-28 pb-16">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 mb-4">
          <Breadcrumbs items={breadcrumbs} />
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#bde9ff] shadow-xs space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#92EEFF]/30 border border-[#bde9ff]">
              <Plane className="w-4 h-4 text-[#0284c7]" />
              <span className="text-xs font-bold text-[#0284c7] uppercase tracking-wider">
                Reliable Terminal Transfers
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1F33] tracking-tight">
              Airport Pickup & Drop Taxi Service
            </h1>

            <p className="text-base sm:text-lg text-[#2d6180] max-w-3xl leading-relaxed">
              Never worry about missing a flight or waiting curbside after a tiring landing. Velora Cabs provides punctual airport transfers connecting Bhavnagar with Ahmedabad Airport (AMD), Mumbai (BOM), Surat, and Vadodara airports with flight schedule planning, clean AC cabs, and luggage support.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#28A745] hover:bg-[#218838] text-white font-bold text-sm shadow-md transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Book Airport Cab on WhatsApp</span>
              </a>

              <a
                href={`tel:${SITE.phone}`}
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-[#EBF9FF] text-[#0B1F33] border border-[#bde9ff] font-bold text-sm shadow-xs transition-all active:scale-95"
              >
                <Phone className="w-4 h-4 text-[#0284c7]" />
                <span>Call Dispatch: {SITE.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </section>

        {/* Flight Planning & Airports Grid */}
        <section className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F33]">
              Major Airports Served from Bhavnagar
            </h2>
            <p className="text-xs sm:text-sm text-[#2d6180]">
              Direct terminal doorstep pickup and departure transfers with accurate highway travel time estimates:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AIRPORTS_SERVED.map((airport) => (
              <div
                key={airport.name}
                className="bg-white rounded-2xl p-6 border border-[#bde9ff] space-y-4 shadow-xs"
              >
                <div>
                  <h3 className="text-base font-bold text-[#0B1F33]">
                    {airport.name}
                  </h3>
                  <span className="text-xs font-semibold text-[#0284c7] block mt-1">
                    {airport.distanceFromBhavnagar} · {airport.travelTime}
                  </span>
                </div>

                <div className="text-xs text-[#2d6180] space-y-1.5 border-t border-[#bde9ff]/60 pt-3">
                  <p><strong>Terminals:</strong> {airport.terminals}</p>
                  <p className="text-[#5c9ab8]">{airport.notes}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Luggage Capacity & Vehicle Recommendations */}
        <section className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#bde9ff] space-y-6">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-bold text-[#0284c7] uppercase">Luggage-Friendly Cars</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F33]">
                Fleet Selection for Airport Transfers
              </h2>
              <p className="text-xs sm:text-sm text-[#2d6180]">
                Match your passenger count and baggage requirement with the right vehicle category:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="p-5 rounded-2xl bg-[#EBF9FF] border border-[#bde9ff] space-y-3">
                <h3 className="text-base font-bold text-[#0B1F33]">Dzire Sedan</h3>
                <p className="text-xs text-[#2d6180]">Best for 1-3 corporate passengers with standard trolley luggage.</p>
                <div className="flex items-center gap-4 text-xs font-semibold text-[#0284c7] pt-2 border-t border-[#bde9ff]/60">
                  <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> Up to 4 Seats</span>
                  <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" /> 2 Bags</span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#EBF9FF] border border-[#bde9ff] space-y-3">
                <h3 className="text-base font-bold text-[#0B1F33]">Ertiga Family MUV</h3>
                <p className="text-xs text-[#2d6180]">Ideal for families with international trolley bags and baby strollers.</p>
                <div className="flex items-center gap-4 text-xs font-semibold text-[#0284c7] pt-2 border-t border-[#bde9ff]/60">
                  <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> 6-7 Seats</span>
                  <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" /> 4 Bags</span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#EBF9FF] border border-[#bde9ff] space-y-3">
                <h3 className="text-base font-bold text-[#0B1F33]">Tempo Traveller</h3>
                <p className="text-xs text-[#2d6180]">Spacious coach with massive rear luggage capacity for large delegations.</p>
                <div className="flex items-center gap-4 text-xs font-semibold text-[#0284c7] pt-2 border-t border-[#bde9ff]/60">
                  <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> 12-17 Seats</span>
                  <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" /> 8+ Bags</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F33]">
              Airport Taxi FAQs
            </h2>
            <p className="text-xs sm:text-sm text-[#2d6180]">
              Key questions about flight tracking, terminal meet-and-greet, and baggage handling.
            </p>
          </div>

          <div className="space-y-3">
            {airportFaqs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-white rounded-2xl border border-[#bde9ff] overflow-hidden transition-colors open:border-[#30AFFF]"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none select-none font-bold text-sm text-[#0B1F33] group-hover:text-[#0284c7] transition-colors">
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown className="w-4 h-4 text-[#0284c7] shrink-0 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#2d6180] leading-relaxed border-t border-[#bde9ff]/40">
                  <p>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
