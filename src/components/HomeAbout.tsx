import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Award, Clock, MapPin, ArrowRight } from 'lucide-react';

export default function HomeAbout() {
  return (
    <section className="py-20 bg-white border-b border-[#bde9ff]">
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Natural 300+ Words Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#92EEFF]/30 border border-[#bde9ff]">
              <ShieldCheck className="w-4 h-4 text-[#0284c7]" />
              <span className="text-xs font-bold text-[#0284c7] uppercase tracking-wider">
                About Velora Cabs
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1F33] leading-tight">
              Reliable Cab & Taxi Service Based in Bhavnagar, Serving Gujarat & Mumbai
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#2d6180] leading-relaxed">
              <p>
                Velora Cabs is a dedicated road transport and taxi provider headquartered in Bhavnagar, established to deliver dependable, punctual, and safe intercity travel across Gujarat and connecting routes to Mumbai. We specialize in point-to-point one-way outstation cabs, round-trip family holidays, airport transfers, and local city rentals designed to remove travel stress for daily commuters and long-distance travelers alike.
              </p>
              <p>
                Our fleet encompasses clean, air-conditioned Maruti Swift Dzire sedans for executive and solo commutes, spacious Maruti Suzuki Ertiga MUVs for family luggage convenience, and heavy-duty Tempo Travellers accommodating religious pilgrim yatras to Palitana Shatrunjaya, Somnath, and Dwarka. Every vehicle is routinely inspected for safety, cabin cleanliness, and climate comfort before departing for your doorstep.
              </p>
              <p>
                From industrial hubs like Dahej, Ankleshwar, Bharuch, and Vapi to vibrant commercial centers in Ahmedabad, Vadodara, Surat, and Mumbai, our seasoned chauffeurs maintain defensive highway driving standards, deep geographic route familiarity, and courteous conduct. We believe in complete transparency, providing confirmed fixed quotes upfront via WhatsApp so you know exactly what to expect before stepping into the cab.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0B1F33] hover:bg-[#123952] text-white text-xs sm:text-sm font-bold shadow-xs transition-all"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#92EEFF]" />
              </Link>
              <Link
                href="/fleet"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-[#bde9ff] text-[#0B1F33] hover:bg-[#EBF9FF] text-xs sm:text-sm font-bold transition-all"
              >
                <span>View Our Fleet</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Key Pillars Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#EBF9FF] p-5 rounded-2xl border border-[#bde9ff] space-y-2">
              <div className="w-9 h-9 rounded-xl bg-white border border-[#bde9ff] flex items-center justify-center text-[#0284c7]">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#0B1F33]">24x7 Availability</h3>
              <p className="text-xs text-[#2d6180]">
                Early-morning airport departures or late-night train connections — our dispatch team assists you around the clock.
              </p>
            </div>

            <div className="bg-[#EBF9FF] p-5 rounded-2xl border border-[#bde9ff] space-y-2">
              <div className="w-9 h-9 rounded-xl bg-white border border-[#bde9ff] flex items-center justify-center text-[#28A745]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#0B1F33]">Verified Drivers</h3>
              <p className="text-xs text-[#2d6180]">
                Polite, licensed chauffeurs with deep experience on major Gujarat state highways and national expressways.
              </p>
            </div>

            <div className="bg-[#EBF9FF] p-5 rounded-2xl border border-[#bde9ff] space-y-2">
              <div className="w-9 h-9 rounded-xl bg-white border border-[#bde9ff] flex items-center justify-center text-[#0284c7]">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#0B1F33]">Doorstep Pickup</h3>
              <p className="text-xs text-[#2d6180]">
                Direct pickup from your residence, hotel, or office in Bhavnagar with zero luggage hassle.
              </p>
            </div>

            <div className="bg-[#EBF9FF] p-5 rounded-2xl border border-[#bde9ff] space-y-2">
              <div className="w-9 h-9 rounded-xl bg-white border border-[#bde9ff] flex items-center justify-center text-[#F59E0B]">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#0B1F33]">Fixed quote on WhatsApp</h3>
              {/* TODO: Keep "zero surprise surge charges" only if confirmed by business owner */}
              <p className="text-xs text-[#2d6180]">
                Clear fixed quotes shared upfront via WhatsApp with zero surprise surge charges at destination.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
