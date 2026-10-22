import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import InquiryForm from '@/components/InquiryForm';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import HomePopularRoutes from '@/components/HomePopularRoutes';
import HomeHowToBook from '@/components/HomeHowToBook';
import HomeCitiesServe from '@/components/HomeCitiesServe';
import HomeAbout from '@/components/HomeAbout';
import Testimonials from '@/components/Testimonials';
import HomeFaq from '@/components/HomeFaq';
import HomeCtaBand from '@/components/HomeCtaBand';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#EBF9FF] flex flex-col">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Page Landmark */}
      <main id="main-content" className="flex-1">
        {/* Hero Section with exactly ONE <h1> */}
        <Hero />

        {/* Booking Inquiry Form */}
        <InquiryForm />

        {/* Phase 3: Popular Taxi Routes */}
        <HomePopularRoutes />

        {/* Core Services Section */}
        <Services />

        {/* Value Proposition & Drivers */}
        <WhyUs />

        {/* Phase 3: How to Book (3 Steps) */}
        <HomeHowToBook />

        {/* Phase 3: Cities We Serve (14 Cities) */}
        <HomeCitiesServe />

        {/* Phase 3: About Velora Cabs */}
        <HomeAbout />

        {/* Customer Testimonials */}
        <Testimonials />

        {/* Phase 3: FAQ with semantic details/summary */}
        <HomeFaq />

        {/* Phase 3: Get Free Quote CTA Band */}
        <HomeCtaBand />
      </main>

      {/* Complete SEO & Landmark Footer */}
      <Footer />
    </div>
  );
}
