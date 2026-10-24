import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { ROUTES, getRouteBySlug, getConfirmedRoutes } from '@/data/routes';
import { getCityBySlug } from '@/data/cities';
import { SITE } from '@/lib/site';
import { buildMetadata } from '@/lib/metadata';
import {
  MapPin,
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageCircle,
  Car,
  Clock,
  Navigation,
  ArrowRight,
  ArrowLeftRight,
  Info,
  Check,
  X,
} from 'lucide-react';

interface RoutePageProps {
  params: Promise<{ route: string }>;
}

// Anti-doorway: only generate static pages for confirmed routes
export async function generateStaticParams() {
  const confirmed = getConfirmedRoutes();
  return confirmed.map((r) => ({
    route: r.slug,
  }));
}

export async function generateMetadata({ params }: RoutePageProps): Promise<Metadata> {
  const { route: routeSlug } = await params;
  const route = getRouteBySlug(routeSlug);

  if (!route || !route.published || !route.serviceConfirmed) {
    return {
      title: 'Route Not Found | Velora Cabs',
      robots: { index: false, follow: false },
    };
  }

  return buildMetadata({
    title: route.metaTitle,
    description: route.metaDescription,
    path: `/routes/${route.slug}`,
  });
}

export default async function RouteDetailPage({ params }: RoutePageProps) {
  const { route: routeSlug } = await params;
  const route = getRouteBySlug(routeSlug);

  // Anti-doorway enforcement: unconfirmed or unpublished routes return 404
  if (!route || !route.published || !route.serviceConfirmed) {
    notFound();
  }

  const originCity = getCityBySlug(route.originCity);
  const destinationCity = getCityBySlug(route.destinationCity);
  const reverseRoute = route.reverseSlug ? getRouteBySlug(route.reverseSlug) : undefined;

  const whatsappMessage = encodeURIComponent(
    `Hello Velora Cabs, I want to book a taxi from ${route.from} to ${route.to}. Please provide availability and quote.`
  );
  const whatsappUrl = `https://wa.me/918780311279?text=${whatsappMessage}`;

  // Resolve related confirmed routes
  const resolvedRelatedRoutes = route.relatedRoutes
    .map((s) => getRouteBySlug(s))
    .filter((r): r is NonNullable<typeof r> => Boolean(r && r.published && r.serviceConfirmed));

  return (
    <>
      <Navbar />

      <div className="pt-16 sm:pt-20 bg-white border-b border-slate-100">
        <Breadcrumbs
          items={[
            { label: 'Routes', href: '/#routes' },
            { label: `${route.from} to ${route.to}`, href: `/routes/${route.slug}` },
          ]}
        />
      </div>

      <JsonLd
        type="service"
        serviceType="Taxi Service"
        path={`/routes/${route.slug}`}
      />
      <JsonLd
        type="faq"
        items={route.faqs.map((f) => ({
          q: f.q,
          a: f.a,
        }))}
      />

      <main className="min-h-screen bg-white">
        {/* HERO SECTION */}
        <section className="relative bg-gradient-to-br from-[#0B1F33] via-[#0e2a47] to-[#0B1F33] text-white py-14 sm:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#30AFFF_1px,transparent_1px)] [background-size:20px_20px] opacity-15" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-[#30AFFF]/15 border border-[#30AFFF]/30 px-3 py-1 rounded-full text-xs font-semibold text-[#30AFFF] mb-4">
                <Navigation className="w-3.5 h-3.5" />
                <span>One-Way & Round-Trip Outstation Route</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6">
                {route.h1}
              </h1>
              <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
                {route.metaDescription}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`tel:${SITE.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#0B1F33] hover:bg-slate-100 font-bold shadow-lg transition-all text-sm sm:text-base"
                >
                  <Phone className="w-4 h-4 text-[#30AFFF]" />
                  <span>Call {SITE.phoneDisplay}</span>
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold shadow-lg transition-all text-sm sm:text-base"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Request a Quote on WhatsApp</span>
                </a>
              </div>

              {/* Quick route facts pill */}
              <div className="mt-8 pt-6 border-t border-slate-700/60 flex flex-wrap items-center gap-6 text-xs text-slate-300">
                <span className="flex items-center gap-1.5">
                  <Navigation className="w-4 h-4 text-[#30AFFF]" /> Distance: {route.approxDistance}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#30AFFF]" /> Travel Time: {route.approxDuration}
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#30AFFF]" /> Verified Drivers
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO SECTION */}
        <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1F33] mb-6">
              About the {route.from} to {route.to} Highway Journey
            </h2>
            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-base sm:text-lg">
              <p>{route.intro}</p>
            </div>
          </div>
        </section>

        {/* ROUTE SUMMARY & FACTS */}
        <section className="py-12 sm:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1F33] mb-8">
              Key Route Facts & Travel Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-white border border-slate-200">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                  Driving Distance
                </span>
                <p className="text-base font-bold text-[#0B1F33]">
                  {route.approxDistance}
                </p>
                <p className="text-xs text-slate-500 mt-2">
                  Actual route distance varies depending on chosen highway entry/exit.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                  Typical Driving Time
                </span>
                <p className="text-base font-bold text-[#0B1F33]">
                  {route.approxDuration}
                </p>
                <p className="text-xs text-slate-500 mt-2">
                  Subject to city-entry traffic during morning and evening rush hours.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                  Trip Types Available
                </span>
                <p className="text-base font-bold text-[#0B1F33]">
                  One-Way Drop & Round-Trip
                </p>
                <p className="text-xs text-slate-500 mt-2">
                  Dedicated one-way pricing without return kilometers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* VEHICLE OPTIONS & TIPS */}
        <section className="py-12 sm:py-16 bg-slate-50 border-t border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1F33] mb-3">
                Vehicle Options for {route.from} to {route.to}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Choose the vehicle model that matches your luggage capacity, passenger count, and comfort preference.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {route.vehicleTips.map((v, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#0B1F33] mb-1">{v.model}</h3>
                    <div className="text-xs text-[#30AFFF] font-semibold mb-3">
                      {v.seats} · {v.luggage}
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      {v.bestFor}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-100">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-[#30AFFF] hover:underline inline-flex items-center gap-1"
                    >
                      Inquire for {v.model} on WhatsApp <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INCLUDED / EXCLUDED TRANSPARENCY */}
        <section className="py-12 sm:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1F33] mb-3">
                Fare Transparency: What is Included & Excluded
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                We believe in zero surprise roadside demands. Here is how our quote breakdown works:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200">
                <h3 className="font-bold text-emerald-900 text-base mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5 text-emerald-600" /> What is Included
                </h3>
                <ul className="space-y-2.5 text-sm text-emerald-950">
                  {route.includedExcluded.included.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-900 text-base mb-4 flex items-center gap-2">
                  <Info className="w-5 h-5 text-slate-600" /> What is Excluded / Payable as Actuals
                </h3>
                <ul className="space-y-2.5 text-sm text-slate-700">
                  {route.includedExcluded.excluded.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-slate-400 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PICKUP & DROP DETAILS */}
        <section className="py-12 sm:py-16 bg-slate-50 border-t border-b border-slate-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1F33] mb-6">
              Doorstep Pickup & Drop Details
            </h2>
            <div className="space-y-3">
              {route.pickupDropDetails.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-[#30AFFF] shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>

            {/* Reverse Route Callout if exists */}
            {reverseRoute && reverseRoute.published && reverseRoute.serviceConfirmed && (
              <div className="mt-8 p-5 rounded-2xl bg-white border border-[#30AFFF]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#30AFFF]/10 text-[#30AFFF] flex items-center justify-center shrink-0">
                    <ArrowLeftRight className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0B1F33] text-sm sm:text-base">
                      Need the return trip? {reverseRoute.from} to {reverseRoute.to} Taxi
                    </h3>
                    <p className="text-xs text-slate-500">
                      We offer dedicated reverse-direction outstation cabs with doorstep pickup.
                    </p>
                  </div>
                </div>
                <Link
                  href={`/routes/${reverseRoute.slug}`}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-[#30AFFF] text-white font-bold text-xs hover:bg-[#209be6] transition-colors shrink-0"
                >
                  <span>View Reverse Route</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* FAQS */}
        <section className="py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1F33] mb-8 text-center">
              Frequently Asked Questions: {route.from} to {route.to} Cab
            </h2>
            <div className="space-y-4">
              {route.faqs.map((faq, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200">
                  <h3 className="font-bold text-[#0B1F33] text-base mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RELATED ROUTES & CITY LINKS */}
        <section className="py-12 sm:py-16 bg-slate-50 border-t border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Related Routes */}
              {resolvedRelatedRoutes.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-[#0B1F33] mb-4">
                    Other Popular Outstation Routes
                  </h2>
                  <div className="space-y-2.5">
                    {resolvedRelatedRoutes.map((rel) => (
                      <Link
                        key={rel.slug}
                        href={`/routes/${rel.slug}`}
                        className="p-3.5 bg-white rounded-xl border border-slate-200 hover:border-[#30AFFF] transition-all flex items-center justify-between text-sm font-semibold text-[#0B1F33] hover:text-[#30AFFF]"
                      >
                        <span>{rel.from} to {rel.to} Taxi</span>
                        <ArrowRight className="w-4 h-4 text-slate-400" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* City Hub Links */}
              <div>
                <h2 className="text-xl font-bold text-[#0B1F33] mb-4">
                  City Taxi Hubs
                </h2>
                <div className="space-y-2.5">
                  {originCity && originCity.published && originCity.serviceConfirmed && (
                    <Link
                      href={`/taxi-service/${originCity.slug}`}
                      className="p-3.5 bg-white rounded-xl border border-slate-200 hover:border-[#30AFFF] transition-all flex items-center justify-between text-sm font-semibold text-[#0B1F33] hover:text-[#30AFFF]"
                    >
                      <span>Taxi Service in {originCity.name}</span>
                      <ArrowRight className="w-4 h-4 text-slate-400" />
                    </Link>
                  )}
                  {destinationCity && destinationCity.published && destinationCity.serviceConfirmed && (
                    <Link
                      href={`/taxi-service/${destinationCity.slug}`}
                      className="p-3.5 bg-white rounded-xl border border-slate-200 hover:border-[#30AFFF] transition-all flex items-center justify-between text-sm font-semibold text-[#0B1F33] hover:text-[#30AFFF]"
                    >
                      <span>Taxi Service in {destinationCity.name}</span>
                      <ArrowRight className="w-4 h-4 text-slate-400" />
                    </Link>
                  )}
                  <Link
                    href="/services/outstation-taxi"
                    className="p-3.5 bg-white rounded-xl border border-slate-200 hover:border-[#30AFFF] transition-all flex items-center justify-between text-sm font-semibold text-[#0B1F33] hover:text-[#30AFFF]"
                  >
                    <span>Gujarat Outstation Taxi Overview</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-14 sm:py-16 bg-[#0B1F33] text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
              Book Your {route.from} to {route.to} Taxi
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
              Get an instant route confirmation and fixed fare quote on WhatsApp before you travel.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`tel:${SITE.phone}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#0B1F33] hover:bg-slate-100 font-bold shadow-lg transition-all text-sm sm:text-base"
              >
                <Phone className="w-4 h-4 text-[#30AFFF]" />
                <span>Call {SITE.phoneDisplay}</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold shadow-lg transition-all text-sm sm:text-base"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Request a Quote on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
