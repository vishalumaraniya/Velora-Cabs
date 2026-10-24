import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { CITIES, getCityBySlug, getConfirmedCities } from '@/data/cities';
import { getRouteBySlug } from '@/data/routes';
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
  ChevronDown,
  ArrowRight,
  Users,
  Briefcase,
} from 'lucide-react';

interface CityPageProps {
  params: Promise<{ city: string }>;
}

// Anti-doorway: only generate static pages for confirmed cities
export async function generateStaticParams() {
  const confirmed = getConfirmedCities();
  return confirmed.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);

  if (!city || !city.published || !city.serviceConfirmed) {
    return {
      title: 'City Taxi Service Not Available | Velora Cabs',
      robots: { index: false, follow: false },
    };
  }

  return buildMetadata({
    title: city.metaTitle,
    description: city.metaDescription,
    path: `/taxi-service/${city.slug}`,
  });
}

export default async function CityDetailPage({ params }: CityPageProps) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);

  // Anti-doorway enforcement: unconfirmed or unpublished pages return 404
  if (!city || !city.published || !city.serviceConfirmed) {
    notFound();
  }

  const whatsappMessage = encodeURIComponent(
    `Hello Velora Cabs, I would like to request a quote for a taxi in ${city.name}.`
  );
  const whatsappUrl = `https://wa.me/918780311279?text=${whatsappMessage}`;

  // Resolve top routes
  const resolvedRoutes = city.topRoutes
    .map((slug) => getRouteBySlug(slug))
    .filter((r): r is NonNullable<typeof r> => Boolean(r && r.published && r.serviceConfirmed));

  // Resolve nearest cities (only confirmed ones)
  const resolvedNearestCities = city.nearestCities
    .map((slug) => getCityBySlug(slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c && c.published && c.serviceConfirmed));

  return (
    <>
      <Navbar />

      <div className="pt-16 sm:pt-20 bg-white border-b border-slate-100">
        <Breadcrumbs
          items={[
            { label: 'Taxi Service', href: '/#cities' },
            { label: city.name, href: `/taxi-service/${city.slug}` },
          ]}
        />
      </div>

      <JsonLd
        type="service"
        serviceType="Taxi Service"
        path={`/taxi-service/${city.slug}`}
        areaServed={[city.name]}
      />
      <JsonLd
        type="faq"
        items={city.faqs.map((f) => ({
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
                <MapPin className="w-3.5 h-3.5" />
                <span>{city.name}, Gujarat</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6">
                {city.h1}
              </h1>
              <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
                {city.metaDescription}
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

              {/* Trust badges */}
              <div className="mt-8 pt-6 border-t border-slate-700/60 flex flex-wrap items-center gap-6 text-xs text-slate-300">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#30AFFF]" /> Verified Drivers
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#30AFFF]" /> On-Time Pickup Focus
                </span>
                <span className="flex items-center gap-1.5">
                  <Car className="w-4 h-4 text-[#30AFFF]" /> Clean AC Cabs
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO SECTION */}
        <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1F33] mb-6">
              Dependable Chauffeur & Taxi Service in {city.name}
            </h2>
            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4 text-base sm:text-lg">
              <p>{city.intro}</p>
            </div>
          </div>
        </section>

        {/* SERVICES IN CITY */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1F33] mb-4">
                Cab & Taxi Services in {city.name}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Tailored ground transportation options for personal travel, corporate transfers, and family pilgrimages.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[#30AFFF]/10 text-[#30AFFF] flex items-center justify-center mb-4">
                  <Car className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0B1F33] mb-2">Outstation Taxi Service</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Reliable one-way drops and round-trip outstation cabs connecting {city.name} with major cities across Gujarat and Mumbai.
                </p>
                <Link
                  href="/services/outstation-taxi"
                  className="text-sm font-semibold text-[#30AFFF] hover:underline inline-flex items-center gap-1"
                >
                  Learn about outstation cabs <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[#30AFFF]/10 text-[#30AFFF] flex items-center justify-center mb-4">
                  <Navigation className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0B1F33] mb-2">Airport & Railway Transfers</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Scheduled pickups and drop-offs to airport terminals and railway junctions with luggage assistance and flight-time monitoring.
                </p>
                <Link
                  href="/services/airport-taxi-transfer"
                  className="text-sm font-semibold text-[#30AFFF] hover:underline inline-flex items-center gap-1"
                >
                  Explore airport transfers <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[#30AFFF]/10 text-[#30AFFF] flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0B1F33] mb-2">Local City & Hourly Rental</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Flexible hourly cab packages for city errands, business meetings, medical appointments, and local sightseeing in {city.name}.
                </p>
                <Link
                  href="/services/local-city-cab"
                  className="text-sm font-semibold text-[#30AFFF] hover:underline inline-flex items-center gap-1"
                >
                  View hourly city cabs <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* POPULAR ROUTES FROM THIS CITY */}
        {resolvedRoutes.length > 0 && (
          <section className="py-12 sm:py-16 bg-slate-50 border-t border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1F33] mb-3">
                  Popular Taxi Routes from {city.name}
                </h2>
                <p className="text-slate-600 text-sm sm:text-base">
                  Direct outstation taxi corridors with transparent quotes and verified commercial drivers.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {resolvedRoutes.map((route) => (
                  <Link
                    key={route.slug}
                    href={`/routes/${route.slug}`}
                    className="group p-5 bg-white rounded-xl border border-slate-200 hover:border-[#30AFFF] hover:shadow-md transition-all flex items-center justify-between"
                  >
                    <div>
                      <h3 className="font-bold text-[#0B1F33] group-hover:text-[#30AFFF] transition-colors text-base">
                        {route.from} to {route.to} Taxi
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        {route.approxDuration}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#30AFFF] transition-colors shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* VEHICLES AVAILABLE */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1F33] mb-3">
                Fleet Options Available in {city.name}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Clean, climate-controlled vehicles suited for individual business trips, family tours, and group pilgrimages.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200">
                <h3 className="text-xl font-bold text-[#0B1F33] mb-1">Maruti Swift Dzire</h3>
                <span className="inline-block text-xs font-semibold text-[#30AFFF] uppercase tracking-wider mb-4">
                  Sedan · Up to 4 Passengers
                </span>
                <p className="text-sm text-slate-600 mb-4">
                  Compact and fuel-efficient with excellent boot space for 2 standard suitcases. Ideal for airport runs, corporate meetings, and couples.
                </p>
                <div className="text-xs text-slate-500 space-y-1">
                  <div>✓ Fully Air-Conditioned</div>
                  <div>✓ Clean & Sanitized Interiors</div>
                  <div>✓ Fixed Route Quotes</div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#30AFFF] shadow-sm relative">
                <div className="absolute -top-3 right-6 bg-[#30AFFF] text-white text-[11px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
                  Popular
                </div>
                <h3 className="text-xl font-bold text-[#0B1F33] mb-1">Maruti Suzuki Ertiga</h3>
                <span className="inline-block text-xs font-semibold text-[#30AFFF] uppercase tracking-wider mb-4">
                  MUV/SUV · Up to 6 Passengers
                </span>
                <p className="text-sm text-slate-600 mb-4">
                  Spacious family vehicle with flexible seating and enhanced luggage capacity for up to 4 check-in bags. Perfect for highway comfort.
                </p>
                <div className="text-xs text-slate-500 space-y-1">
                  <div>✓ Elevated Seating Posture</div>
                  <div>✓ High Luggage Capacity</div>
                  <div>✓ Dual AC Comfort</div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200">
                <h3 className="text-xl font-bold text-[#0B1F33] mb-1">Tempo Traveller</h3>
                <span className="inline-block text-xs font-semibold text-[#30AFFF] uppercase tracking-wider mb-4">
                  Mini Bus · 12 to 17 Seats
                </span>
                <p className="text-sm text-slate-600 mb-4">
                  Chauffeured mini bus designed for extended family sanghs, temple pilgrimage groups, and corporate team events.
                </p>
                <div className="text-xs text-slate-500 space-y-1">
                  <div>✓ Push-back Seats</div>
                  <div>✓ High-Capacity Luggage Hold</div>
                  <div>✓ Experienced Hill Chauffeur</div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link
                href="/fleet"
                className="text-sm font-semibold text-[#30AFFF] hover:underline inline-flex items-center gap-1.5"
              >
                View full fleet specifications <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* LOCAL LANDMARKS & PICKUP AREAS */}
        <section className="py-12 sm:py-16 bg-slate-50 border-t border-b border-slate-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1F33] mb-4">
              Local Landmarks & Key Pickup Hubs in {city.name}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mb-6">
              Our drivers are familiar with key transit points, industrial zones, and residential sectors across {city.name}:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
              {city.localHooks.map((hook, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#30AFFF] shrink-0 mt-0.5" />
                  <span>{hook}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* WHY BOOK WITH VELORA */}
        <section className="py-12 sm:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1F33] mb-8 text-center">
              Why Choose Velora Cabs in {city.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#30AFFF]/10 text-[#30AFFF] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0B1F33] text-base mb-1">Verified & Professional Drivers</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Our drivers hold commercial licenses and extensive highway experience across Gujarat.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#30AFFF]/10 text-[#30AFFF] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0B1F33] text-base mb-1">On-Time Pickup Focus</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    We plan departures with realistic traffic buffers so you never miss a flight or business meeting.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#30AFFF]/10 text-[#30AFFF] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0B1F33] text-base mb-1">Transparent WhatsApp Quotes</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Clear upfront pricing agreed before departure with zero roadside surcharge surprises.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#30AFFF]/10 text-[#30AFFF] flex items-center justify-center shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0B1F33] text-base mb-1">Corporate Invoicing Support</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    We provide formal receipts and commercial invoices suitable for business travel claims.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQS */}
        <section className="py-12 sm:py-16 bg-slate-50 border-t border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1F33] mb-8 text-center">
              Frequently Asked Questions: {city.name} Taxi Service
            </h2>
            <div className="space-y-4">
              {city.faqs.map((faq, idx) => (
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

        {/* NEARBY CITIES INTERNAL LINKS */}
        {resolvedNearestCities.length > 0 && (
          <section className="py-12 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F33] mb-6">
                Explore Taxi Service in Nearby Cities
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {resolvedNearestCities.map((nc) => (
                  <Link
                    key={nc.slug}
                    href={`/taxi-service/${nc.slug}`}
                    className="p-4 rounded-xl border border-slate-200 hover:border-[#30AFFF] hover:bg-slate-50 transition-all font-semibold text-sm text-[#0B1F33] flex items-center justify-between"
                  >
                    <span>Taxi in {nc.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FINAL CTA */}
        <section className="py-14 sm:py-16 bg-[#0B1F33] text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
              Book Your Cab in {city.name} Today
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
              Contact our team via call or WhatsApp for instant route confirmation and a transparent fixed quote.
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
