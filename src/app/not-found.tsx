import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Home, Compass, MapPin, AlertCircle, MessageCircle, Phone } from 'lucide-react';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Page Not Found | Velora Cabs',
  description: 'The page you requested could not be found. Return to Velora Cabs home or connect with our 24x7 desk on WhatsApp.',
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#EBF9FF] flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 flex flex-col items-center justify-center text-center space-y-8">
        
        <div className="w-20 h-20 rounded-full bg-white border border-[#bde9ff] flex items-center justify-center text-[#30AFFF] shadow-xs">
          <AlertCircle className="w-10 h-10" />
        </div>

        <div className="space-y-3">
          <span className="text-sm font-bold text-[#0284c7] uppercase tracking-wider">
            404 Error
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#0B1F33]">
            Page Not Found
          </h1>
          <p className="text-sm sm:text-base text-[#2d6180] max-w-md mx-auto leading-relaxed">
            Sorry, the page you are looking for does not exist or has been moved. Here are some quick links to continue your journey:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-xl">
          <Link
            href="/"
            className="flex flex-col items-center gap-2 p-5 rounded-2xl bg-white border border-[#bde9ff] hover:border-[#30AFFF] shadow-xs hover:shadow-md transition-all text-[#0B1F33] font-bold text-sm"
          >
            <Home className="w-5 h-5 text-[#0284c7]" />
            <span>Go to Homepage</span>
          </Link>

          <Link
            href="/services/outstation-taxi"
            className="flex flex-col items-center gap-2 p-5 rounded-2xl bg-white border border-[#bde9ff] hover:border-[#30AFFF] shadow-xs hover:shadow-md transition-all text-[#0B1F33] font-bold text-sm"
          >
            <Compass className="w-5 h-5 text-[#0284c7]" />
            <span>Our Services</span>
          </Link>

          <Link
            href="/taxi-service/bhavnagar"
            className="flex flex-col items-center gap-2 p-5 rounded-2xl bg-white border border-[#bde9ff] hover:border-[#30AFFF] shadow-xs hover:shadow-md transition-all text-[#0B1F33] font-bold text-sm"
          >
            <MapPin className="w-5 h-5 text-[#0284c7]" />
            <span>Cities We Serve</span>
          </Link>
        </div>

        {/* WhatsApp & Call CTAs */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md">
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm bg-[#28A745] hover:bg-[#218838] text-white flex items-center justify-center gap-2 shadow-sm transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={`tel:${SITE.phone}`}
            className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm bg-white hover:bg-slate-50 border border-[#bde9ff] text-[#0B1F33] flex items-center justify-center gap-2 shadow-xs transition-all"
          >
            <Phone className="w-4 h-4 text-[#0284c7]" />
            <span>Call {SITE.phoneDisplay}</span>
          </a>
        </div>

      </main>
      <Footer />
    </div>
  );
}
