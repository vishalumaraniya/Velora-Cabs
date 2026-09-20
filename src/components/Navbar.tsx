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
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
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
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/90 p-1.5 rounded-full border border-[#bde9ff] shadow-xs backdrop-blur-md relative">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-4 py-1.5 text-xs rounded-full transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? 'text-white font-bold'
                      : 'font-medium text-[#2d6180] hover:text-[#071828]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeDesktopNav"
                      className="absolute inset-0 rounded-full bg-[#3DBE6B] border border-[#28A745]"
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
          <div className="hidden lg:flex items-center gap-2.5">
            {/* Direct Phone Call Button */}
            <a
              href={`tel:${BUSINESS_INFO.phones[0].raw}`}
              aria-label="Call Velora Cabs"
              className="flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold bg-white/90 hover:bg-white text-[#0a2a3d] border border-[#bde9ff] transition-all shadow-xs active:scale-95"
            >
              <Phone className="w-3.5 h-3.5 text-[#30AFFF]" />
              <span className="font-bold">{BUSINESS_INFO.phones[0].display}</span>
            </a>

            {/* WhatsApp Direct Chat */}
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                'Hello Velora Cabs, I would like to inquire about cab booking.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-[#28A745] text-white hover:bg-[#1e8c38] transition-all shadow-xs active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            {/* Book Button */}
            <a
              href="#inquiry"
              onClick={(e) => handleNavClick(e, '#inquiry')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-extrabold bg-[#0a2a3d] hover:bg-[#123952] text-white shadow-sm shadow-[#0a2a3d]/20 hover:shadow-md transition-all cursor-pointer active:scale-95"
            >
              <span>Book Ride</span>
              <ChevronRight className="w-4 h-4 text-[#92EEFF]" />
            </a>
          </div>

          {/* Mobile Hamburger / Close Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
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
                  const sectionId = link.href.substring(1);
                  const isActive = activeSection === sectionId;

                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`relative px-4 py-3.5 rounded-xl text-base font-semibold flex items-center justify-between border transition-colors cursor-pointer ${
                        isActive
                          ? 'text-white bg-[#3DBE6B] border-[#28A745] font-bold'
                          : 'text-[#2d6180] hover:text-[#0a2a3d] hover:bg-white border-[#bde9ff]'
                      }`}
                    >
                      <span className="relative z-10">{link.name}</span>
                      <ChevronRight className={`w-5 h-5 relative z-10 ${isActive ? 'text-white' : 'text-[#5c9ab8]'}`} />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-[#bde9ff]">
              <a
                href="#inquiry"
                onClick={(e) => handleNavClick(e, '#inquiry')}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#0a2a3d] hover:bg-[#123952] text-white font-bold text-sm shadow-md transition-all cursor-pointer active:scale-[0.98]"
              >
                <span>Book Ride</span>
                <ChevronRight className="w-4 h-4 text-[#92EEFF]" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
