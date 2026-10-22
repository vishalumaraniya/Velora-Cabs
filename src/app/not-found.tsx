import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Home, Navigation, MapPin, AlertCircle } from 'lucide-react';
import { SITE } from '@/data/site';

export const metadata = {
  title: 'Page Not Found',
  description: 'The page you requested could not be found. Navigate back to Velora Cabs homepage or browse our taxi routes and cities.',
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
          <h1 className="text-3xl sm:text-5xl font-black text-[#0a2a3d]">
            Page Not Found
          </h1>
          <p className="text-sm sm:text-base text-[#2d6180] max-w-md mx-auto leading-relaxed">
            Sorry, the page you are looking for does not exist or may have been moved. Here are some helpful links to get your journey back on track:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-xl">
          <Link
            href="/"
            className="flex flex-col items-center gap-2 p-5 rounded-2xl bg-white border border-[#bde9ff] hover:border-[#30AFFF] shadow-xs hover:shadow-md transition-all text-[#0a2a3d] font-bold text-sm"
          >
            <Home className="w-5 h-5 text-[#0284c7]" />
            <span>Go to Homepage</span>
          </Link>

          <Link
            href="/taxi"
            className="flex flex-col items-center gap-2 p-5 rounded-2xl bg-white border border-[#bde9ff] hover:border-[#30AFFF] shadow-xs hover:shadow-md transition-all text-[#0a2a3d] font-bold text-sm"
          >
            <Navigation className="w-5 h-5 text-[#0284c7]" />
            <span>Browse Taxi Routes</span>
          </Link>

          <Link
            href="/cab-service"
            className="flex flex-col items-center gap-2 p-5 rounded-2xl bg-white border border-[#bde9ff] hover:border-[#30AFFF] shadow-xs hover:shadow-md transition-all text-[#0a2a3d] font-bold text-sm"
          >
            <MapPin className="w-5 h-5 text-[#0284c7]" />
            <span>Cities We Serve</span>
          </Link>
        </div>

        <div className="pt-4 border-t border-[#bde9ff] w-full max-w-md text-xs text-[#2d6180]">
          <span>Need immediate assistance booking a ride? Call our 24x7 desk: </span>
          <a href={`tel:${SITE.phoneFormatted}`} className="text-[#0284c7] font-bold hover:underline">
            {SITE.phone}
          </a>
        </div>

      </main>
      <Footer />
    </div>
  );
}
