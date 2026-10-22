import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { generalFaqs } from '@/data/faqs';
import { SITE } from '@/data/site';
import { HelpCircle, ChevronDown, Phone, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions (FAQ)',
  description:
    'Got questions about booking a cab with Velora Cabs? Read our complete FAQ guide covering booking procedures, outstation trips, airport transfers, vehicle types, tolls, and cancellations.',
  alternates: {
    canonical: '/faq',
  },
  openGraph: {
    title: 'Frequently Asked Questions (FAQ) | Velora Cabs',
    description:
      'Answers to common questions about cab booking, fares, vehicles, and policies at Velora Cabs.',
    url: `${SITE.url}/faq`,
    siteName: SITE.name,
    images: [
      {
        url: '/images/og-velora.jpg',
        width: 1200,
        height: 630,
        alt: 'Velora Cabs FAQ',
      },
    ],
  },
};

export default function FaqPage() {
  // Flatten all faqs for FAQPage schema to match visible text exactly
  const allFaqItems = generalFaqs.flatMap((group) => group.items);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFaqItems.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-[#EBF9FF] flex flex-col">
      <Navbar />

      <JsonLd data={faqSchema} />

      <main className="flex-1 pt-24 sm:pt-28 pb-16">
        <Breadcrumbs items={[{ label: 'Frequently Asked Questions' }]} />

        {/* Hero Section */}
        <section className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#bde9ff] shadow-sm space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#92EEFF]/30 border border-[#bde9ff]">
              <HelpCircle className="w-4 h-4 text-[#0284c7]" />
              <span className="text-xs font-bold text-[#0284c7] uppercase tracking-wider">
                Support & Information
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a2a3d] tracking-tight">
              Frequently Asked Questions
            </h1>

            <p className="text-base sm:text-lg text-[#2d6180] max-w-3xl leading-relaxed">
              Find instant answers to all your questions regarding booking procedures, outstation travel, airport pickups, vehicle specifications, and booking policies.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={`tel:${SITE.phoneFormatted}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0a2a3d] text-white text-xs sm:text-sm font-bold shadow-xs hover:bg-[#123952] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#92EEFF]" />
                <span>Call Support: {SITE.phone}</span>
              </a>
              <a
                href={`${SITE.whatsapp}?text=${encodeURIComponent(
                  'Hello Velora Cabs, I have a question about booking.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#28A745] text-white text-xs sm:text-sm font-bold shadow-xs hover:bg-[#1e8c38] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Ask on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        {/* Grouped FAQs using semantic <details>/<summary> */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-12">
          {generalFaqs.map((group, gIdx) => (
            <div key={gIdx} className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-[#0a2a3d] pb-2 border-b border-[#bde9ff]">
                {group.category}
              </h2>

              <div className="space-y-3">
                {group.items.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group bg-white rounded-2xl border border-[#bde9ff] overflow-hidden open:border-[#30AFFF] open:shadow-xs transition-colors"
                  >
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none select-none font-bold text-sm sm:text-base text-[#0a2a3d] group-hover:text-[#0284c7]">
                      <span className="pr-4">{faq.question}</span>
                      <ChevronDown className="w-4 h-4 text-[#0284c7] shrink-0 transition-transform duration-200 group-open:rotate-180" />
                    </summary>
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#2d6180] leading-relaxed border-t border-[#bde9ff]/40">
                      <p>{faq.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </section>

      </main>

      <Footer />
    </div>
  );
}
