import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { ROUTES, getRouteBySlug } from '@/data/routes';
import { SITE } from '@/data/site';
import {
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageCircle,
  Navigation,
  ChevronDown,
  ArrowRight,
  Info,
} from 'lucide-react';

interface RoutePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ROUTES.map((route) => ({
    slug: route.slug,
  }));
}

export async function generateMetadata({ params }: RoutePageProps): Promise<Metadata> {
  const { slug } = await params;
  const route = getRouteBySlug(slug);

  if (!route) {
    return {
      title: 'Route Not Found | Velora Cabs',
    };
  }

  const title = `${route.from} to ${route.to} Taxi | ${route.from} to ${route.to} Cab Service`;
  const description = `Book reliable ${route.from} to ${route.to} cab service with Velora Cabs. Distance ~${route.distanceKm} km, verified drivers, fixed fares, 24x7 doorstep pickup.`;

  return {
    title: {
      absolute: `${title} – Velora Cabs`,
    },
    description,
    alternates: {
      canonical: `/taxi/${route.slug}`,
    },
    openGraph: {
      title: `${title} – Velora Cabs`,
      description,
      url: `${SITE.url}/taxi/${route.slug}`,
      siteName: SITE.name,
      images: [
        {
          url: '/images/og-velora.jpg',
          width: 1200,
          height: 630,
          alt: `${route.from} to ${route.to} Taxi Service – Velora Cabs`,
        },
      ],
      type: 'website',
    },
  };
}

export default async function RouteDetailPage({ params }: RoutePageProps) {
  const { slug } = await params;
  const route = getRouteBySlug(slug);

  if (!route) {
    notFound();
  }

  // Related routes (first 6 or related)
  const relatedRoutes = (route.relatedSlugs || [])
    .map((rSlug) => getRouteBySlug(rSlug))
    .filter((r): r is NonNullable<typeof r> => Boolean(r))
    .slice(0, 6);

  const whatsappMessage = `Hello Velora Cabs, I want to book a cab from ${route.from} to ${route.to}.`;

  // JSON-LD Service + FAQPage Schema
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${route.from} to ${route.to} Taxi Service`,
    serviceType: 'Taxi Service',
    description: route.intro,
    provider: {
      '@type': 'TaxiService',
      '@id': `${SITE.url}/#business`,
      name: SITE.name,
      telephone: SITE.phoneFormatted,
      url: SITE.url,
    },
    areaServed: [
      { '@type': 'City', name: route.from },
      { '@type': 'City', name: route.to },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: route.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const originCitySlug = route.from.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  return (
    <div className="min-h-screen bg-[#EBF9FF] flex flex-col">
      <Navbar />

      <JsonLd data={serviceJsonLd} />
      <JsonLd data={faqJsonLd} />

      <main className="flex-1 pt-24 sm:pt-28 pb-16">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { label: 'Outstation Routes', href: '/taxi' },
            { label: `${route.from} to ${route.to}` },
          ]}
        />

        {/* Hero Banner */}
        <section className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#bde9ff] shadow-sm space-y-8">
            
            {/* Header Badge & Title */}
            <div className="space-y-4 max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#92EEFF]/30 border border-[#bde9ff]">
                <Navigation className="w-4 h-4 text-[#0284c7]" />
                <span className="text-xs font-bold text-[#0284c7] uppercase tracking-wider">
                  Outstation Highway Route
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a2a3d] tracking-tight">
                {route.from} to {route.to} Taxi Service
              </h1>

              <p className="text-base sm:text-lg text-[#2d6180] leading-relaxed">
                {route.intro}
              </p>
            </div>

            {/* Quick Trip Highlights Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              <div className="p-4 rounded-2xl bg-[#EBF9FF] border border-[#bde9ff]">
                <span className="text-xs text-[#2d6180] block font-medium">Estimated Distance</span>
                <span className="text-lg sm:text-2xl font-black text-[#0a2a3d]">~{route.distanceKm} km</span>
                <span className="text-[11px] text-[#5c9ab8] block">TODO: verify with GPS</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#EBF9FF] border border-[#bde9ff]">
                <span className="text-xs text-[#2d6180] block font-medium">Approx. Travel Time</span>
                <span className="text-lg sm:text-2xl font-black text-[#0a2a3d]">~{route.durationHrs}</span>
                <span className="text-[11px] text-[#5c9ab8] block">Traffic & route dependent</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#EBF9FF] border border-[#bde9ff]">
                <span className="text-xs text-[#2d6180] block font-medium">Service Hours</span>
                <span className="text-lg sm:text-2xl font-black text-[#0a2a3d]">24x7 Available</span>
                <span className="text-[11px] text-[#5c9ab8] block">Day & night dispatch</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#EBF9FF] border border-[#bde9ff]">
                <span className="text-xs text-[#2d6180] block font-medium">Pricing Model</span>
                <span className="text-lg sm:text-2xl font-black text-[#28A745]">Fixed Fares</span>
                <span className="text-[11px] text-[#5c9ab8] block">Zero hidden surge fees</span>
              </div>
            </div>

            {/* Action Buttons: Tel & WhatsApp Direct */}
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
                <span>Get Free Quote on WhatsApp</span>
              </a>
            </div>

          </div>
        </section>

        {/* Content Section: Why Choose & Best For */}
        <section className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Why Choose Velora Cabs on this Route */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#bde9ff] space-y-6">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-6 h-6 text-[#0284c7]" />
                <h2 className="text-xl sm:text-2xl font-black text-[#0a2a3d]">
                  Why Book With Velora Cabs
                </h2>
              </div>

              <ul className="space-y-3.5">
                {route.whyChoose.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#2d6180]">
                    <CheckCircle2 className="w-4 h-4 text-[#28A745] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Best For Trips */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#bde9ff] space-y-6">
              <div className="flex items-center gap-2.5">
                <Info className="w-6 h-6 text-[#0284c7]" />
                <h2 className="text-xl sm:text-2xl font-black text-[#0a2a3d]">
                  Recommended For
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {route.bestFor.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-[#EBF9FF] border border-[#bde9ff] text-xs sm:text-sm font-semibold text-[#0a2a3d]">
                    • {item}
                  </div>
                ))}
              </div>

              {route.notes && route.notes.length > 0 && (
                <div className="pt-4 border-t border-[#bde9ff] space-y-2">
                  <span className="text-xs font-bold text-[#0284c7] uppercase tracking-wider block">
                    Highway & Journey Notes:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#2d6180]">
                    {route.notes.map((note, idx) => (
                      <li key={idx}>— {note}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

          </div>
        </section>

        {/* Vehicle Options (Names only, no prices per Rule 3) */}
        <section className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#bde9ff] space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black text-[#0a2a3d]">
                Available Cabs for {route.from} to {route.to}
              </h2>
              <p className="text-xs sm:text-sm text-[#2d6180]">
                Clean, air-conditioned passenger vehicles with ample luggage boot space and commercial passenger permits.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SITE.vehicles.map((veh) => (
                <div
                  key={veh.id}
                  className="bg-[#EBF9FF]/60 rounded-2xl p-6 border border-[#bde9ff] flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-white text-[#0284c7] border border-[#bde9ff]">
                      {veh.type}
                    </span>
                    <h3 className="text-lg font-black text-[#0a2a3d]">
                      {veh.name}
                    </h3>
                    <p className="text-xs text-[#2d6180]">
                      Seating: Up to {veh.passengers} Passengers • Luggage: {veh.luggage} Bags • Full Climate Control AC
                    </p>
                  </div>

                  <div className="pt-2">
                    <Link
                      href={`/fleet/${veh.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0284c7] hover:underline"
                    >
                      <span>Inspect {veh.name} Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-2">
              <Link
                href="/fleet"
                className="text-xs sm:text-sm font-bold text-[#0a2a3d] hover:text-[#0284c7] underline"
              >
                View our complete fleet and vehicle luggage guides →
              </Link>
            </div>
          </div>
        </section>

        {/* Route FAQs (Semantic details/summary) */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-[#0a2a3d]">
              {route.from} to {route.to} Taxi FAQs
            </h2>
            <p className="text-xs sm:text-sm text-[#2d6180]">
              Frequently asked questions about travel between {route.from} and {route.to}.
            </p>
          </div>

          <div className="space-y-3">
            {route.faqs.map((faq, idx) => (
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
        </section>

        {/* Related Routes Links */}
        {relatedRoutes.length > 0 && (
          <section className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
            <h2 className="text-xl sm:text-2xl font-black text-[#0a2a3d]">
              Related Outstation Cab Routes
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedRoutes.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/taxi/${rel.slug}`}
                  className="p-4 rounded-2xl bg-white border border-[#bde9ff] hover:border-[#30AFFF] shadow-2xs hover:shadow-xs transition-all flex items-center justify-between text-xs sm:text-sm font-bold text-[#0a2a3d] hover:text-[#0284c7]"
                >
                  <span>{rel.from} to {rel.to} Taxi</span>
                  <ArrowRight className="w-4 h-4 text-[#0284c7]" />
                </Link>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-[#0284c7]">
              <Link href={`/cab-service/${originCitySlug}`} className="hover:underline">
                ← Explore all cab services in {route.from}
              </Link>
              <span>•</span>
              <Link href="/" className="hover:underline">
                Return to Velora Cabs Homepage
              </Link>
            </div>
          </section>
        )}

      </main>

      <Footer />
    </div>
  );
}
