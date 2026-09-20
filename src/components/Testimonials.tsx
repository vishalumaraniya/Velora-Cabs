'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, MapPin, CheckCircle2, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-14 sm:py-18 bg-[#EBF9FF] relative border-t border-[#bde9ff]/60">
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <p className="text-xs font-bold text-[#30AFFF] uppercase tracking-widest">
            Verified Passenger Feedback
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a2a3d]">
            What Our <span className="text-[#30AFFF]">Passengers Say</span>
          </h2>
          <p className="text-[#2d6180] text-sm leading-relaxed">
            Real experiences from travelers who choose Velora Cabs for safe outstation journeys, airport transfers, and local city commutes.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white border border-[#bde9ff] hover:border-[#30AFFF] rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-[4px_4px_14px_rgba(2,132,199,0.06),-3px_-3px_10px_#ffffff] hover:shadow-[6px_6px_20px_rgba(48,175,255,0.14),-3px_-3px_12px_#ffffff] hover:-translate-y-1 transition-all group relative overflow-hidden"
            >
              {/* Subtle decorative quote mark in background */}
              <Quote className="absolute right-4 top-4 w-12 h-12 text-[#92EEFF]/15 pointer-events-none stroke-[1.2]" />

              <div className="relative z-10">
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#30AFFF] text-[#30AFFF]" />
                  ))}
                </div>

                {/* Route Pill */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#EBF9FF] border border-[#bde9ff] text-xs text-[#2d6180] font-medium mb-3">
                  <MapPin className="w-3 h-3 text-[#30AFFF]" />
                  <span>{review.route}</span>
                </div>

                {/* Comment Body */}
                <p className="text-[#2d6180] text-sm leading-relaxed mb-5">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-3 border-t border-[#bde9ff] flex items-center justify-between relative z-10">
                <div className="flex items-center gap-3">
                  {review.image ? (
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#30AFFF]/40 ring-2 ring-[#92EEFF]/30 shadow-xs shrink-0 relative">
                      <Image
                        src={review.image}
                        alt={review.name}
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-[#3DBE6B]/60 border border-[#28A745] flex items-center justify-center text-[#1a5c2a] font-bold text-xs shrink-0">
                      {review.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h3 className="text-sm font-bold text-[#0a2a3d] flex items-center gap-1.5">
                      <span>{review.name}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1e7a35]" />
                    </h3>
                    <span className="text-xs text-[#5c9ab8]">{review.location}</span>
                  </div>
                </div>
                <span className="text-[11px] text-[#5c9ab8]">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
