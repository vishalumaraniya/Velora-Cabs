import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { CITIES, getCityBySlug } from '@/data/cities';
import { SITE } from '@/data/site';
import {
  MapPin,
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageCircle,
  Navigation,
  ChevronDown,
  ArrowRight,
} from 'lucide-react';

interface CityPageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return CITIES.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);

  if (!city) {
    return {
      title: 'City Not Found | Velora Cabs',
    };
  }

  const title = `Cab Service in ${city.name} | Taxi Booking`;
  const description = `Book 24x7 local, airport & outstation cabs in ${city.name}. Doorstep pickup from ${city.pickupAreas.slice(0, 3).join(', ')} & more. Call +91 87803 11279 for fixed fares.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/cab-service/${city.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${SITE.url}/cab-service/${city.slug}`,
      siteName: SITE.name,
      images: [
        {
          url: '/images/og-velora.jpg',
          width: 1200,
          height: 630,
          alt: `Cab Service in ${city.name} – Velora Cabs`,
        },
      ],
      type: 'website',
    },
  };
}

export default async function CityDetailPage({ params }: CityPageProps) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);

  if (!city) {
    notFound();
  }

  const whatsappMessage = `Hello Velora Cabs, I want to book a cab in ${city.name}.`;

  const taxiServiceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TaxiService',
    name: `Velora Cabs - Cab Service in ${city.name}`,
    description: city.intro,
    url: `${SITE.url}/cab-service/${city.slug}`,
    telephone: SITE.phoneFormatted,
    areaServed: {
      '@type': 'City',
      name: city.name,
    },
    provider: {
      '@type': 'TaxiService',
      '@id': `${SITE.url}/#business`,
    },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: city.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-[#EBF9FF] flex flex-col">
      <Navbar />

      <JsonLd data={taxiServiceJsonLd} />
      <JsonLd data={faqJsonLd} />

      <main className="flex-1 pt-24 sm:pt-28 pb-16">
        <Breadcrumbs
          items={[
            { label: 'Cities We Serve', href: '/cab-service' },
            { label: city.name },
          ]}
        />

        {/* Hero Banner */}
        <section className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#bde9ff] shadow-sm space-y-8">
            
            <div className="space-y-4 max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#92EEFF]/30 border border-[#bde9ff]">
                <MapPin className="w-4 h-4 text-[#0284c7]" />
                <span className="text-xs font-bold text-[#0284c7] uppercase tracking-wider">
                  City Network Hub
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a2a3d] tracking-tight">
                Cab Service in {city.name}
              </h1>

              <p className="text-base sm:text-lg text-[#2d6180] leading-relaxed">
                {city.intro}
              </p>
            </div>

            {/* Quick Service Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              <div className="p-4 rounded-2xl bg-[#EBF9FF] border border-[#bde9ff]">
                <span className="text-xs text-[#2d6180] block font-medium">Availability</span>
                <span className="text-lg sm:text-2xl font-black text-[#0a2a3d]">24x7 Cabs</span>
                <span className="text-[11px] text-[#5c9ab8] block">Emergency & pre-booked</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#EBF9FF] border border-[#bde9ff]">
                <span className="text-xs text-[#2d6180] block font-medium">Pickup Coverage</span>
                <span className="text-lg sm:text-2xl font-black text-[#0a2a3d]">Doorstep</span>
                <span className="text-[11px] text-[#5c9ab8] block">Home, hotel & airport</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#EBF9FF] border border-[#bde9ff]">
                <span className="text-xs text-[#2d6180] block font-medium">Trip Types</span>
                <span className="text-lg sm:text-2xl font-black text-[#0a2a3d]">Local & Outstation</span>
                <span className="text-[11px] text-[#5c9ab8] block">One-way drops & return</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#EBF9FF] border border-[#bde9ff]">
                <span className="text-xs text-[#2d6180] block font-medium">Pricing</span>
                <span className="text-lg sm:text-2xl font-black text-[#28A745]">Fixed Fares</span>
                <span className="text-[11px] text-[#5c9ab8] block">Confirmed before booking</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={`tel:${SITE.phoneFormatted}`}
                className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#0a2a3d] hover:bg-[#123952] text-white font-bold text-sm shadow-md transition-all active:scale-95"
              >
                <Phone className="w-4 h-4 text-[#92EEFF]" />
                <span>Call to Book: {SITE.phone}</span>
              </a>

              <a
                href={`${SITE.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#28A745] hover:bg-[#1e8c38] text-white font-bold text-sm shadow-md transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Quote for {city.name}</span>
              </a>
            </div>

          </div>
        </section>

        {/* Pickup Areas & Key Landmarks */}
        <section className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Pickup Areas */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#bde9ff] space-y-5">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-6 h-6 text-[#0284c7]" />
                <h2 className="text-xl sm:text-2xl font-black text-[#0a2a3d]">
                  Doorstep Pickup Areas in {city.name}
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#2d6180]">
                We serve all residential societies, railway junctions, bus terminals, and corporate zones across {city.name}, including:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {city.pickupAreas.map((area, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#EBF9FF] border border-[#bde9ff] text-xs font-semibold text-[#0a2a3d] flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#28A745] shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Services Available */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#bde9ff] space-y-5">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-6 h-6 text-[#0284c7]" />
                <h2 className="text-xl sm:text-2xl font-black text-[#0a2a3d]">
                  Services Offered in {city.name}
                </h2>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-[#EBF9FF]/60 border border-[#bde9ff]">
                  <h3 className="text-sm font-bold text-[#0a2a3d]">Outstation One-Way & Round Trip</h3>
                  <p className="text-xs text-[#2d6180] mt-1">
                    Direct highway rides from {city.name} to major business hubs, pilgrimage temples, and holiday retreats.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#EBF9FF]/60 border border-[#bde9ff]">
                  <h3 className="text-sm font-bold text-[#0a2a3d]">Airport Transfers</h3>
                  <p className="text-xs text-[#2d6180] mt-1">
                    Punctual airport drops and arrivals with flight-time coordination and boot luggage space.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#EBF9FF]/60 border border-[#bde9ff]">
                  <h3 className="text-sm font-bold text-[#0a2a3d]">Local City Rental & Business Trips</h3>
                  <p className="text-xs text-[#2d6180] mt-1">
                    Multi-stop intra-city travel, doctor visits, family events, and client meetings across {city.name}.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Popular Routes from this City */}
        {city.popularDestinations && city.popularDestinations.length > 0 && (
          <section className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black text-[#0a2a3d]">
              Popular Taxi Routes From {city.name}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {city.popularDestinations.map((dest, idx) => (
                <Link
                  key={idx}
                  href={`/taxi/${dest.routeSlug}`}
                  className="p-5 rounded-2xl bg-white border border-[#bde9ff] hover:border-[#30AFFF] shadow-xs hover:shadow-md transition-all flex items-center justify-between text-sm font-bold text-[#0a2a3d] hover:text-[#0284c7]"
                >
                  <span className="flex items-center gap-2">
                    <Navigation className="w-4 h-4 text-[#0284c7]" />
                    {dest.label}
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#0284c7]" />
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* City FAQs */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-[#0a2a3d]">
              Cab Service in {city.name} FAQs
            </h2>
            <p className="text-xs sm:text-sm text-[#2d6180]">
              Frequently asked questions about hiring a cab in {city.name}.
            </p>
          </div>

          <div className="space-y-3">
            {city.faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-white rounded-2xl border border-[#bde9ff] overflow-hidden open:border-[#30AFFF] open:shadow-xs transition-colors"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none select-none font-bold text-sm sm:text-base text-[#0a2a3d] group-hover:text-[#0284c7]">
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown className="w-4 h-4 text-[#0284c7] shrink-0 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#2d6180] leading-relaxed border-t border-[#bde9ff]/40">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>

          <div className="pt-4 text-center">
            <Link
              href="/cab-service"
              className="text-xs sm:text-sm font-bold text-[#0284c7] hover:underline"
            >
              ← Browse all 14 cities in the Velora Cabs network
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
