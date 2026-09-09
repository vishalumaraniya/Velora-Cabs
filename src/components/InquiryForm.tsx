'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MessageCircle, CheckCircle2, Phone, ArrowRight, Check } from 'lucide-react';
import { BUSINESS_INFO, buildWhatsAppLink } from '@/lib/constants';

const bookingSchema = z.object({
  name: z.string().min(2, { message: 'Name is required' }),
  phone: z.string().min(10, { message: 'Enter valid 10-digit mobile number' }).regex(/^[0-9+\s-]{10,15}$/, { message: 'Invalid phone number' }),
  pickupLocation: z.string().min(2, { message: 'Pickup location required' }),
  dropLocation: z.string().min(2, { message: 'Drop location required' }),
  tripDate: z.string().min(1, { message: 'Date required' }),
  tripTime: z.string().optional(),
  tripType: z.enum(['outstation', 'local', 'airport']).optional(),
  message: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export default function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: '',
      phone: '',
      pickupLocation: '',
      dropLocation: '',
      tripDate: new Date().toISOString().split('T')[0],
      tripTime: '09:00',
      tripType: 'outstation',
      message: '',
    },
  });

  const formWatch = watch();

  useEffect(() => {
    const handleTripType = (e: CustomEvent<'local' | 'outstation' | 'airport'>) => {
      if (e.detail) setValue('tripType', e.detail);
    };
    const handleRoute = (e: CustomEvent<{ pickup: string; drop: string }>) => {
      if (e.detail) {
        setValue('pickupLocation', e.detail.pickup);
        setValue('dropLocation', e.detail.drop);
        setValue('tripType', 'outstation');
      }
    };
    window.addEventListener('select-trip-type', handleTripType as EventListener);
    window.addEventListener('select-route', handleRoute as EventListener);
    return () => {
      window.removeEventListener('select-trip-type', handleTripType as EventListener);
      window.removeEventListener('select-route', handleRoute as EventListener);
    };
  }, [setValue]);

  const onSubmit = async (data: BookingFormValues) => {
    setLoading(true);
    try {
      await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Inquiry submission fallback:', err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenWhatsApp = () => {
    const url = buildWhatsAppLink(formWatch);
    window.open(url, '_blank');
  };

  const inputCls =
    'w-full px-3.5 py-2.5 bg-transparent border border-white/10 rounded-lg text-sm text-white placeholder:text-gray-600 outline-none focus:border-[#F5B921]/60 focus:ring-1 focus:ring-[#F5B921]/15 transition-all';

  return (
    <section id="inquiry" className="relative py-16 sm:py-20 bg-[#0b0b0e] border-t border-white/5 overflow-hidden">

      {/*
        ── Full-bleed layout ──
        Left: content aligned with site container (max-w-7xl)
        Right: form panel bleeds to screen right edge
        The car SVG sits in the right panel background, reversed, partially clipped
      */}
      <div className="flex flex-col lg:flex-row items-stretch min-h-0">

        {/* ── LEFT COLUMN: aligned to site container ── */}
        <div
          className="
            w-full lg:w-auto lg:shrink-0
            px-4 sm:px-6
            lg:pl-[max(1.5rem,calc((100vw-80rem)/2+2rem))]
            lg:pr-10
            lg:w-[clamp(280px,25vw,380px)]
            py-8 lg:py-0 flex flex-col justify-center
          "
        >
          {/* Section heading */}
          <div className="flex items-start gap-3 mb-10">
            <div className="w-0.5 h-12 bg-gradient-to-b from-[#F5B921] to-transparent rounded-full shrink-0 mt-0.5" />
            <div>
              <p className="text-[11px] font-semibold text-[#F5B921] uppercase tracking-widest mb-1.5">Instant Booking</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                Plan Your Ride<br />with Velora Cabs
              </h2>
              <p className="text-gray-500 text-sm mt-2">
                Share details — we confirm within minutes.
              </p>
            </div>
          </div>

          {/* Contact sidebar */}
          <div className="space-y-6">
            <div>
              <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest mb-3">Call Us Directly</p>
              <div className="space-y-2">
                <a href={`tel:${BUSINESS_INFO.phones[0].raw}`} className="flex items-center gap-3 group py-2 px-2 rounded-xl hover:bg-white/[0.04] transition-colors -mx-2">
                  <div className="w-8 h-8 rounded-lg bg-[#F5B921]/10 border border-[#F5B921]/20 flex items-center justify-center shrink-0">
                    <Phone className="w-3.5 h-3.5 text-[#F5B921]" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider">Primary</p>
                    <p className="text-sm font-semibold text-white group-hover:text-[#F5B921] transition-colors">
                      {BUSINESS_INFO.phones[0].display}
                    </p>
                  </div>
                </a>
                <a href={`tel:${BUSINESS_INFO.phones[1].raw}`} className="flex items-center gap-3 group py-2 px-2 rounded-xl hover:bg-white/[0.04] transition-colors -mx-2">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-3.5 h-3.5 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider">Secondary</p>
                    <p className="text-sm font-semibold text-white">{BUSINESS_INFO.phones[1].display}</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="h-px bg-white/5" />

            <div>
              <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest mb-3">Our Promise</p>
              <ul className="space-y-2.5">
                {[
                  'Punctual pickup — every time',
                  'Clean & sanitized Dzire sedans',
                  'Fixed rates, zero hidden charges',
                  'One-way & round-trip available',
                ].map((text, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-[#F5B921]/10 border border-[#F5B921]/25 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 text-[#F5B921]" strokeWidth={2.5} />
                    </span>
                    <span className="text-xs text-gray-400">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="h-px bg-white/5" />

            <button
              type="button"
              onClick={handleOpenWhatsApp}
              className="w-full py-2.5 rounded-xl font-semibold text-xs bg-[#25D366] text-black hover:bg-[#20bd5a] flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              WhatsApp Inquiry
            </button>
          </div>
        </div>

        {/* ── RIGHT COLUMN: gradient-border wrapper + form panel ── */}
        {/*
          Border technique: outer div = gradient background acting as border (2px padding on L/T/B, 0 on R).
          This gives: solid yellow left edge, fading top/bottom, no border on right (screen edge).
          Rounded corners are naturally connected because it's one background, not 3 separate divs.
        */}
        <div
          className="flex-1 min-w-0 lg:rounded-tl-3xl lg:rounded-bl-3xl overflow-hidden"
          style={{
            padding: '2px 0 2px 2px',
            background: 'linear-gradient(to right, rgba(245,185,33,0.75) 0%, rgba(245,185,33,0.3) 30%, rgba(245,185,33,0.05) 70%, transparent 100%)',
          }}
        >
        <div className="
          relative h-full
          bg-[#111116]
          lg:rounded-tl-3xl lg:rounded-bl-3xl
          overflow-hidden
        ">

          {/* Car image — raw SVG, starting (left/front) portion visible from right */}
          <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
            {/* img is wider than visible area; right side is clipped, showing only the starting portion */}
            <img
              src="/images/classic_car.svg"
              alt=""
              style={{
                position: 'absolute',
                right: '-58%',
                bottom: '0',
                height: '88%',
                width: 'auto',
                maxHeight: 540,
                opacity: 0.14,
                filter: 'drop-shadow(0 0 24px rgba(245,185,33,0.55))',
              }}
            />
          </div>

          {/* Subtle gold glow behind car */}
          <div className="absolute bottom-0 right-0 w-[40%] h-[60%] bg-[#F5B921]/6 blur-[100px] pointer-events-none rounded-full translate-x-[15%]" />

          {/* Form content — max-w to keep it readable, left-padded */}
          <div className="relative z-10 px-6 sm:px-10 lg:px-14 py-10 lg:py-14 max-w-2xl">

            {submitted ? (
              <div className="py-10 space-y-5">
                <div className="w-14 h-14 rounded-full bg-[#F5B921]/10 border border-[#F5B921]/30 flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7 text-[#F5B921]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Request Received!</h3>
                  <p className="text-gray-400 text-sm mt-1.5 max-w-sm">
                    We'll call <span className="text-white font-medium">{formWatch.phone}</span> within 15 minutes to confirm your ride.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-start gap-3 pt-1">
                  <button onClick={handleOpenWhatsApp} className="px-5 py-2.5 rounded-lg font-semibold text-xs bg-[#25D366] text-black hover:bg-[#20bd5a] flex items-center gap-2 transition-colors">
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    Open WhatsApp
                  </button>
                  <button onClick={() => setSubmitted(false)} className="px-5 py-2.5 rounded-lg text-xs text-gray-400 border border-white/10 hover:border-white/20 hover:text-white transition-colors">
                    Book Another Ride
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">

                {/* ── Personal Info ── */}
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.12em] mb-3">Personal Info</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="block text-[11px] font-semibold text-gray-400 uppercase tracking-wider cursor-pointer">
                        Full Name <span className="text-[#F5B921]">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Rajesh Patel"
                        {...register('name')}
                        className={inputCls}
                      />
                      {errors.name && <p className="text-[10px] text-rose-400">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="block text-[11px] font-semibold text-gray-400 uppercase tracking-wider cursor-pointer">
                        Mobile Number <span className="text-[#F5B921]">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="8780311279"
                        {...register('phone')}
                        className={inputCls}
                      />
                      {errors.phone && <p className="text-[10px] text-rose-400">{errors.phone.message}</p>}
                    </div>
                  </div>
                </div>

                {/* ── Trip Details ── */}
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.12em] mb-3">Trip Details</p>
                  <div className="space-y-4">

                    {/* Pickup + Drop */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="pickupLocation" className="block text-[11px] font-semibold text-gray-400 uppercase tracking-wider cursor-pointer">
                          Pickup <span className="text-[#F5B921]">*</span>
                        </label>
                        <input
                          id="pickupLocation"
                          type="text"
                          placeholder="Bhavnagar"
                          {...register('pickupLocation')}
                          className={inputCls}
                        />
                        {errors.pickupLocation && <p className="text-[10px] text-rose-400">{errors.pickupLocation.message}</p>}
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="dropLocation" className="block text-[11px] font-semibold text-gray-400 uppercase tracking-wider cursor-pointer">
                          Drop <span className="text-[#F5B921]">*</span>
                        </label>
                        <input
                          id="dropLocation"
                          type="text"
                          placeholder="Ahmedabad / Surat"
                          {...register('dropLocation')}
                          className={inputCls}
                        />
                        {errors.dropLocation && <p className="text-[10px] text-rose-400">{errors.dropLocation.message}</p>}
                      </div>
                    </div>

                    {/* Date + Time */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="tripDate" className="block text-[11px] font-semibold text-gray-400 uppercase tracking-wider cursor-pointer">
                          Travel Date <span className="text-[#F5B921]">*</span>
                        </label>
                        <input
                          id="tripDate"
                          type="date"
                          {...register('tripDate')}
                          className={`${inputCls} cursor-pointer [color-scheme:dark] [&::-webkit-calendar-picker-indicator]:opacity-50 [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:invert`}
                        />
                        {errors.tripDate && <p className="text-[10px] text-rose-400">{errors.tripDate.message}</p>}
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="tripTime" className="block text-[11px] font-semibold text-gray-400 uppercase tracking-wider cursor-pointer">
                          Time <span className="text-gray-600 normal-case font-normal tracking-normal">(optional)</span>
                        </label>
                        <input
                          id="tripTime"
                          type="time"
                          {...register('tripTime')}
                          className={`${inputCls} cursor-pointer [color-scheme:dark] [&::-webkit-calendar-picker-indicator]:opacity-50 [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:invert`}
                        />
                      </div>
                    </div>

                    {/* Notes */}
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="block text-[11px] font-semibold text-gray-400 uppercase tracking-wider cursor-pointer">
                        Notes <span className="text-gray-600 normal-case font-normal tracking-normal">(optional)</span>
                      </label>
                      <textarea
                        id="message"
                        rows={2}
                        placeholder="e.g. 2 passengers, return trip, airport terminal..."
                        {...register('message')}
                        className={`${inputCls} resize-none`}
                      />
                    </div>

                  </div>
                </div>

                {/* Submit */}
                <div className="flex items-center gap-4 pt-1">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 sm:flex-none px-8 py-3 rounded-xl font-bold text-sm bg-[#F5B921] text-[#1a1200] hover:bg-[#f0b000] active:scale-[0.99] transition-all shadow-lg shadow-[#F5B921]/15 disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {loading ? 'Submitting...' : (
                      <>
                        <span>Request a Cab</span>
                        <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                      </>
                    )}
                  </button>
                  <p className="text-[10px] text-gray-600 leading-relaxed hidden sm:block">
                    We'll call you<br />within 15 mins
                  </p>
                </div>

              </form>

            )}
          </div>
          </div>
        </div>{/* end gradient border wrapper */}

      </div>
    </section>

  );
}
