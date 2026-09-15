'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, Menu, X, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';
import VeloraLogo from '@/components/VeloraLogo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
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

  // Section observer to detect which section is currently in view
  useEffect(() => {
    const sectionIds = ['home', 'services', 'why-us', 'testimonials', 'inquiry'];

    const observer = new IntersectionObserver(
      (entries) => {
        // Prevent scroll-spy from overriding the active tab during smooth scroll
        if (isClickScrollingRef.current) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-20% 0px -55% 0px',
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Book Cab', href: '#inquiry' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      
      // Lock scroll-spy updates so it slides smoothly to the clicked menu without bouncing through intermediate items
      isClickScrollingRef.current = true;
      setActiveSection(targetId);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      const handleScrollEnd = () => {
        isClickScrollingRef.current = false;
        window.removeEventListener('scrollend', handleScrollEnd);
      };
      window.addEventListener('scrollend', handleScrollEnd, { once: true });

      // Fallback timeout in case scrollend doesn't fire
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
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 border-b border-white/10 ${
          mobileMenuOpen
            ? 'bg-[#0b0b0e]'
            : scrolled
            ? 'bg-[#0b0b0e]/95 backdrop-blur-md shadow-2xl'
            : 'bg-[#0b0b0e]/80 backdrop-blur-md sm:bg-transparent'
        }`}
      >
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">

          {/* Brand Logo with Custom Animated SVG Draw */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="p-1 rounded-2xl neomorph-card flex items-center justify-center group-hover:scale-105 transition-transform">
              <VeloraLogo size={40} animated={true} />
            </div>
            <div className="flex flex-col gap-y-1">
              <span className="font-extrabold text-xl tracking-tight text-white flex items-center gap-1.5">
                VELORA <span className="text-[#F5B921]">CABS</span>
              </span>
              <span className="text-[10px] font-semibold tracking-wider text-gray-400 uppercase -mt-1">
                Safe Rides. On Time.
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links — highlighted border with smooth sliding active pill */}
          <nav className="hidden md:flex items-center gap-1 bg-[#14141a]/95 p-1.5 rounded-full border border-white/20 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.6)] relative">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-4 py-2 text-xs rounded-full transition-colors duration-200 cursor-pointer ${isActive
                    ? 'text-[#F5B921] font-bold'
                    : 'font-semibold text-gray-300 hover:text-white'
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeDesktopNav"
                      className="absolute inset-0 rounded-full bg-[#F5B921]/15 border border-[#F5B921]/40 shadow-sm"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Contact Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Direct Phone Call Button */}
            <a
              href={`tel:${BUSINESS_INFO.phones[0].raw}`}
              aria-label="Call Velora Cabs"
              className="flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold bg-[#06B6D4] text-black hover:bg-[#22d3ee] transition-all shadow-md active:scale-95"
            >
              <Phone className="w-4 h-4 fill-current text-black" />
              <span className="font-extrabold text-black">{BUSINESS_INFO.phones[0].display}</span>
            </a>

            {/* WhatsApp Direct Chat */}
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                'Hello Velora Cabs, I would like to inquire about cab booking.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-[#25D366] text-black hover:bg-[#20bd5a] transition-all shadow-md active:scale-95"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
            </a>

            {/* Call to Action Book Button */}
            <a
              href="#inquiry"
              onClick={(e) => handleNavClick(e, '#inquiry')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-extrabold cursor-pointer transition-all ${activeSection === 'inquiry'
                ? 'neomorph-button-gold scale-105 ring-2 ring-[#F5B921]/50'
                : 'neomorph-button-gold'
                }`}
            >
              <span>Book Ride</span>
              <ChevronRight className="w-4 h-4 text-amber-950" />
            </a>
          </div>

          {/* Mobile Hamburger / Close Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl text-gray-300 neomorph-button-dark border border-white/15"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#F5B921]" /> : <Menu className="w-5 h-5 text-[#F5B921]" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu — Hardware-Accelerated Smooth Slide & Fade Transition */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="md:hidden fixed inset-x-0 top-16 bottom-0 bg-[#0b0b0e] z-40 overflow-y-auto overscroll-contain px-6 pt-5 pb-20 flex flex-col justify-between shadow-2xl will-change-transform"
          >
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-2.5 pt-2">
                {navLinks.map((link) => {
                  const sectionId = link.href.substring(1);
                  const isActive = activeSection === sectionId;

                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`relative px-4 py-3.5 rounded-xl text-base font-semibold flex items-center justify-between border transition-colors cursor-pointer overflow-hidden ${isActive
                        ? 'text-[#F5B921] border-[#F5B921]/40'
                        : 'text-gray-200 hover:text-white hover:bg-[#181820] border-white/5'
                        }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeMobileNav"
                          className="absolute inset-0 bg-[#F5B921]/15 shadow-sm"
                          transition={{
                            type: 'spring',
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                      <span className="relative z-10">{link.name}</span>
                      <ChevronRight className={`w-5 h-5 relative z-10 transition-colors ${isActive ? 'text-[#F5B921]' : 'text-gray-500'}`} />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phones[0].raw}`}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#06B6D4] text-black font-bold text-sm shadow-lg hover:bg-[#22d3ee] transition-all active:scale-[0.98]"
              >
                <Phone className="w-4 h-4 fill-current text-black" />
                <span>Call {BUSINESS_INFO.phones[0].display}</span>
              </a>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                  'Hello Velora Cabs, I want to book a ride.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#25D366] text-black font-bold text-sm shadow-lg active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>WhatsApp Booking</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
