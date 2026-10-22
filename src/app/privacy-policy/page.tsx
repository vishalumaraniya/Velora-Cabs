import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { SITE } from '@/data/site';
import { ShieldCheck, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Velora Cabs privacy policy. Read how we collect, use, and protect passenger booking details, contact numbers, and travel information.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#EBF9FF] flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 sm:pt-28 pb-16">
        <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#bde9ff] shadow-sm space-y-8">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF9FF] text-[#0284c7] text-xs font-bold border border-[#bde9ff]">
                <ShieldCheck className="w-4 h-4" />
                <span>Last Updated: October 2026</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-black text-[#0a2a3d]">
                Privacy Policy
              </h1>

              {/* Visible Legal Review Notice */}
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs sm:text-sm flex items-start gap-2.5">
                <AlertCircle className="w-5 h-5 shrink-0 text-amber-600 mt-0.5" />
                <div>
                  <strong>Notice:</strong> This is a standard operational draft for Velora Cabs passenger booking services. <em>TODO: owner to complete formal legal review with legal counsel.</em>
                </div>
              </div>
            </div>

            <div className="space-y-6 text-sm text-[#2d6180] leading-relaxed">
              <section className="space-y-2">
                <h2 className="text-lg font-bold text-[#0a2a3d]">1. Introduction</h2>
                <p>
                  Velora Cabs (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting the privacy and personal information of our customers and website visitors. This Privacy Policy outlines what information we collect when you use our website ({SITE.url}) or book a cab via phone or WhatsApp, and how that information is utilized.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-[#0a2a3d]">2. Information We Collect</h2>
                <p>When you book a cab or request a fare quote with Velora Cabs, we collect only necessary travel details, including:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Your name and contact phone number.</li>
                  <li>Pickup address, destination, travel dates, and scheduled departure times.</li>
                  <li>Optional travel preferences, passenger count, and luggage specifications.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-[#0a2a3d]">3. How We Use Your Information</h2>
                <p>We use your information exclusively to:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Confirm your cab reservation and dispatch the assigned driver to your doorstep.</li>
                  <li>Provide real-time WhatsApp updates, driver contact cards, and vehicle registration details.</li>
                  <li>Respond promptly to your customer support inquiries and feedback.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-[#0a2a3d]">4. Data Protection & Sharing</h2>
                <p>
                  We do not sell, rent, or trade your personal information to third-party marketing companies. Your contact details and pickup coordinates are shared only with the assigned professional driver solely for coordinating your booked ride.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-[#0a2a3d]">5. Contact Us</h2>
                <p>
                  If you have questions about our privacy practices, please contact us at {SITE.email} or call our Bhavnagar office at {SITE.phone}.
                </p>
              </section>
            </div>

          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
