import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import InquiryForm from '@/components/InquiryForm';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0b0e]">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Page Sections */}
      <Hero />
      <Services />
      <WhyUs />
      <InquiryForm />
      <Testimonials />

      {/* Footer with SEO Route Keywords & Links */}
      <Footer />
    </main>
  );
}
