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
    'w-full px-3.5 py-2.5 bg-[#17171f] hover:bg-[#1b1b24] focus:bg-[#1a1a24] border border-white/20 hover:border-white/30 focus:border-[#F5B921] rounded-lg text-sm text-white placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#F5B921]/20 transition-all shadow-sm';

  return (
    <section id="inquiry" className="py-10 sm:py-16 lg:py-20 bg-[#0b0b0e] relative border-t border-white/5">
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-stretch">

          {/* ── LEFT COLUMN: aligned to site container ── */}
          <div className="lg:col-span-3 flex flex-col justify-between py-2">
            <div>
              {/* Section heading */}
              <div className="flex items-start gap-3 mb-6 sm:mb-8">
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
                      'Clean & sanitized AC sedans',
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
              </div>
            </div>

            <div className="pt-6">
              <button
                type="button"
                onClick={handleOpenWhatsApp}
                className="hidden lg:flex w-full py-2.5 rounded-xl font-semibold text-xs bg-[#25D366] text-black hover:bg-[#20bd5a] items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                WhatsApp Inquiry
              </button>
            </div>
          </div>

          {/* ── RIGHT COLUMN: Stretched to align with header nav, seamless fadeout border card ── */}
          <div className="lg:col-span-9 flex flex-col">
            <div
              className="h-full rounded-2xl sm:rounded-3xl lg:rounded-r-none p-[1.5px] lg:pr-0 overflow-hidden"
              style={{
                background:
                  'linear-gradient(to right, rgba(245, 185, 33, 0.85) 0%, rgba(245, 185, 33, 0.35) 35%, rgba(245, 185, 33, 0.08) 70%, transparent 100%)',
              }}
            >
              <div
                className="relative h-full rounded-[calc(1rem-1.5px)] sm:rounded-[calc(1.5rem-1.5px)] lg:rounded-r-none overflow-hidden"
                style={{
                  background:
                    'linear-gradient(to right, #111116 0%, #111116 55%, rgba(17, 17, 22, 0.75) 75%, transparent 100%)',
                }}
              >

                {/* Dotted vector matrix and telematics route network that emerges as the border fades out */}
                <div className="hidden lg:block absolute inset-y-0 right-0 w-[55%] pointer-events-none select-none overflow-hidden">
                  {/* Subtle ambient lighting glows */}
                  <div className="absolute right-12 bottom-6 w-72 h-72 rounded-full bg-[#06B6D4]/[0.06] blur-3xl" />
                  <div className="absolute right-36 top-1/3 w-64 h-64 rounded-full bg-[#F5B921]/[0.03] blur-3xl" />

                  {/* High-tech GPS telematics route vector & dot matrix */}
                  <svg
                    viewBox="0 0 540 440"
                    preserveAspectRatio="xMidYMid slice"
                    className="absolute inset-0 w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      {/* Technical dot matrix pattern */}
                      <pattern
                        id="inquiry-dot-matrix"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                        patternUnits="userSpaceOnUse"
                      >
                        <circle cx="2" cy="2" r="1.2" fill="#F5B921" fillOpacity="0.38" />
                      </pattern>

                      {/* Smooth horizontal gradient fade mask */}
                      <linearGradient id="dot-fade-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#fff" stopOpacity="0" />
                        <stop offset="15%" stopColor="#fff" stopOpacity="0.45" />
                        <stop offset="45%" stopColor="#fff" stopOpacity="0.95" />
                        <stop offset="85%" stopColor="#fff" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                      </linearGradient>

                      <mask id="inquiry-fade-mask">
                        <rect width="100%" height="100%" fill="url(#dot-fade-gradient)" />
                      </mask>

                      {/* Glow filters for vibrant live beacon nodes */}
                      <filter id="cyan-beacon-glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
                        <feMerge>
                          <feMergeNode in="blur" />
                          <feMergeNode in="blur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>

                      <filter id="amber-beacon-glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
                        <feMerge>
                          <feMergeNode in="blur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>

                      {/* Express route vector gradient */}
                      <linearGradient id="route-path-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#F5B921" stopOpacity="0.3" />
                        <stop offset="25%" stopColor="#F5B921" stopOpacity="0.8" />
                        <stop offset="55%" stopColor="#06B6D4" stopOpacity="0.95" />
                        <stop offset="85%" stopColor="#38BDF8" stopOpacity="0.75" />
                        <stop offset="100%" stopColor="#818CF8" stopOpacity="0.2" />
                      </linearGradient>

                      {/* Luminous route under-glow */}
                      <linearGradient id="route-glow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#F5B921" stopOpacity="0.1" />
                        <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.05" />
                      </linearGradient>
                    </defs>

                    {/* Dotted mesh fill */}
                    <rect
                      width="100%"
                      height="100%"
                      fill="url(#inquiry-dot-matrix)"
                      mask="url(#inquiry-fade-mask)"
                    />

                    {/* Masked vector network and live GPS telematics elements */}
                    <g mask="url(#inquiry-fade-mask)">
                      {/* Secondary feeder trajectory path */}
                      <path
                        d="M 160 210 C 230 250 310 310 395 365"
                        fill="none"
                        stroke="#38BDF8"
                        strokeWidth="1.2"
                        strokeDasharray="3 5"
                        strokeOpacity="0.28"
                      />

                      {/* Secondary feeder waypoint */}
                      <circle cx="160" cy="210" r="3.5" fill="#38BDF8" opacity="0.6" />
                      <circle cx="160" cy="210" r="7.5" fill="none" stroke="#38BDF8" strokeWidth="1" strokeOpacity="0.25" />

                      {/* Primary Highway Route - Underglow trace */}
                      <path
                        d="M 60 395 C 160 390 280 375 395 365 C 450 360 495 350 540 335"
                        fill="none"
                        stroke="url(#route-glow-grad)"
                        strokeWidth="7"
                        strokeLinecap="round"
                      />

                      {/* Primary Highway Route - Precision vector line */}
                      <path
                        d="M 60 395 C 160 390 280 375 395 365 C 450 360 495 350 540 335"
                        fill="none"
                        stroke="url(#route-path-grad)"
                        strokeWidth="2"
                        strokeDasharray="6 4"
                        strokeLinecap="round"
                      />

                      {/* HUD Coordinate Crosshair Ticks around Central Blue Beacon */}
                      <line x1="355" y1="365" x2="375" y2="365" stroke="#06B6D4" strokeWidth="1" strokeOpacity="0.4" />
                      <line x1="415" y1="365" x2="435" y2="365" stroke="#06B6D4" strokeWidth="1" strokeOpacity="0.4" />
                      <line x1="395" y1="325" x2="395" y2="345" stroke="#06B6D4" strokeWidth="1" strokeOpacity="0.4" />
                      <line x1="395" y1="385" x2="395" y2="405" stroke="#06B6D4" strokeWidth="1" strokeOpacity="0.4" />

                      {/* CENTRAL BLUE DOT TELEMATICS BEACON AT BOTTOM (cx=395, cy=365) */}
                      {/* Outer Radar Wave 3 */}
                      <circle
                        cx="395"
                        cy="365"
                        r="48"
                        fill="none"
                        stroke="#06B6D4"
                        strokeWidth="1"
                        strokeOpacity="0.16"
                        strokeDasharray="4 4"
                      />

                      {/* Middle Radar Wave 2 */}
                      <circle
                        cx="395"
                        cy="365"
                        r="32"
                        fill="none"
                        stroke="#06B6D4"
                        strokeWidth="1.2"
                        strokeOpacity="0.32"
                      />

                      {/* Inner Pulsing Sonar Ring */}
                      <circle
                        cx="395"
                        cy="365"
                        r="18"
                        fill="#06B6D4"
                        fillOpacity="0.12"
                        stroke="#22D3EE"
                        strokeWidth="1.5"
                        strokeOpacity="0.75"
                      >
                        <animate attributeName="r" values="14;24;14" dur="3s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.8;0.2;0.8" dur="3s" repeatCount="indefinite" />
                      </circle>

                      {/* High-Luminance Glowing Blue Core */}
                      <circle
                        cx="395"
                        cy="365"
                        r="6.5"
                        fill="#06B6D4"
                        filter="url(#cyan-beacon-glow)"
                      />
                      {/* Ultra-bright white center point */}
                      <circle
                        cx="395"
                        cy="365"
                        r="2.8"
                        fill="#FFFFFF"
                      />

                      {/* Live GPS Status Label next to bottom beacon */}
                      <g transform="translate(356, 410)">
                        <text
                          x="0"
                          y="0"
                          fill="#94A3B8"
                          fontSize="8.5"
                          fontFamily="monospace"
                          letterSpacing="0.08em"
                          fontWeight="500"
                        >
                          GPS · CONNECTED
                        </text>
                      </g>
                    </g>
                  </svg>
                </div>

                {/* Form content */}
                <div className="relative z-10 px-5 sm:px-8 lg:px-10 py-6 sm:py-8 max-w-2xl">

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
                    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4 sm:space-y-5">

                      {/* ── Personal Info ── */}
                      <div>
                        <p className="text-xs font-bold text-[#F5B921] uppercase tracking-[0.12em] mb-3">Personal Info</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label htmlFor="name" className="block text-xs sm:text-sm  text-gray-100 uppercase tracking-wider cursor-pointer">
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
                          <div className="space-y-2">
                            <label htmlFor="phone" className="block text-xs sm:text-sm  text-gray-100 uppercase tracking-wider cursor-pointer">
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
                      <div className='pt-4'>
                        <p className="text-xs  text-[#F5B921] uppercase font-bold tracking-[0.12em] mb-3">Trip Details</p>
                        <div className="space-y-4">
                          {/* Pickup + Drop */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <label htmlFor="pickupLocation" className="block text-xs sm:text-sm  text-gray-100 uppercase tracking-wider cursor-pointer">
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
                            <div className="space-y-2">
                              <label htmlFor="dropLocation" className="block text-xs sm:text-sm  text-gray-100 uppercase tracking-wider cursor-pointer">
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
                            <div className="space-y-2">
                              <label htmlFor="tripDate" className="block text-xs sm:text-sm  text-gray-100 uppercase tracking-wider cursor-pointer">
                                Travel Date <span className="text-[#F5B921]">*</span>
                              </label>
                              <input
                                id="tripDate"
                                type="date"
                                {...register('tripDate')}
                                onClick={(e) => {
                                  try {
                                    (e.currentTarget as HTMLInputElement).showPicker?.();
                                  } catch { }
                                }}
                                className={`${inputCls} cursor-pointer [color-scheme:dark] [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-100 [&::-webkit-calendar-picker-indicator]:[filter:brightness(0)_invert(1)]`}
                              />
                              {errors.tripDate && <p className="text-[10px] text-rose-400">{errors.tripDate.message}</p>}
                            </div>
                            <div className="space-y-2">
                              <label htmlFor="tripTime" className="block text-xs sm:text-sm  text-gray-100 uppercase tracking-wider cursor-pointer">
                                Time <span className="text-gray-400 normal-case font-normal tracking-normal text-xs">(optional)</span>
                              </label>
                              <input
                                id="tripTime"
                                type="time"
                                {...register('tripTime')}
                                onClick={(e) => {
                                  try {
                                    (e.currentTarget as HTMLInputElement).showPicker?.();
                                  } catch { }
                                }}
                                className={`${inputCls} cursor-pointer [color-scheme:dark] [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-100 [&::-webkit-calendar-picker-indicator]:[filter:brightness(0)_invert(1)]`}
                              />
                            </div>
                          </div>

                          {/* Notes */}
                          <div className="space-y-2">
                            <label htmlFor="message" className="block text-xs sm:text-sm  text-gray-100 uppercase tracking-wider cursor-pointer">
                              Notes <span className="text-gray-400 normal-case font-normal tracking-normal text-xs">(optional)</span>
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

                      </div>

                    </form>

                  )}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

  );
}
