import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { SITE } from '@/data/site';
import { ROUTES } from '@/data/routes';
import {
  Car,
  CheckCircle2,
  Phone,
  MessageCircle,
  ArrowRight,
  Navigation,
} from 'lucide-react';

interface FleetDetailPageProps {
  params: Promise<{ vehicle: string }>;
}

const VEHICLE_EXTRAS: Record<
  string,
  {
    tagline: string;
    longDescription: string;
    idealFor: string[];
    features: string[];
    recommendedRoutes: string[];
  }
> = {
  dzire: {
    tagline: 'The Ultimate Fuel-Efficient Highway & City Sedan',
    longDescription:
      'The Maruti Swift Dzire is India’s favorite commercial sedan for good reason. Engineered with superior passenger legroom, refined suspension, and exceptional air conditioning, it offers an exceptionally smooth and quiet ride for up to 4 passengers. Whether commuting to Ahmedabad Airport or attending business meetings in Vadodara, the Dzire delivers executive comfort at an accessible fixed rate.',
    idealFor: [
      'Solo business travelers and executives',
      'Couples and small families (up to 4 pax)',
      'Direct airport transfers with standard luggage',
      'Intra-city multi-stop appointments and shopping',
    ],
    features: [
      'High-performance climate control air conditioning',
      'Dedicated boot trunk accommodating 2 large trolley bags',
      'Comfortable rear seat headrests and armrest',
      'Dual airbags and anti-lock braking system (ABS)',
      'USB mobile charging ports for passenger devices',
    ],
    recommendedRoutes: [
      'bhavnagar-to-ahmedabad',
      'bhavnagar-to-vadodara',
      'bhavnagar-to-surat',
      'ahmedabad-to-dholera',
      'vapi-to-daman',
    ],
  },
  ertiga: {
    tagline: 'Premium 6-Seater Family & Executive MUV',
    longDescription:
      'The Maruti Suzuki Ertiga strikes the ideal balance between spacious family seating and ample luggage capacity. Featuring flexible split-folding rear seats, dedicated roof-mounted AC vents for all passenger rows, and high ground clearance, it is the premier choice for family vacations, pilgrimage tours to Palitana, and airport runs requiring extra suitcase volume.',
    idealFor: [
      'Families of 4 to 6 members requiring extra room',
      'Pilgrimage yatras to Palitana Shatrunjaya and Saurashtra temples',
      'International airport transfers with multiple large trolley bags',
      'Corporate team travel between industrial corridors',
    ],
    features: [
      'Dual roof-mounted AC vents ensuring even cooling for row 2 and 3',
      'Generous seating for 6 adult passengers with flexible boot expansion',
      'Ample legroom and recliner second-row seating',
      'Smooth suspension optimized for long highway journeys',
      'Bottle holders, device chargers, and reading lights',
    ],
    recommendedRoutes: [
      'bhavnagar-to-ahmedabad',
      'bhavnagar-to-palitana',
      'bhavnagar-to-mumbai',
      'bhavnagar-to-bhuj',
      'surat-to-mumbai',
    ],
  },
  'tempo-traveller': {
    tagline: 'Spacious Group & Pilgrimage Chauffeur Van (12–17 Pax)',
    longDescription:
      'When traveling in a large family group, social organization, or corporate team, our Tempo Traveller provides unbeatable togetherness and comfort. Featuring plush high-back push-back bucket seats, high-capacity dual air-conditioning, individual reading lamps, and a massive rear luggage trunk, the Tempo Traveller keeps your entire group traveling safely in a single vehicle without convoy complications.',
    idealFor: [
      'Spiritual pilgrimage groups visiting Palitana, Somnath, and Dwarka',
      'Extended family wedding parties and reunions',
      'Corporate industrial site tours in Dahej, Bharuch, and Dholera',
      'College and educational field trips across Gujarat',
    ],
    features: [
      'Individual high-back pushback reclining seats with headrests',
      'Heavy-duty dual compressor ducted roof AC throughout the cabin',
      'Expansive walk-through central aisle with tall stand-up headroom',
      'Massive rear luggage compartment for 8+ large bags',
      'Professional seasoned long-distance heavy vehicle chauffeur',
    ],
    recommendedRoutes: [
      'bhavnagar-to-palitana',
      'bhavnagar-to-mumbai',
      'bhavnagar-to-bhuj',
      'ahmedabad-to-palitana',
      'bhavnagar-to-dahej',
    ],
  },
};

export async function generateStaticParams() {
  return SITE.vehicles.map((v) => ({
    vehicle: v.id,
  }));
}

export async function generateMetadata({ params }: FleetDetailPageProps): Promise<Metadata> {
  const { vehicle: vehicleId } = await params;
  const vehicle = SITE.vehicles.find((v) => v.id === vehicleId);

  if (!vehicle) {
    return { title: 'Vehicle Not Found | Velora Cabs' };
  }

  const title = `${vehicle.name} Taxi Rental | ${vehicle.type} Hire`;
  const description = `Book a clean, AC ${vehicle.name} (${vehicle.passengers} pax) with Velora Cabs. Verified driver, ample luggage space, fixed fare quotes for Gujarat and Mumbai trips.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/fleet/${vehicle.id}`,
    },
    openGraph: {
      title,
      description,
      url: `${SITE.url}/fleet/${vehicle.id}`,
      siteName: SITE.name,
      images: [
        {
          url: '/images/og-velora.jpg',
          width: 1200,
          height: 630,
          alt: `${vehicle.name} – Velora Cabs`,
        },
      ],
    },
  };
}

export default async function FleetDetailPage({ params }: FleetDetailPageProps) {
  const { vehicle: vehicleId } = await params;
  const vehicle = SITE.vehicles.find((v) => v.id === vehicleId);

  if (!vehicle) {
    notFound();
  }

  const extras = VEHICLE_EXTRAS[vehicle.id] || {
    tagline: 'Reliable Passenger Vehicle',
    longDescription:
      'Fully equipped, commercially certified, and regularly serviced passenger vehicle operated by Velora Cabs.',
    idealFor: ['Local and outstation travel across Gujarat and Mumbai'],
    features: ['Air-conditioned comfort', 'Ample luggage capacity', 'Experienced chauffeur'],
    recommendedRoutes: ['bhavnagar-to-ahmedabad', 'bhavnagar-to-vadodara'],
  };

  const routes = extras.recommendedRoutes
    .map((slug) => ROUTES.find((r) => r.slug === slug))
    .filter((r): r is NonNullable<typeof r> => Boolean(r));

  const whatsappMessage = `Hello Velora Cabs, I want to book a ${vehicle.name} for my trip.`;

  return (
    <div className="min-h-screen bg-[#EBF9FF] flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 sm:pt-28 pb-16">
        <Breadcrumbs
          items={[
            { label: 'Our Fleet', href: '/fleet' },
            { label: vehicle.name },
          ]}
        />

        {/* Hero Section */}
        <section className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#bde9ff] shadow-sm space-y-8">
            <div className="space-y-4 max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#92EEFF]/30 border border-[#bde9ff]">
                <Car className="w-4 h-4 text-[#0284c7]" />
                <span className="text-xs font-bold text-[#0284c7] uppercase tracking-wider">
                  {vehicle.type} • Commercial Taxi
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a2a3d] tracking-tight">
                {vehicle.name} Taxi Hire
              </h1>

              <p className="text-base sm:text-lg text-[#0284c7] font-bold">
                {extras.tagline}
              </p>

              <p className="text-sm sm:text-base text-[#2d6180] leading-relaxed">
                {extras.longDescription}
              </p>
            </div>

            {/* Key Specs Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              <div className="p-4 rounded-2xl bg-[#EBF9FF] border border-[#bde9ff]">
                <span className="text-xs text-[#2d6180] block font-medium">Passenger Seating</span>
                <span className="text-lg sm:text-2xl font-black text-[#0a2a3d]">Up to {vehicle.passengers} Pax</span>
                <span className="text-[11px] text-[#5c9ab8] block">+ 1 Professional Driver</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#EBF9FF] border border-[#bde9ff]">
                <span className="text-xs text-[#2d6180] block font-medium">Luggage Capacity</span>
                <span className="text-lg sm:text-2xl font-black text-[#0a2a3d]">{vehicle.luggage} Bags</span>
                <span className="text-[11px] text-[#5c9ab8] block">Standard trolley suitcases</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#EBF9FF] border border-[#bde9ff]">
                <span className="text-xs text-[#2d6180] block font-medium">Air Conditioning</span>
                <span className="text-lg sm:text-2xl font-black text-[#0a2a3d]">Full AC</span>
                <span className="text-[11px] text-[#5c9ab8] block">Multi-vent cabin cooling</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#EBF9FF] border border-[#bde9ff]">
                <span className="text-xs text-[#2d6180] block font-medium">Pricing Model</span>
                <span className="text-lg sm:text-2xl font-black text-[#28A745]">Fixed Fares</span>
                <span className="text-[11px] text-[#5c9ab8] block">Zero surprise extras</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={`tel:${SITE.phoneFormatted}`}
                className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#0a2a3d] hover:bg-[#123952] text-white font-bold text-sm shadow-md transition-all active:scale-95"
              >
                <Phone className="w-4 h-4 text-[#92EEFF]" />
                <span>Call to Book: {SITE.phone}</span>
              </a>

              <a
                href={`${SITE.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#28A745] hover:bg-[#1e8c38] text-white font-bold text-sm shadow-md transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Get Free Quote on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        {/* Features & Ideal Use Cases */}
        <section className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Ideal Use Cases */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#bde9ff] space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-[#0a2a3d]">
                Best Use Cases for {vehicle.name}
              </h2>
              <ul className="space-y-3">
                {extras.idealFor.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#2d6180]">
                    <CheckCircle2 className="w-4 h-4 text-[#28A745] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Vehicle Features */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#bde9ff] space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-[#0a2a3d]">
                Features & Passenger Amenities
              </h2>
              <ul className="space-y-3">
                {extras.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#2d6180]">
                    <CheckCircle2 className="w-4 h-4 text-[#0284c7] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </section>

        {/* Recommended Routes for this Vehicle */}
        {routes.length > 0 && (
          <section className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black text-[#0a2a3d]">
              Popular Routes Traveled by {vehicle.name}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {routes.map((r) => (
                <Link
                  key={r.slug}
                  href={`/taxi/${r.slug}`}
                  className="p-5 rounded-2xl bg-white border border-[#bde9ff] hover:border-[#30AFFF] shadow-xs hover:shadow-md transition-all flex items-center justify-between text-sm font-bold text-[#0a2a3d] hover:text-[#0284c7]"
                >
                  <span className="flex items-center gap-2">
                    <Navigation className="w-4 h-4 text-[#0284c7]" />
                    {r.from} to {r.to} Taxi
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#0284c7]" />
                </Link>
              ))}
            </div>

            <div className="pt-2">
              <Link href="/fleet" className="text-xs sm:text-sm font-bold text-[#0284c7] hover:underline">
                ← View all fleet options
              </Link>
            </div>
          </section>
        )}

      </main>

      <Footer />
    </div>
  );
}
