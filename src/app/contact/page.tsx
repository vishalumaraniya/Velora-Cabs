import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { SITE } from '@/data/site';
import InstagramIcon from '@/components/InstagramIcon';
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | 24x7 Cab Booking & Support',
  description:
    'Contact Velora Cabs in Bhavnagar, Gujarat. Call +91 87803 11279 or WhatsApp us 24x7 for instant outstation, local, and airport cab bookings across Gujarat and Mumbai.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Us | Velora Cabs',
    description:
      'Get in touch with Velora Cabs for 24x7 cab bookings, quotes, and customer support in Gujarat and Mumbai.',
    url: `${SITE.url}/contact`,
    siteName: SITE.name,
    images: [
      {
        url: '/images/og-velora.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Velora Cabs',
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#EBF9FF] flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 sm:pt-28 pb-16">
        <Breadcrumbs items={[{ label: 'Contact Us' }]} />

        {/* Hero Section */}
        <section className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#bde9ff] shadow-sm space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#92EEFF]/30 border border-[#bde9ff]">
              <Phone className="w-4 h-4 text-[#0284c7]" />
              <span className="text-xs font-bold text-[#0284c7] uppercase tracking-wider">
                24x7 Customer Support
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a2a3d] tracking-tight">
              Contact Velora Cabs
            </h1>

            <p className="text-base sm:text-lg text-[#2d6180] max-w-3xl leading-relaxed">
              Have questions about an upcoming journey, need a customized multi-city tour quote, or require immediate emergency dispatch? Reach out to our 24x7 coordination desk anytime via phone, WhatsApp, or email.
            </p>

            {SITE.social?.instagram && (
              <div className="pt-2">
                <a
                  href={SITE.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer me"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0d2236] text-[#92EEFF] hover:text-white border border-[#1a3a52] text-xs font-bold transition-all shadow-xs"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>Follow us on Instagram @velora_cabs_official</span>
                </a>
              </div>
            )}
          </div>
        </section>

        {/* Contact Information & Channels */}
        <section className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Phone Call */}
            <div className="bg-white rounded-3xl p-6 border border-[#bde9ff] flex flex-col justify-between space-y-4 shadow-xs">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#EBF9FF] border border-[#bde9ff] flex items-center justify-center text-[#0284c7]">
                  <Phone className="w-6 h-6" />
                </div>
                <h2 className="text-lg font-bold text-[#0a2a3d]">Phone Inquiries</h2>
                <p className="text-xs text-[#2d6180] leading-relaxed">
                  Call our live dispatchers for immediate booking confirmations and itinerary consultations.
                </p>
              </div>
              <div className="pt-2 border-t border-[#bde9ff]/60">
                <a
                  href={`tel:${SITE.phoneFormatted}`}
                  className="text-sm font-bold text-[#0284c7] hover:underline block"
                >
                  {SITE.phone}
                </a>
                <span className="text-[11px] text-[#5c9ab8] block mt-0.5">Available 24x7</span>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-white rounded-3xl p-6 border border-[#bde9ff] flex flex-col justify-between space-y-4 shadow-xs">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#EBF9FF] border border-[#bde9ff] flex items-center justify-center text-[#28A745]">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h2 className="text-lg font-bold text-[#0a2a3d]">WhatsApp Chat</h2>
                <p className="text-xs text-[#2d6180] leading-relaxed">
                  Get instant quotes, vehicle photos, and driver contact cards sent directly to your phone.
                </p>
              </div>
              <div className="pt-2 border-t border-[#bde9ff]/60">
                <a
                  href={`${SITE.whatsapp}?text=${encodeURIComponent(
                    'Hello Velora Cabs, I would like to inquire about cab booking.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-[#28A745] hover:underline block"
                >
                  Chat with Dispatch
                </a>
                <span className="text-[11px] text-[#5c9ab8] block mt-0.5">Fastest response</span>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white rounded-3xl p-6 border border-[#bde9ff] flex flex-col justify-between space-y-4 shadow-xs">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#EBF9FF] border border-[#bde9ff] flex items-center justify-center text-[#0284c7]">
                  <Mail className="w-6 h-6" />
                </div>
                <h2 className="text-lg font-bold text-[#0a2a3d]">Email Us</h2>
                <p className="text-xs text-[#2d6180] leading-relaxed">
                  For corporate billing, monthly rental contracts, or detailed travel proposals.
                </p>
              </div>
              <div className="pt-2 border-t border-[#bde9ff]/60">
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-sm font-bold text-[#0284c7] hover:underline block truncate"
                >
                  {SITE.email}
                </a>
                <span className="text-[11px] text-[#5c9ab8] block mt-0.5">Replied within 24 hours</span>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white rounded-3xl p-6 border border-[#bde9ff] flex flex-col justify-between space-y-4 shadow-xs">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#EBF9FF] border border-[#bde9ff] flex items-center justify-center text-[#0284c7]">
                  <MapPin className="w-6 h-6" />
                </div>
                <h2 className="text-lg font-bold text-[#0a2a3d]">Head Office</h2>
                <p className="text-xs text-[#2d6180] leading-relaxed">
                  Headquartered in Bhavnagar, serving 14 hubs across Gujarat and Mumbai.
                </p>
              </div>
              <div className="pt-2 border-t border-[#bde9ff]/60 text-xs text-[#2d6180]">
                <strong>{SITE.address?.city ?? 'Bhavnagar'}, {SITE.address?.state ?? 'Gujarat'}</strong>
                {SITE.address?.street && (
                  <span className="block text-[11px] text-[#5c9ab8]">{SITE.address.street}</span>
                )}
              </div>
            </div>

          </div>
        </section>

        {/* Map Placeholder & Fast Booking CTA */}
        <section className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Map Placeholder */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#bde9ff] space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-[#0B1F33]">
                  Service Base Location: Bhavnagar, Gujarat
                </h2>
                <span className="text-xs text-[#0284c7] font-semibold">Active Service Map</span>
              </div>

              {/* Lazy Google Map per Section 5.8 */}
              <div className="w-full h-72 sm:h-80 rounded-2xl overflow-hidden border border-[#bde9ff] bg-[#EBF9FF]">
                <iframe
                  title="Velora Cabs Service Area Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118556.88392238478!2d72.08381864560737!3d21.764491741289196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f5081abb97b2f%3A0xf676d64b6e137161!2sBhavnagar%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Quick Booking CTA Form Jump */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-[#bde9ff] space-y-5">
              <h2 className="text-xl font-bold text-[#0a2a3d]">
                Fastest Way to Book Your Cab
              </h2>
              <p className="text-xs sm:text-sm text-[#2d6180] leading-relaxed">
                Prefer immediate booking? Hop onto WhatsApp or call our phone coordinator. We take your travel details in under a minute and confirm your vehicle instantly.
              </p>

              <div className="space-y-3 pt-2">
                <a
                  href={`tel:${SITE.phoneFormatted}`}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#0a2a3d] hover:bg-[#123952] text-white font-bold text-sm shadow-xs transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#92EEFF]" />
                  <span>Call {SITE.phone}</span>
                </a>

                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#28A745] hover:bg-[#1e8c38] text-white font-bold text-sm shadow-xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp 24x7</span>
                </a>
              </div>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
