'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, Menu, X, ChevronRight } from 'lucide-react';
import { SITE } from '@/data/site';
import VeloraLogo from '@/components/VeloraLogo';
import { trackEvent } from '@/lib/analytics';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const isClickScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Freeze background scroll on mobile/desktop when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services/outstation-taxi' },
    { name: 'Routes', href: '/routes' },
    { name: 'Cities', href: '/cities' },
    { name: 'Fleet', href: '/fleet' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isLinkActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    if (href === '/services/outstation-taxi') {
      return pathname.startsWith('/services');
    }
    if (href === '/routes') {
      return pathname === '/routes' || pathname.startsWith('/routes/');
    }
    if (href === '/cities') {
      return pathname === '/cities' || pathname.startsWith('/taxi-service/');
    }
    if (href === '/fleet') {
      return pathname === '/fleet' || pathname.startsWith('/fleet/');
    }
    return pathname === href;
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#') && isHomePage) {
      e.preventDefault();
      const targetId = href.substring(1);
      isClickScrollingRef.current = true;

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      const handleScrollEnd = () => {
        isClickScrollingRef.current = false;
        window.removeEventListener('scrollend', handleScrollEnd);
      };
      window.addEventListener('scrollend', handleScrollEnd, { once: true });

      scrollTimeoutRef.current = setTimeout(() => {
        isClickScrollingRef.current = false;
        window.removeEventListener('scrollend', handleScrollEnd);
      }, 1000);

      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const headerOffset = 72;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });

        window.history.pushState(null, '', href);
      }
    }
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          mobileMenuOpen
            ? 'bg-[#EBF9FF] border-b border-[#bde9ff] shadow-lg'
            : scrolled
            ? 'bg-[#EBF9FF]/95 backdrop-blur-md border-b border-[#bde9ff] shadow-xs'
            : 'bg-transparent border-b border-[#bde9ff]/30'
        }`}
      >
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="p-1 rounded-2xl bg-white/95 backdrop-blur-md border border-[#bde9ff] flex items-center justify-center group-hover:scale-105 transition-transform shadow-xs">
              <VeloraLogo size={46} animated={false} />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-[#0a2a3d] flex items-center gap-1.5">
                VELORA <span className="text-[#30AFFF]">CABS</span>
              </span>
              <span className="text-[10px] font-semibold tracking-wider text-[#2d6180] uppercase -mt-0.5">
                Safe Rides. On Time.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-1 bg-white/90 p-1.5 rounded-full border border-[#bde9ff] shadow-xs backdrop-blur-md relative">
            {navLinks.map((link) => {
              const isActive = isLinkActive(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-4 py-1.5 text-xs rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-white font-bold bg-[#0284c7] shadow-xs'
                      : 'font-medium text-[#2d6180] hover:text-[#071828] hover:bg-[#bde9ff]/30'
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Contact Action Buttons */}
          <div className="hidden lg:flex items-center gap-2.5">
            {/* Direct Phone Call Button */}
            <a
              href={`tel:${SITE.phoneFormatted}`}
              aria-label="Call Velora Cabs"
              onClick={() => trackEvent('call_click', { location: 'header' })}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold bg-white/90 hover:bg-white text-[#0a2a3d] border border-[#bde9ff] transition-all shadow-xs active:scale-95"
            >
              <Phone className="w-3.5 h-3.5 text-[#30AFFF]" />
              <span className="font-bold">{SITE.phone}</span>
            </a>

            {/* WhatsApp Direct Chat */}
            <a
              href={`${SITE.whatsapp}?text=${encodeURIComponent(
                'Hello Velora Cabs, I would like to inquire about cab booking.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              onClick={() => trackEvent('whatsapp_click', { location: 'header' })}
              className="flex items-center justify-center w-9 h-9 rounded-full bg-[#28A745] text-white hover:bg-[#1e8c38] transition-all shadow-xs active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            {/* Book Button */}
            <Link
              href={isHomePage ? '#inquiry' : '/#inquiry'}
              onClick={(e) => handleNavClick(e, '#inquiry')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-extrabold bg-[#0a2a3d] hover:bg-[#123952] text-white shadow-sm shadow-[#0a2a3d]/20 hover:shadow-md transition-all cursor-pointer active:scale-95"
            >
              <span>Book Ride</span>
              <ChevronRight className="w-4 h-4 text-[#92EEFF]" />
            </Link>
          </div>

          {/* Mobile Hamburger / Close Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl text-[#0a2a3d] bg-white/90 border border-[#bde9ff] hover:bg-white shadow-xs"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#0a2a3d]" /> : <Menu className="w-5 h-5 text-[#0a2a3d]" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="md:hidden fixed inset-x-0 top-16 bottom-0 bg-[#EBF9FF] z-40 overflow-y-auto overscroll-contain px-6 pt-5 pb-20 flex flex-col justify-between shadow-2xl"
          >
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-2 pt-2">
                {navLinks.map((link) => {
                  const isActive = isLinkActive(link.href);

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`relative px-4 py-3.5 rounded-xl text-base font-semibold flex items-center justify-between border transition-colors cursor-pointer ${
                        isActive
                          ? 'text-white bg-[#0284c7] border-[#0284c7] font-bold'
                          : 'text-[#2d6180] hover:text-[#0a2a3d] hover:bg-white border-[#bde9ff]'
                      }`}
                    >
                      <span className="relative z-10">{link.name}</span>
                      <ChevronRight className={`w-5 h-5 relative z-10 ${isActive ? 'text-white' : 'text-[#5c9ab8]'}`} />
                    </Link>
                  );
                })}
              </div>

              {/* Mobile Quick Contact info */}
              <div className="pt-4 border-t border-[#bde9ff] space-y-3">
                <a
                  href={`tel:${SITE.phoneFormatted}`}
                  onClick={() => trackEvent('call_click', { location: 'header' })}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#bde9ff] text-[#0a2a3d] font-bold text-sm"
                >
                  <Phone className="w-4 h-4 text-[#30AFFF]" />
                  <span>Call {SITE.phone}</span>
                </a>
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('whatsapp_click', { location: 'header' })}
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#28A745] text-white font-bold text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-[#bde9ff]">
              <Link
                href={isHomePage ? '#inquiry' : '/#inquiry'}
                onClick={(e) => handleNavClick(e, '#inquiry')}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#0a2a3d] hover:bg-[#123952] text-white font-bold text-sm shadow-md transition-all cursor-pointer active:scale-[0.98]"
              >
                <span>Book Ride</span>
                <ChevronRight className="w-4 h-4 text-[#92EEFF]" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
