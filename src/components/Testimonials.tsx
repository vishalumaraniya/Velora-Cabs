'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-10 sm:py-16 lg:py-20 bg-[#0b0b0e] relative border-t border-white/5">
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16 space-y-4">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            What Our <span className="gold-gradient-text">Passengers Say</span>
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            Read real feedback from customers who rely on Velora Cabs for safe outstation, airport, and local journeys.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-[#121216] border border-white/[0.08] hover:border-white/[0.18] rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-colors duration-200"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mb-3.5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F5B921] text-[#F5B921]" />
                  ))}
                </div>

                {/* Route Pill */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-xs text-gray-300 font-medium mb-4">
                  <MapPin className="w-3 h-3 text-[#F5B921]" />
                  <span>{review.route}</span>
                </div>

                {/* Comment Body */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#F5B921]/10 border border-[#F5B921]/20 flex items-center justify-center text-[#F5B921] font-semibold text-xs shrink-0">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white flex items-center gap-1.5">
                      <span>{review.name}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                    </h3>
                    <span className="text-xs text-gray-500">{review.location}</span>
                  </div>
                </div>
                <span className="text-[11px] text-gray-500">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
