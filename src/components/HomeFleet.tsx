import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Users, Briefcase, Snowflake, ArrowRight } from 'lucide-react';

const FLEET_DATA = [
  {
    id: 'swift-dzire',
    name: 'Maruti Swift Dzire',
    category: 'Comfort AC Sedan',
    passengers: 'Up to 4 Passengers',
    luggage: '2 Medium Bags',
    image: '/images/velora_dzire.webp',
    alt: 'Maruti Swift Dzire taxi for Bhavnagar to Ahmedabad outstation and city rides',
    description: 'Perfect for business trips, couple getaways, and daily commutes with chilled AC comfort.',
  },
  {
    id: 'ertiga',
    name: 'Maruti Suzuki Ertiga',
    category: 'Spacious Family MUV',
    passengers: '6 to 7 Passengers',
    luggage: '4 Large Bags',
    image: '/images/velora_ertiga.webp',
    alt: 'Maruti Suzuki Ertiga family taxi for outstation travel across Gujarat',
    description: 'Generous legroom and flexible seating tailored for family vacations and airport luggage.',
  },
  {
    id: 'tempo-traveller',
    name: 'Tempo Traveller',
    category: 'Group & Pilgrimage Minibus',
    passengers: '12 to 17 Passengers',
    luggage: '8+ Large Bags',
    image: '/images/velora_traveller.webp',
    alt: 'Tempo Traveller for group trips and Palitana Shatrunjaya Jain pilgrimage',
    description: 'High-roof air-conditioned bus with pushback comfort seats for pilgrimage tours and events.',
  },
];

export default function HomeFleet() {
  return (
    <section id="fleet" className="py-16 sm:py-20 bg-white border-b border-[#bde9ff]">
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <p className="text-xs font-bold text-[#0284c7] uppercase tracking-wider">
            Our Cab Fleet
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1F33]">
            Clean, Air-Conditioned Vehicles for Every Journey
          </h2>
          <p className="text-[#2d6180] text-sm sm:text-base leading-relaxed">
            Choose from well-maintained sedans, family MUVs, and group minibuses inspected before every ride.
          </p>
        </div>

        {/* 3 Fleet Cards linking to /fleet/[vehicle] */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FLEET_DATA.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-[#EBF9FF] rounded-2xl border border-[#bde9ff] hover:border-[#30AFFF] p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all group"
            >
              <div>
                {/* Vehicle Image */}
                <div className="relative aspect-[16/10] w-full mb-4 rounded-xl overflow-hidden bg-white/60 p-2 flex items-center justify-center">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.alt}
                    width={400}
                    height={250}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                    className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <span className="text-[11px] font-bold text-[#0284c7] uppercase tracking-wider block mb-1">
                  {vehicle.category}
                </span>
                <h3 className="text-lg font-bold text-[#0B1F33] mb-2">
                  {vehicle.name}
                </h3>
                <p className="text-xs text-[#2d6180] mb-4 leading-relaxed">
                  {vehicle.description}
                </p>

                {/* Specs */}
                <div className="space-y-1.5 text-xs text-[#2d6180] border-t border-[#bde9ff]/60 pt-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Users className="w-3.5 h-3.5 text-[#0284c7]" />
                    <span>{vehicle.passengers}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-3.5 h-3.5 text-[#0284c7]" />
                    <span>{vehicle.luggage}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Snowflake className="w-3.5 h-3.5 text-[#28A745]" />
                    <span>Chilled AC Cabin</span>
                  </div>
                </div>
              </div>

              <Link
                href={`/fleet/${vehicle.id}`}
                className="w-full py-2.5 rounded-xl bg-white hover:bg-[#30AFFF] text-[#0B1F33] hover:text-white border border-[#bde9ff] hover:border-[#30AFFF] text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-2xs"
                aria-label={`View Full Specs for ${vehicle.name}`}
              >
                <span>View Full Specs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
