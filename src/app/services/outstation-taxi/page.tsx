import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { SITE } from '@/lib/site';
import { ROUTES } from '@/data/routes';
import { buildMetadata } from '@/lib/metadata';
import {
  Navigation,
  Phone,
  MessageCircle,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  Users,
  Briefcase,
  ShieldCheck,
  RotateCcw,
} from 'lucide-react';

export const metadata: Metadata = buildMetadata({
  title: 'Outstation Taxi Service in Gujarat | One-Way & Round Trip | Velora Cabs',
  description:
    'Book outstation cabs from Bhavnagar to Ahmedabad, Vadodara, Surat & Mumbai. Transparent quotes, verified drivers & 24x7 service. Call +91 87803 11279.',
  path: '/services/outstation-taxi',
});

const outstationFaqs = [
  {
    q: 'What is the difference between one-way outstation and round-trip cab service?',
    a: 'A one-way outstation cab is ideal when you need to reach a single destination without returning. You pay strictly for the one-way distance with zero reverse empty return charges. A round-trip booking retains the cab and dedicated driver for the entire duration of your travel and brings you back to Bhavnagar.',
  },
  {
    q: 'How are outstation cab fares calculated by Velora Cabs?',
    a: 'Outstation fares are determined by the exact route distance, selected vehicle category (Dzire sedan, Ertiga MUV, or Tempo Traveller), and travel duration. We provide a transparent, fixed quote upfront via WhatsApp so you have complete cost clarity before confirming your journey.',
  },
  {
    q: 'Are tolls, parking, and state border permits included in the quote?',
    a: 'All route-specific charges like expressway toll taxes, municipal entry fees, and airport parking are explained transparently when your fixed quote is issued. There are no hidden or surprise surcharges added at the end of the journey.',
  },
  {
    q: 'Can I book a multi-day outstation trip across multiple Gujarat pilgrimage cities?',
    a: 'Yes, we specialize in multi-day spiritual tours connecting Bhavnagar to Palitana Shatrunjaya, Somnath, Dwarka, Gir, and Ambaji. We assign experienced chauffeurs familiar with local temple timings, comfortable rest halts, and highway routes.',
  },
];

export default function OutstationTaxiPage() {
  const confirmedCities = [
    'Bhavnagar',
    'Ahmedabad',
    'Vadodara',
    'Surat',
    'Mumbai',
    'Palitana',
  ];

  const popularRoutes = ROUTES.slice(0, 8);

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services/outstation-taxi' },
    { label: 'Outstation Cab Service', href: '/services/outstation-taxi' },
  ];

  return (
    <div className="min-h-screen bg-[#EBF9FF] flex flex-col">
      <Navbar />

      <JsonLd
        type="service"
        serviceType="Outstation Taxi Service"
        path="/services/outstation-taxi"
        areaServed={confirmedCities}
      />
      <JsonLd type="faq" items={outstationFaqs} />

      <main className="flex-1 pt-24 sm:pt-28 pb-16">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 mb-4">
          <Breadcrumbs items={breadcrumbs} />
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#bde9ff] shadow-xs space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#92EEFF]/30 border border-[#bde9ff]">
              <Navigation className="w-4 h-4 text-[#0284c7]" />
              <span className="text-xs font-bold text-[#0284c7] uppercase tracking-wider">
                Intercity & Highway Travel
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1F33] tracking-tight">
              Outstation Cab Service from Bhavnagar
            </h1>

            <p className="text-base sm:text-lg text-[#2d6180] max-w-3xl leading-relaxed">
              Travel comfortably between Gujarat cities and onward to Mumbai without the stress of crowded public transit, rigid train waitlists, or exhausting self-driving. Velora Cabs delivers verified chauffeurs, doorstep pickup, and fixed upfront fares across all major western highway corridors.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#28A745] hover:bg-[#218838] text-white font-bold text-sm shadow-md transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Request Outstation Quote on WhatsApp</span>
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

        {/* One-Way vs Round-Trip Guide (500+ Words Depth) */}
        <section className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#bde9ff] space-y-8">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-bold text-[#0284c7] uppercase tracking-wider">
                Tailored Travel Options
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F33]">
                One-Way Drop vs Round-Trip Outstation Cabs
              </h2>
              <p className="text-[#2d6180] text-sm leading-relaxed">
                Choosing the right booking structure saves travel expense and gives you total schedule flexibility. Here is how our outstation packages operate:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-[#EBF9FF] border border-[#bde9ff] space-y-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#bde9ff] flex items-center justify-center text-[#0284c7]">
                  <ArrowRight className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#0B1F33]">Dedicated One-Way Cabs</h3>
                <p className="text-xs sm:text-sm text-[#2d6180] leading-relaxed">
                  Best for travelers relocating, connecting to flights, or staying long-term at their destination. With Velora Cabs one-way intercity service, you only pay for the distance traveled from your origin doorstep to your final drop address in Ahmedabad, Surat, Vadodara, or Mumbai. You never pay for empty return kilometers.
                </p>
                <ul className="text-xs text-[#2d6180] space-y-2 pt-2 border-t border-[#bde9ff]/60">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#28A745]" />
                    <span>Pay only for one-way distance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#28A745]" />
                    <span>Zero return toll or driver return allowance</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-[#EBF9FF] border border-[#bde9ff] space-y-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#bde9ff] flex items-center justify-center text-[#0284c7]">
                  <RotateCcw className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#0B1F33]">Flexible Round-Trip Packages</h3>
                <p className="text-xs sm:text-sm text-[#2d6180] leading-relaxed">
                  Ideal for family pilgrimages, weekend vacations, and corporate plant audits. The assigned cab and chauffeur remain with you throughout your entire itinerary, waiting at meeting venues, hotels, or pilgrimage shrines and bringing you safely back to Bhavnagar.
                </p>
                <ul className="text-xs text-[#2d6180] space-y-2 pt-2 border-t border-[#bde9ff]/60">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#28A745]" />
                    <span>Vehicle retained for multi-stop local errands</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#28A745]" />
                    <span>Single comprehensive quote covering full return</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* How Fares, Tolls and Taxes Work */}
            <div className="space-y-4 border-t border-[#bde9ff]/60 pt-6">
              <h3 className="text-xl font-bold text-[#0B1F33]">
                Transparent Fare Structure: How Quotes Are Handled
              </h3>
              <p className="text-xs sm:text-sm text-[#2d6180] leading-relaxed">
                At Velora Cabs, transparency is our primary operating standard. When you message our WhatsApp coordinator with your journey itinerary, we review the exact route distance and provide a fixed quote upfront. We clearly distinguish the vehicle charge from applicable highway tolls and interstate permits, so you can budget accurately without hidden driver surcharges or fuel price fluctuation.
              </p>
            </div>
          </div>
        </section>

        {/* Vehicle Picks for Outstation */}
        <section className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F33]">
              Recommended Vehicles for Highway Travel
            </h2>
            <p className="text-xs sm:text-sm text-[#2d6180]">
              All vehicles include functioning climate-control AC, seatbelts for all passengers, and ample boot space.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-[#bde9ff] space-y-3">
              <span className="text-xs font-bold text-[#0284c7] uppercase">Sedan Category</span>
              <h3 className="text-lg font-bold text-[#0B1F33]">Maruti Swift Dzire</h3>
              <p className="text-xs text-[#2d6180]">
                Comfortable ride for 1 to 4 passengers with 2 medium bags. Economical choice for couple getaways and business meetings.
              </p>
              <div className="flex items-center gap-4 text-xs text-[#2d6180] pt-2 border-t border-[#bde9ff]/60">
                <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5 text-[#0284c7]" /> 4 Seats</span>
                <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5 text-[#0284c7]" /> 2 Bags</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#bde9ff] space-y-3">
              <span className="text-xs font-bold text-[#0284c7] uppercase">Family MUV</span>
              <h3 className="text-lg font-bold text-[#0B1F33]">Maruti Suzuki Ertiga</h3>
              <p className="text-xs text-[#2d6180]">
                Spacious three-row seating for 6 to 7 passengers with flexible luggage room. Premium choice for family highway travel.
              </p>
              <div className="flex items-center gap-4 text-xs text-[#2d6180] pt-2 border-t border-[#bde9ff]/60">
                <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5 text-[#0284c7]" /> 6-7 Seats</span>
                <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5 text-[#0284c7]" /> 4 Bags</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#bde9ff] space-y-3">
              <span className="text-xs font-bold text-[#0284c7] uppercase">Group Minibus</span>
              <h3 className="text-lg font-bold text-[#0B1F33]">Tempo Traveller</h3>
              <p className="text-xs text-[#2d6180]">
                Heavy-duty air-conditioned coach with pushback seating for 12 to 17 passengers. Ideal for Palitana Jain yatras and events.
              </p>
              <div className="flex items-center gap-4 text-xs text-[#2d6180] pt-2 border-t border-[#bde9ff]/60">
                <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5 text-[#0284c7]" /> 12-17 Seats</span>
                <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5 text-[#0284c7]" /> 8+ Bags</span>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Outstation Routes Grid (Link All) */}
        <section className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F33]">
              Popular Outstation Routes
            </h2>
            <p className="text-xs sm:text-sm text-[#2d6180]">
              Explore distance, travel time, and route insights for frequent journeys connecting Bhavnagar:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {popularRoutes.map((route) => (
              <Link
                key={route.slug}
                href={`/routes/${route.slug}`}
                className="p-4 rounded-2xl bg-white border border-[#bde9ff] hover:border-[#30AFFF] shadow-xs hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-sm font-bold text-[#0B1F33] group-hover:text-[#0284c7] transition-colors">
                    {route.from} to {route.to}
                  </h3>
                  <span className="text-xs text-[#5c9ab8] block mt-1">
                    {route.approxDuration} · {route.approxDistance.replace('depending on route and road conditions', '').trim()}
                  </span>
                </div>
                <div className="pt-3 mt-3 border-t border-[#bde9ff]/60 flex items-center justify-between text-xs font-semibold text-[#0284c7]">
                  <span>View Route Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ Section with Schema */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F33]">
              Outstation Travel FAQs
            </h2>
            <p className="text-xs sm:text-sm text-[#2d6180]">
              Common questions regarding highway pickups, driver safety, and trip scheduling.
            </p>
          </div>

          <div className="space-y-3">
            {outstationFaqs.map((faq, idx) => (
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
