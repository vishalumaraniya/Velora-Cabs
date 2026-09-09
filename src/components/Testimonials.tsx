'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, MapPin, CheckCircle2, UserCheck, ThumbsUp, Award } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants';

const testimonialStyleMap = [
  {
    pinColor: 'text-[#F5B921]',
    quoteHover: 'group-hover:text-[#F5B921]/40',
    BackgroundIcon: UserCheck,
    vectorColor: 'text-amber-400/20',
  },
  {
    pinColor: 'text-[#06B6D4]',
    quoteHover: 'group-hover:text-[#06B6D4]/40',
    BackgroundIcon: ThumbsUp,
    vectorColor: 'text-cyan-400/20',
  },
  {
    pinColor: 'text-[#8B5CF6]',
    quoteHover: 'group-hover:text-[#8B5CF6]/40',
    BackgroundIcon: Award,
    vectorColor: 'text-violet-400/20',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#0b0b0e] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#16161e] border border-[#F5B921]/30">
            <Star className="w-3.5 h-3.5 fill-[#F5B921] text-[#F5B921]" />
            <span className="text-xs font-bold text-[#F5B921] uppercase tracking-wider">
              Customer Feedback
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            What Our <span className="gold-gradient-text">Passengers Say</span>
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            Read real feedback from customers who rely on Velora Cabs for safe outstation, airport, and local journeys.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review, idx) => {
            const style = testimonialStyleMap[idx % testimonialStyleMap.length];
            const BackgroundIcon = style.BackgroundIcon;
            // Corner glow on card #0 ONLY (Selective corner glow!)
            const isFeatured = idx === 0;

            return (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`neomorph-card ${
                  isFeatured ? 'neomorph-card-amber border-amber-500/40' : ''
                } p-8 flex flex-col justify-between relative group overflow-hidden`}
              >
                {/* Related Lucide React Icon Floating Behind Frosted Glass (Softly Blurred when Glowing) */}
                <div className={`absolute right-0.5 bottom-0.5 pointer-events-none transition-all duration-500 group-hover:scale-105 group-hover:opacity-40 opacity-20 ${style.vectorColor}`}>
                  <BackgroundIcon className="w-32 h-32 stroke-[1.2] blur-sm group-hover:blur-[2.5px] transition-all duration-500" />
                </div>

                <div className="relative z-10">
                  {/* Quote Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#F5B921] text-[#F5B921]" />
                      ))}
                    </div>
                    <Quote className={`w-8 h-8 text-gray-700 ${style.quoteHover} transition-colors`} />
                  </div>

                  {/* Route Pill */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-gray-300 text-xs font-medium mb-4 border border-white/5">
                    <MapPin className={`w-3.5 h-3.5 ${style.pinColor}`} />
                    <span>{review.route}</span>
                  </div>

                  {/* Comment Body */}
                  <p className="text-gray-300 text-sm italic leading-relaxed mb-6">
                    &ldquo;{review.comment}&rdquo;
                  </p>
                </div>

                {/* Author Footer */}
                <div className="relative z-10 pt-4 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white flex items-center gap-1.5">
                      <span>{review.name}</span>
                      <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                    </h3>
                    <span className="text-xs text-gray-400">{review.location}</span>
                  </div>
                  <span className="text-[10px] text-gray-500">{review.date}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
