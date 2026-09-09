'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, Menu, X, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';
import VeloraLogo from '@/components/VeloraLogo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Book Cab', href: '#inquiry' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0b0b0e]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo with Custom Animated SVG Draw */}
        <Link href="#home" className="flex items-center gap-3 group">
          <div className="p-1 rounded-2xl neomorph-card flex items-center justify-center group-hover:scale-105 transition-transform">
            <VeloraLogo size={42} animated={true} />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-xl tracking-tight text-white flex items-center gap-1.5">
              VELORA <span className="text-[#F5B921]">CABS</span>
            </span>
            <span className="text-[10px] font-semibold tracking-wider text-gray-400 uppercase -mt-1">
              Safe Rides. On Time.
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#14141a]/90 p-1.5 rounded-full border border-white/5 backdrop-blur-md shadow-inner">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-xs font-semibold text-gray-300 hover:text-[#F5B921] hover:bg-white/5 rounded-full transition-all"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Contact Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Direct Phone Call Button */}
          <a
            href={`tel:${BUSINESS_INFO.phones[0].raw}`}
            aria-label="Call Velora Cabs"
            className="flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold neomorph-button-dark"
          >
            <Phone className="w-4 h-4 text-[#06B6D4]" />
            <span>{BUSINESS_INFO.phones[0].display}</span>
          </a>

          {/* WhatsApp Direct Chat */}
          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
              'Hello Velora Cabs, I would like to inquire about cab booking.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366] hover:text-black transition-all shadow-md"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
          </a>

          {/* Call to Action Book Button */}
          <a
            href="#inquiry"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-extrabold neomorph-button-gold"
          >
            <span>Book Ride</span>
            <ChevronRight className="w-4 h-4 text-amber-950" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          className="md:hidden p-2.5 rounded-xl text-gray-300 neomorph-button-dark"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#F5B921]" /> : <Menu className="w-6 h-6 text-[#F5B921]" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[70px] bg-[#0b0b0e]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl transition-all animate-in fade-in slide-in-from-top-4">
          <div className="px-6 pt-4 pb-8 space-y-4">
            <div className="grid grid-cols-1 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-medium text-gray-200 hover:text-[#F5B921] hover:bg-[#181820] flex items-center justify-between border border-white/5"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-gray-500" />
                </Link>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phones[0].raw}`}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl neomorph-button-dark font-semibold text-gray-200 text-xs"
              >
                <Phone className="w-4 h-4 text-[#F5B921]" />
                <span>Call {BUSINESS_INFO.phones[0].display}</span>
              </a>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                  'Hello Velora Cabs, I want to book a ride.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-black font-bold text-xs shadow-lg"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>WhatsApp Booking</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
