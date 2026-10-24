import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import InquiryForm from '@/components/InquiryForm';
import Services from '@/components/Services';
import HomeFleet from '@/components/HomeFleet';
import HomePopularRoutes from '@/components/HomePopularRoutes';
import HomeCitiesServe from '@/components/HomeCitiesServe';
import WhyUs from '@/components/WhyUs';
import HomeHowToBook from '@/components/HomeHowToBook';
import Testimonials from '@/components/Testimonials';
import HomeFaq from '@/components/HomeFaq';
import HomeAbout from '@/components/HomeAbout';
import HomeCtaBand from '@/components/HomeCtaBand';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { buildMetadata } from '@/lib/metadata';

// Section 7 exact metadata specification
export const metadata: Metadata = buildMetadata({
  title: 'Taxi Service in Bhavnagar & Gujarat | Velora Cabs',
  description:
    'Book local, airport and outstation AC cabs from Bhavnagar to Ahmedabad, Vadodara, Surat, Mumbai & more. Call +91 87803 11279 for a quote.',
  path: '/',
});

export default function Home() {
  // All 14 confirmed cities served across Gujarat & Mumbai
  const confirmedCities = [
    'Bhavnagar',
    'Ahmedabad',
    'Vadodara',
    'Surat',
    'Bharuch',
    'Dahej',
    'Vapi',
    'Daman',
    'Dholera',
    'Mumbai',
    'Bhuj',
    'Gandhidham',
    'Amreli',
    'Palitana',
  ];

  return (
    <div className="min-h-screen bg-[#EBF9FF] flex flex-col">
      {/* Server-rendered Business Schema per Section 4.2 & Appendix A */}
      <JsonLd type="business" areaServed={confirmedCities} />

      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Page Landmark */}
      <main id="main-content" className="flex-1">
        {/* 1. Hero (H1, subline, Call + WhatsApp + Book buttons, verified fleet proof badge) */}
        <Hero />

        {/* 2. Booking Inquiry Form */}
        <InquiryForm />

        {/* 3. Services (4 cards linking to service pages) */}
        <Services />

        {/* 4. Fleet (3 cards linking to /fleet) */}
        <HomeFleet />

        {/* 5. Popular Routes (8 cards linking to route pages) */}
        <HomePopularRoutes />

        {/* 6. Cities We Serve (14 links) */}
        <HomeCitiesServe />

        {/* 7. Why Choose Velora (6 points, accuracy-checked wording) */}
        <WhyUs />

        {/* 8. How Booking Works (3 steps) */}
        <HomeHowToBook />

        {/* 9. Google Reviews block (or Reviews/Testimonials component) */}
        <Testimonials />

        {/* 10. FAQ (8 questions with exact 40-70 words answers & FAQPage schema) */}
        <HomeFaq />

        {/* 11. Final CTA Band */}
        <HomeCtaBand />

        {/* 12. Natural 300+ words body text mentioning cities and services */}
        <HomeAbout />
      </main>

      {/* Complete SEO & Landmark Footer */}
      <Footer />
    </div>
  );
}
