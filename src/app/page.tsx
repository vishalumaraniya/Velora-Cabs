import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import InquiryForm from '@/components/InquiryForm';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#EBF9FF]">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Page Sections */}
      <Hero />
      <InquiryForm />

      <Services />
      <WhyUs />
      <Testimonials />

      {/* Footer with SEO Route Keywords & Links */}
      <Footer />
    </main>
  );
}
