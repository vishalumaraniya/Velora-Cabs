'use client';

import React from 'react';
import { Star, MessageSquare } from 'lucide-react';
import { REVIEWS } from '@/lib/reviews';
import { SITE } from '@/lib/site';

/**
 * Testimonials Component strictly complying with Section 5.3 of SEO Master Prompt:
 * - Removes "Verified Passenger" labels, stock photos, and future-dated reviews
 * - Shows testimonials ONLY if lib/reviews.ts contains real, permissioned reviews (default: empty array)
 * - If empty and SITE.googleReviewUrl is defined, renders a neutral Google Reviews link
 * - If empty and SITE.googleReviewUrl is undefined, removes the section completely (returns null)
 */
export default function Testimonials() {
  if (REVIEWS.length === 0) {
    if (!SITE.googleReviewUrl) {
      return null;
    }

    return (
      <section id="reviews" className="py-12 bg-[#EBF9FF] border-t border-[#bde9ff]/60">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#bde9ff]">
            <Star className="w-4 h-4 text-[#F5B921] fill-[#F5B921]" />
            <span className="text-xs font-bold text-[#0B1F33]">Google Verified Feedback</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F33]">
            Customer Reviews
          </h2>
          <p className="text-[#2d6180] text-sm max-w-md mx-auto">
            Read authentic experiences from travellers who choose Velora Cabs across Gujarat and Mumbai.
          </p>
          <div>
            <a
              href={SITE.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 border border-[#bde9ff] text-[#0284c7] font-bold text-sm shadow-xs transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Read our Google reviews</span>
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="testimonials" className="py-14 sm:py-18 bg-[#EBF9FF] relative border-t border-[#bde9ff]/60">
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <p className="text-xs font-bold text-[#30AFFF] uppercase tracking-widest">
            Passenger Feedback
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F33]">
            What Our <span className="text-[#30AFFF]">Passengers Say</span>
          </h2>
          <p className="text-[#2d6180] text-sm leading-relaxed">
            Real experiences from travelers who choose Velora Cabs for safe outstation journeys, airport transfers, and local city commutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white border border-[#bde9ff] rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F5B921] text-[#F5B921]" />
                  ))}
                </div>
                {review.route && (
                  <span className="inline-block px-2.5 py-1 rounded-md bg-[#EBF9FF] text-xs font-semibold text-[#0284c7] mb-3">
                    {review.route}
                  </span>
                )}
                <p className="text-[#2d6180] text-sm leading-relaxed mb-4">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>
              <div className="pt-3 border-t border-[#bde9ff] flex items-center justify-between text-xs">
                <span className="font-bold text-[#0B1F33]">{review.name}</span>
                <span className="text-[#5c9ab8]">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
