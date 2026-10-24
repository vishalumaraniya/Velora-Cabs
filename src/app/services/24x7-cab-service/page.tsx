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
  Clock,
  ShieldCheck,
  Phone,
  MessageCircle,
  AlertCircle,
  ChevronDown,
  CheckCircle2,
  Car,
  Calendar,
} from 'lucide-react';

export const metadata: Metadata = buildMetadata({
  title: '24x7 Cab Service in Bhavnagar | Late-Night & Emergency Taxi | Velora Cabs',
  description:
    'Need a cab right now? 24x7 emergency and late-night taxi service in Bhavnagar and Gujarat. Immediate dispatch, verified drivers. Call +91 87803 11279.',
  path: '/services/24x7-cab-service',
});

const emergencyFaqs = [
  {
    q: 'Can I call for an urgent cab at midnight or 3:00 AM in Bhavnagar?',
    a: 'Yes, our dispatch desk at +91 87803 11279 is active 24 hours a day, 7 days a week. Our team answers calls during late-night and pre-dawn hours to handle urgent hospital trips, early-morning airport departures, and emergency intercity transit.',
  },
  {
    q: 'How does Velora Cabs ensure passenger safety during late-night journeys?',
    a: 'Night travel safety is supported through verified, experienced highway chauffeurs who adhere to defensive driving standards. All vehicles undergo routine maintenance with functioning headlamps and safety gear.',
  },
  {
    q: 'Are there hidden surge charges for midnight or early-morning bookings?',
    a: 'No, Velora Cabs operates on transparent fixed quotes. If any standard night-driver allowance applies to your late-night route, it is clearly communicated upfront before the vehicle is dispatched.',
  },
  {
    q: 'Which destinations are reachable on an urgent basis from Bhavnagar at night?',
    a: 'We provide immediate night dispatch to major destinations including Ahmedabad Airport (AMD), Kalupur Station, Vadodara, Surat, Rajkot, and emergency medical centers across Saurashtra.',
  },
];

export default function TwentyFourSevenCabPage() {
  const confirmedCities = ['Bhavnagar', 'Ahmedabad', 'Vadodara', 'Surat'];

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services/24x7-cab-service' },
    { label: '24x7 Cab Service', href: '/services/24x7-cab-service' },
  ];

  return (
    <div className="min-h-screen bg-[#EBF9FF] flex flex-col">
      <Navbar />

      <JsonLd
        type="service"
        serviceType="24x7 Emergency & Late-Night Taxi"
        path="/services/24x7-cab-service"
        areaServed={confirmedCities}
      />
      <JsonLd type="faq" items={emergencyFaqs} />

      <main className="flex-1 pt-24 sm:pt-28 pb-16">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 mb-4">
          <Breadcrumbs items={breadcrumbs} />
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#bde9ff] shadow-xs space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#92EEFF]/30 border border-[#bde9ff]">
              <Clock className="w-4 h-4 text-[#0284c7]" />
              <span className="text-xs font-bold text-[#0284c7] uppercase tracking-wider">
                Round-The-Clock Dispatch
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1F33] tracking-tight">
              24x7 Emergency & Late-Night Taxi
            </h1>

            <p className="text-base sm:text-lg text-[#2d6180] max-w-3xl leading-relaxed">
              Travel emergencies and flight departures do not adhere to ordinary business hours. Velora Cabs maintains continuous round-the-clock dispatch from Bhavnagar to ensure you always have access to a safe, clean, and reliable air-conditioned cab, day or night.
            </p>

            <div className="pt-2 space-y-2.5 sm:space-y-3 max-w-md sm:max-w-lg">
              {/* Row 1: Book Now and WhatsApp in a single line */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                <a
                  href="/#inquiry"
                  className="px-3 sm:px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-[#FFB400] hover:bg-[#e6a200] text-[#0B1F33] shadow-md transition-all flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer active:scale-95 text-center"
                >
                  <Calendar className="w-4 h-4 shrink-0" />
                  <span>Book Now</span>
                </a>

                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 sm:px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-[#28A745] hover:bg-[#218838] text-white shadow-sm transition-all flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer active:scale-95 text-center"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Row 2: Call Emergency Desk below them */}
              <div>
                <a
                  href={`tel:${SITE.phone}`}
                  className="w-full px-4 sm:px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-[#0B1F33] hover:bg-[#123952] text-white shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 text-center"
                >
                  <Phone className="w-4 h-4 text-[#30AFFF] shrink-0" />
                  <span>Call Emergency Desk: {SITE.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Late-Night Scenarios */}
        <section className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F33]">
              Round-the-Clock Travel Scenarios
            </h2>
            <p className="text-xs sm:text-sm text-[#2d6180]">
              Our late-night dispatchers are prepared for urgent travel needs:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-[#bde9ff] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#EBF9FF] border border-[#bde9ff] flex items-center justify-center text-[#0284c7]">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0B1F33]">Early-Morning Airport Runs</h3>
              <p className="text-xs text-[#2d6180] leading-relaxed">
                Catching a 6:00 AM flight from Ahmedabad requires a 1:30 AM departure from Bhavnagar. Our drivers report punctually at your gate so you arrive with plenty of time for check-in.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#bde9ff] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#EBF9FF] border border-[#bde9ff] flex items-center justify-center text-[#28A745]">
                <AlertCircle className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0B1F33]">Hospital & Medical Travel</h3>
              <p className="text-xs text-[#2d6180] leading-relaxed">
                Urgent transfers to multispecialty hospitals in Ahmedabad, Rajkot, or Vadodara. Smooth driving and compassionate driver assistance throughout the journey.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#bde9ff] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#EBF9FF] border border-[#bde9ff] flex items-center justify-center text-[#0284c7]">
                <Car className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0B1F33]">Midnight Train Station Pickups</h3>
              <p className="text-xs text-[#2d6180] leading-relaxed">
                Arriving in Sihor or Bhavnagar Terminus on a late-night express train? Pre-book a cab to have your chauffeur waiting on the platform approach with your luggage.
              </p>
            </div>
          </div>
        </section>

        {/* Safety Measures */}
        <section className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#bde9ff] space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F33]">
              Late-Night Safety Protocols
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#EBF9FF] border border-[#bde9ff] space-y-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#28A745]" />
                <h3 className="text-xs font-bold text-[#0B1F33]">Driver Verification</h3>
                <p className="text-[11px] text-[#2d6180]">Background-screened chauffeurs experienced on nighttime expressways.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#EBF9FF] border border-[#bde9ff] space-y-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#28A745]" />
                <h3 className="text-xs font-bold text-[#0B1F33]">GPS Route Tracking</h3>
                <p className="text-[11px] text-[#2d6180]">All vehicles are monitored for route consistency and passenger peace of mind.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#EBF9FF] border border-[#bde9ff] space-y-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#28A745]" />
                <h3 className="text-xs font-bold text-[#0B1F33]">Fleet Inspection</h3>
                <p className="text-[11px] text-[#2d6180]">Tire condition, brake responsiveness, and high-beam lights checked regularly.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#EBF9FF] border border-[#bde9ff] space-y-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#28A745]" />
                <h3 className="text-xs font-bold text-[#0B1F33]">Direct Desk Access</h3>
                <p className="text-[11px] text-[#2d6180]">Live phone coordinator available throughout your transit until safe arrival.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F33]">
              24x7 Cab Service FAQs
            </h2>
            <p className="text-xs sm:text-sm text-[#2d6180]">
              Frequently asked questions about emergency bookings and night travel.
            </p>
          </div>

          <div className="space-y-3">
            {emergencyFaqs.map((faq, idx) => (
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
