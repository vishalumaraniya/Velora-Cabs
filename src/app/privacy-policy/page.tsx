import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { SITE } from '@/lib/site';
import { ShieldCheck, Mail, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Velora Cabs',
  description: 'Privacy Policy explaining how Velora Cabs collects and protects customer travel data.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrivacyPolicyPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
  ];

  return (
    <div className="min-h-screen bg-[#EBF9FF] flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="mb-6">
          <Breadcrumbs items={breadcrumbs} />
        </div>

        <article className="bg-white rounded-3xl p-6 sm:p-10 border border-[#bde9ff] space-y-8 shadow-xs">
          <div className="space-y-3 border-b border-[#bde9ff]/60 pb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF9FF] text-[#0284c7] text-xs font-bold border border-[#bde9ff]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Customer Data Protection</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-[#0B1F33]">
              Privacy Policy
            </h1>
          </div>

          <div className="space-y-6 text-sm text-[#2d6180] leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#0B1F33]">1. Introduction</h2>
              <p>
                Velora Cabs (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting the privacy and personal information of our passengers and website visitors. This Privacy Policy outlines what information we collect when you visit our website ({SITE.url}) or schedule a cab via phone or WhatsApp, and how that information is safeguarded.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#0B1F33]">2. Information We Collect</h2>
              <p>When you request a quote or confirm a booking with Velora Cabs, we collect only necessary travel details, including:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Your name and contact mobile number.</li>
                <li>Pickup location, drop destination, journey date, and scheduled departure time.</li>
                <li>Vehicle category preference and passenger count.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#0B1F33]">3. How We Use Your Information</h2>
              <p>We use your travel information exclusively to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Coordinate your doorstep pickup and assign a qualified driver.</li>
                <li>Send ride confirmations and quote details directly via WhatsApp or phone.</li>
                <li>Provide customer assistance in the event of schedule updates or flight delays.</li>
              </ul>
              <p>We do not sell, rent, or trade your personal data with third-party marketing companies.</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#0B1F33]">4. Contact Our Privacy Team</h2>
              <p>
                If you have questions regarding your data or wish to have your contact details updated, please contact our administrative desk:
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0B1F33] text-white text-xs font-bold hover:bg-[#123952] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#30AFFF]" />
                  <span>{SITE.email}</span>
                </a>
                <a
                  href={`tel:${SITE.phone}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-[#bde9ff] text-[#0B1F33] text-xs font-bold hover:bg-[#EBF9FF] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#0284c7]" />
                  <span>{SITE.phoneDisplay}</span>
                </a>
              </div>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
