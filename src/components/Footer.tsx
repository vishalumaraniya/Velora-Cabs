'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import InstagramIcon from '@/components/InstagramIcon';
import { SITE } from '@/data/site';
import { CITIES } from '@/data/cities';
import { ROUTES } from '@/data/routes';
import VeloraLogo from '@/components/VeloraLogo';
import { trackEvent } from '@/lib/analytics';

export default function Footer() {
  const topRoutes = ROUTES.slice(0, 8);

  return (
    <footer className="bg-[#071828] text-[#5c9ab8] border-t border-[#1a3a52] pt-12 pb-24 sm:pb-12 text-sm">
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          
          {/* Col 1: Brand & NAP */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-[#0d2236] border border-[#1a3a52]">
                <VeloraLogo size={26} animated={false} />
              </div>
              <div>
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-white block">
                  VELORA <span className="text-[#30AFFF]">CABS</span>
                </span>
                <span className="text-xs text-[#92EEFF] block font-medium">
                  {SITE.tagline}
                </span>
              </div>
            </div>

            <p className="text-xs text-[#8ab9d1] leading-relaxed max-w-sm">
              Your dependable 24x7 taxi partner headquartered in Bhavnagar, serving all major business hubs, airports, and spiritual destinations across Gujarat and to Mumbai. Doorstep pickup with verified professional drivers.
            </p>

            {/* NAP Block */}
            <div className="space-y-2 text-xs pt-2 border-t border-[#132c42]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#30AFFF] shrink-0 mt-0.5" />
                <span>
                  <strong>Headquarters:</strong> {SITE.address.addressLocality}, {SITE.address.addressRegion}, India
                  <span className="block text-[11px] text-[#5c9ab8]/80">({SITE.address.streetAddress})</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#30AFFF] shrink-0" />
                <a
                  href={`tel:${SITE.phoneFormatted}`}
                  onClick={() => trackEvent('call_click', { location: 'footer' })}
                  className="text-white hover:text-[#30AFFF] font-semibold transition-colors"
                >
                  {SITE.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#30AFFF] shrink-0" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="hover:text-[#30AFFF] transition-colors"
                >
                  {SITE.email}
                </a>
              </div>
            </div>

            {/* Social Follow */}
            <div className="pt-2 flex items-center gap-3">
              <span className="text-xs text-white/80 font-medium">Follow us:</span>
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer me"
                aria-label="Velora Cabs on Instagram"
                onClick={() => trackEvent('instagram_click', { location: 'footer' })}
                className="w-8 h-8 rounded-lg bg-[#0d2236] border border-[#1a3a52] flex items-center justify-center text-[#92EEFF] hover:text-white hover:border-[#30AFFF] transition-all"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
              Taxi Services
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/airport-taxi" className="hover:text-[#92EEFF] transition-colors">
                  Airport Transfers
                </Link>
              </li>
              <li>
                <Link href="/outstation-taxi" className="hover:text-[#92EEFF] transition-colors">
                  Outstation One-Way & Return
                </Link>
              </li>
              <li>
                <Link href="/local-city-rides" className="hover:text-[#92EEFF] transition-colors">
                  Local City Rides
                </Link>
              </li>
              <li>
                <Link href="/taxi-24x7" className="hover:text-[#92EEFF] transition-colors">
                  24x7 Emergency Cabs
                </Link>
              </li>
              <li>
                <Link href="/fleet" className="hover:text-[#92EEFF] transition-colors">
                  Our Fleet (Dzire, Ertiga, Traveller)
                </Link>
              </li>
              <li>
                <Link href="/taxi" className="hover:text-[#92EEFF] transition-colors font-semibold text-[#30AFFF]">
                  View All Outstation Routes →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Top Routes */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
              Top Routes
            </h3>
            <ul className="space-y-2 text-xs">
              {topRoutes.map((route) => (
                <li key={route.slug}>
                  <Link
                    href={`/taxi/${route.slug}`}
                    className="hover:text-[#92EEFF] transition-colors block truncate"
                    title={`${route.from} to ${route.to} Taxi`}
                  >
                    {route.from} to {route.to}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/taxi" className="text-[#30AFFF] hover:underline font-semibold block pt-1">
                  More Routes (+15) →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Links & Legal */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
              Company & Legal
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="hover:text-[#92EEFF] transition-colors">
                  About Velora Cabs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#92EEFF] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#92EEFF] transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#92EEFF] transition-colors">
                  Travel Blog & Guides
                </Link>
              </li>
              <li className="pt-2 border-t border-[#132c42]">
                <Link href="/privacy-policy" className="hover:text-[#92EEFF] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#92EEFF] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cancellation-policy" className="hover:text-[#92EEFF] transition-colors">
                  Cancellation & Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Cities We Serve Strip */}
        <div className="pt-6 border-t border-[#132c42] space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-white uppercase tracking-wider">
              Cab Service in Gujarat & Mumbai (14 Cities):
            </span>
            <Link href="/cab-service" className="text-xs text-[#30AFFF] hover:underline font-semibold">
              View All Cities →
            </Link>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs">
            {CITIES.map((city, idx) => (
              <React.Fragment key={city.slug}>
                <Link
                  href={`/cab-service/${city.slug}`}
                  className="hover:text-[#92EEFF] transition-colors"
                >
                  {city.name} Taxi
                </Link>
                {idx < CITIES.length - 1 && <span className="text-[#1a3a52]">•</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#132c42] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5c9ab8]">
          <p>© {new Date().getFullYear()} Velora Cabs. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${SITE.phoneFormatted}`}
              onClick={() => trackEvent('call_click', { location: 'footer' })}
              className="text-[#92EEFF] hover:text-white transition-colors"
            >
              Call: {SITE.phone}
            </a>
            <span>•</span>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('whatsapp_click', { location: 'footer' })}
              className="text-[#28A745] hover:underline font-semibold"
            >
              WhatsApp Support
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
