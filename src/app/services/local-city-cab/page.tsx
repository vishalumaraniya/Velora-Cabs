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
  Car,
  Clock,
  ShieldCheck,
  Phone,
  MessageCircle,
  ChevronDown,
  Building2,
  ShoppingBag,
  Landmark,
  MapPin,
  CheckCircle2,
} from 'lucide-react';

export const metadata: Metadata = buildMetadata({
  title: 'Local City Cab & Hourly Taxi Rental in Bhavnagar | Velora Cabs',
  description:
    'Hire local AC cabs in Bhavnagar for hourly rentals, shopping, meetings & sightseeing. Doorstep pickup with verified drivers. Call +91 87803 11279 for a quote.',
  path: '/services/local-city-cab',
});

const localFaqs = [
  {
    q: 'Can I book a local taxi for multiple hours with several stops across Bhavnagar?',
    a: 'Yes, Velora Cabs provides convenient hourly rental packages for intra-city travel, allowing you to attend multiple business meetings, family shopping trips, or medical appointments with the dedicated vehicle and driver waiting for you.',
  },
  {
    q: 'How fast can a cab report for a local pickup in Bhavnagar?',
    a: 'For on-demand local dispatches within Bhavnagar city limits, average vehicle arrival time is roughly 20 to 30 minutes. For airport or railway station drops, scheduling 1 to 2 hours prior is recommended.',
  },
  {
    q: 'Are all local city cabs equipped with air conditioning?',
    a: 'Yes, every vehicle across our local fleet features functional, climate-controlled air conditioning, ensuring cool, comfortable city transit even during high summer temperatures in Gujarat.',
  },
  {
    q: 'Do you offer pickups from Bhavnagar Railway Terminus and Bhavnagar Port?',
    a: 'Yes, we provide round-the-clock doorstep pickups and drops to Bhavnagar Railway Station, Bhavnagar Port, Alang Ship Breaking Yard corporate offices, and local GIDC industrial zones.',
  },
];

const LOCAL_USE_CASES = [
  {
    title: 'Business Meetings & Corporate Visits',
    icon: Building2,
    description: 'Chauffeured transportation between corporate offices, industrial GIDC clusters, bank appointments, and client conferences without parking hassles.',
  },
  {
    title: 'Family Shopping & City Errands',
    icon: ShoppingBag,
    description: 'Comfortable air-conditioned transit for city market trips, Waghawadi Road retail complexes, jewelry shopping, and multi-stop family errands.',
  },
  {
    title: 'Local Heritage & Sightseeing Tours',
    icon: Landmark,
    description: 'Explore Bhavnagar historical landmarks including Takhteshwar Temple, Nilambag Palace, Victoria Park, and Gaurishankar Lake at your own relaxed pace.',
  },
  {
    title: 'Railway Station & Suburban Drops',
    icon: MapPin,
    description: 'Punctual station transfers to Bhavnagar Terminus, Sihor, and nearby Saurashtra towns with full luggage loading assistance.',
  },
];

export default function LocalCityCabPage() {
  const confirmedCities = ['Bhavnagar'];

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services/local-city-cab' },
    { label: 'Local City Cab Rental', href: '/services/local-city-cab' },
  ];

  return (
    <div className="min-h-screen bg-[#EBF9FF] flex flex-col">
      <Navbar />

      <JsonLd
        type="service"
        serviceType="Local Taxi & Hourly Cab Rental"
        path="/services/local-city-cab"
        areaServed={confirmedCities}
      />
      <JsonLd type="faq" items={localFaqs} />

      <main className="flex-1 pt-24 sm:pt-28 pb-16">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 mb-4">
          <Breadcrumbs items={breadcrumbs} />
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#bde9ff] shadow-xs space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#92EEFF]/30 border border-[#bde9ff]">
              <Car className="w-4 h-4 text-[#0284c7]" />
              <span className="text-xs font-bold text-[#0284c7] uppercase tracking-wider">
                Intra-City & Hourly Rentals
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1F33] tracking-tight">
              Local Taxi & Hourly Cab Rental
            </h1>

            <p className="text-base sm:text-lg text-[#2d6180] max-w-3xl leading-relaxed">
              Navigate Bhavnagar and nearby Saurashtra hubs in comfort with Velora Cabs. Whether you need a dedicated chauffeur for four hours of corporate appointments, a day of shopping, or a sightseeing tour, our hourly rental cabs give you total freedom with transparent fixed quotes.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#28A745] hover:bg-[#218838] text-white font-bold text-sm shadow-md transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Get Hourly Rental Quote on WhatsApp</span>
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

        {/* Local Travel Use Cases */}
        <section className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F33]">
              Flexible Local Transportation in Bhavnagar
            </h2>
            <p className="text-xs sm:text-sm text-[#2d6180]">
              Clean sedans and family MUVs tailored for diverse daily travel requirements:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LOCAL_USE_CASES.map((uc) => (
              <div
                key={uc.title}
                className="bg-white rounded-2xl p-6 border border-[#bde9ff] space-y-3 shadow-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EBF9FF] border border-[#bde9ff] flex items-center justify-center text-[#0284c7]">
                  <uc.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#0B1F33]">{uc.title}</h3>
                <p className="text-xs text-[#2d6180] leading-relaxed">{uc.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Hourly Rental Process (Real Values Only) */}
        <section className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#bde9ff] space-y-6">
            <div className="max-w-3xl space-y-2">
              <span className="text-xs font-bold text-[#0284c7] uppercase">Custom Hourly Packages</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F33]">
                How Hourly Cab Rental Works
              </h2>
              <p className="text-xs sm:text-sm text-[#2d6180] leading-relaxed">
                Rather than calculating confusing per-minute meters or fluctuating ride-share surcharges, Velora Cabs provides fixed hourly duration quotes (such as 4-hour/40km or 8-hour/80km packages). Message us on WhatsApp with your planned stops, and our coordinator will confirm vehicle availability and a straightforward fixed price.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="p-5 rounded-2xl bg-[#EBF9FF] border border-[#bde9ff] space-y-2">
                <Clock className="w-5 h-5 text-[#0284c7]" />
                <h3 className="text-sm font-bold text-[#0B1F33]">Doorstep Punctuality</h3>
                <p className="text-xs text-[#2d6180]">Your chauffeur arrives at your designated residence or hotel address at the requested hour.</p>
              </div>

              <div className="p-5 rounded-2xl bg-[#EBF9FF] border border-[#bde9ff] space-y-2">
                <ShieldCheck className="w-5 h-5 text-[#28A745]" />
                <h3 className="text-sm font-bold text-[#0B1F33]">Dedicated Driver Wait</h3>
                <p className="text-xs text-[#2d6180]">No re-booking or waiting for new cabs between meetings; your car stays on standby.</p>
              </div>

              <div className="p-5 rounded-2xl bg-[#EBF9FF] border border-[#bde9ff] space-y-2">
                <CheckCircle2 className="w-5 h-5 text-[#0284c7]" />
                <h3 className="text-sm font-bold text-[#0B1F33]">Transparent Billing</h3>
                <p className="text-xs text-[#2d6180]">Confirmed fixed quote upfront with clear extension terms if your schedule runs late.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F33]">
              Local City Ride FAQs
            </h2>
            <p className="text-xs sm:text-sm text-[#2d6180]">
              Answers about intra-city cab hire, local routes, and neighborhood dispatches in Bhavnagar.
            </p>
          </div>

          <div className="space-y-3">
            {localFaqs.map((faq, idx) => (
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
