import React from 'react';
import Link from 'next/link';
import { HelpCircle, ChevronDown, ArrowRight } from 'lucide-react';
import { homeFaqs } from '@/data/faqs';
import JsonLd from '@/components/JsonLd';

export default function HomeFaq() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: homeFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="faq-section" className="py-20 bg-[#EBF9FF] border-b border-[#bde9ff]">
      <JsonLd data={faqSchema} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#92EEFF]/30 border border-[#bde9ff]">
            <HelpCircle className="w-4 h-4 text-[#0284c7]" />
            <span className="text-xs font-bold text-[#0284c7] uppercase tracking-wider">
              Answers & Assistance
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a2a3d]">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#2d6180] leading-relaxed">
            Everything you need to know about booking, vehicles, payment, and travel with Velora Cabs.
          </p>
        </div>

        {/* 8 Questions using semantic <details>/<summary> */}
        <div className="space-y-3">
          {homeFaqs.map((faq, idx) => (
            <details
              key={idx}
              className="group bg-white rounded-2xl border border-[#bde9ff] overflow-hidden transition-colors open:border-[#30AFFF] open:shadow-xs"
            >
              <summary className="flex items-center justify-between p-5 cursor-pointer list-none select-none font-bold text-sm sm:text-base text-[#0a2a3d] group-hover:text-[#0284c7] transition-colors">
                <span className="pr-4">{faq.question}</span>
                <ChevronDown className="w-4 h-4 text-[#0284c7] shrink-0 transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#2d6180] leading-relaxed border-t border-[#bde9ff]/40">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>

        {/* Link to Full FAQ */}
        <div className="text-center pt-2">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0284c7] hover:underline"
          >
            <span>Have more questions? Read our full categorized FAQ page</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
