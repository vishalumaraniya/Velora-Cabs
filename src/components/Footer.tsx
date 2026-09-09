'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, MessageCircle, ChevronRight, Navigation } from 'lucide-react';
import { BUSINESS_INFO, POPULAR_ROUTES, SERVICES } from '@/lib/constants';
import VeloraLogo from '@/components/VeloraLogo';

export default function Footer() {
  const handleSelectRouteFromFooter = (route: typeof POPULAR_ROUTES[0]) => {
    const formElement = document.getElementById('inquiry');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
      const event = new CustomEvent('select-route', {
        detail: {
          pickup: route.origin,
          drop: route.destination,
        },
      });
      window.dispatchEvent(event);
    }
  };

  return (
    <footer className="bg-[#09090c] text-gray-400 border-t border-white/10 relative overflow-hidden">
      
      {/* Top Footer Callout Banner */}
      <div className="bg-[#0b0b0e] border-b border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="neomorph-card neomorph-card-amber p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-2xl neomorph-inset shrink-0 hidden sm:block">
                <VeloraLogo size={46} animated={true} />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-white">Need an Urgent Cab Dispatch?</h3>
                <p className="text-sm text-gray-300 mt-1">
                  Call Dharmeshbhai directly for immediate cab assignment within 5 minutes.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
              <a
                href={`tel:${BUSINESS_INFO.phones[0].raw}`}
                className="flex-1 md:flex-initial px-6 py-3.5 rounded-xl font-extrabold text-xs neomorph-button-gold flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-950" />
                <span>Call {BUSINESS_INFO.phones[0].display}</span>
              </a>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                  'Hello Velora Cabs, I need an urgent cab.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 md:flex-initial px-6 py-3.5 rounded-xl font-bold text-xs bg-[#25D366] text-black hover:bg-[#20bd5a] flex items-center justify-center gap-2 shadow-md"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>WhatsApp Booking</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <VeloraLogo size={40} animated={false} />
              <span className="font-extrabold text-xl tracking-tight text-white">
                VELORA <span className="text-[#F5B921]">CABS</span>
              </span>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              &ldquo;{BUSINESS_INFO.tagline}&rdquo; — Premier cab and outstation taxi service based in Gujarat, specializing in local rides, airport transfers, and pan-India long distance journeys.
            </p>

            <div className="pt-2 space-y-2 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <span className="text-gray-400">Owner & Manager:</span>
                <strong className="text-white">{BUSINESS_INFO.contactPerson}</strong>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#F5B921]" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-[#F5B921]">
                  {BUSINESS_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#F5B921]" />
                <span>{BUSINESS_INFO.address}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Services', href: '#services' },
                { name: 'Why Us', href: '#why-us' },
                { name: 'Testimonials', href: '#testimonials' },
                { name: 'Book Cab', href: '#inquiry' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-[#F5B921] flex items-center gap-1 transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 text-[#F5B921]" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.map((srv) => (
                <li key={srv.id}>
                  <Link href="#services" className="hover:text-[#F5B921] flex items-center gap-1 transition-colors">
                    <ChevronRight className="w-3 h-3 text-[#F5B921]" />
                    <span>{srv.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Popular Routes for SEO Google Indexing */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Popular Taxi Routes (SEO)
            </h4>
            <ul className="space-y-2 text-xs">
              {POPULAR_ROUTES.map((rt) => (
                <li key={rt.id}>
                  <button
                    type="button"
                    onClick={() => handleSelectRouteFromFooter(rt)}
                    className="hover:text-[#F5B921] flex items-center gap-1 transition-colors text-left"
                  >
                    <Navigation className="w-3 h-3 text-[#F5B921] shrink-0" />
                    <span>{rt.origin} to {rt.destination} Taxi</span>
                  </button>
                </li>
              ))}
              <li>
                <a href="#inquiry" className="hover:text-[#F5B921] flex items-center gap-1 transition-colors">
                  <ChevronRight className="w-3 h-3 text-[#F5B921]" />
                  <span>Ahmedabad Airport Drop</span>
                </a>
              </li>
              <li>
                <a href="#inquiry" className="hover:text-[#F5B921] flex items-center gap-1 transition-colors">
                  <ChevronRight className="w-3 h-3 text-[#F5B921]" />
                  <span>Somnath & Dwarka Pilgrimage</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* SEO Route Keywords Paragraph for Search Engines */}
        <div className="mt-12 pt-6 border-t border-white/5 text-[11px] text-gray-500 leading-relaxed">
          <p>
            <strong className="text-gray-400">Top Taxi Searches: </strong>
            Bhavnagar to Surat Cab Service | Baroda to Ahmedabad Taxi | Bhavnagar to Mumbai Outstation Cab | Ahmedabad Airport Transfer | Surat Airport Pickup | Somnath Pilgrimage Cab | Dwarka Tour Taxi | Gujarat Outstation Taxi Service | Maruti Suzuki Dzire Booking | Dharmeshbhai Kava Velora Cabs.
          </p>
        </div>

        {/* Bottom Bar Copyright */}
        <div className="mt-6 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} Velora Cabs. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with care for Velora Cabs •</span>
            <span className="text-gray-400">Safe Rides Guaranteed</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
