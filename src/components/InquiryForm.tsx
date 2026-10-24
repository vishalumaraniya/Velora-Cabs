'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  MapPin,
  Calendar,
  CheckCircle2,
  ArrowRight,
  ArrowUpDown,
  MessageCircle,
  Check,
  ChevronDown,
  Loader2,
  Clock,
  Car,
  Plane,
  Repeat,
  ShieldCheck,
  Sparkles,
  Phone,
} from 'lucide-react';
import { buildWhatsAppLink, formatDateToDDMMYYYY } from '@/lib/constants';
import { trackBookingSubmit, trackWhatsAppClick } from '@/lib/analytics';
import { SITE } from '@/lib/site';

const bookingSchema = z.object({
  name: z.string().min(2, { message: 'Please enter your name' }),
  phone: z
    .string()
    .min(10, { message: 'Enter a valid 10-digit mobile number' })
    .regex(/^[0-9+\s-]{10,15}$/, { message: 'Invalid phone number format' }),
  pickupLocation: z.string().min(2, { message: 'Select pickup city' }),
  dropLocation: z.string().min(2, { message: 'Select drop city' }),
  tripDate: z.string().min(1, { message: 'Select journey date' }),
  tripType: z.enum(['outstation', 'roundtrip', 'airport', 'local']),
  message: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export const MAJOR_CITIES = [
  'Bhavnagar',
  'Ahmedabad',
  'Vadodara',
  'Surat',
  'Bharuch',
  'Dahej',
  'Vapi',
  'Daman',
  'Dholera',
  'Mumbai',
  'Bhuj',
  'Gandhidham',
  'Amreli',
  'Palitana',
] as const;

const TRIP_TYPES = [
  { id: 'outstation', label: 'One-Way', subtitle: 'Single Drop', icon: ArrowRight },
  { id: 'roundtrip', label: 'Round Trip', subtitle: 'Return Journey', icon: Repeat },
  { id: 'airport', label: 'Airport', subtitle: 'Pickup / Drop', icon: Plane },
  { id: 'local', label: 'Local Rental', subtitle: 'City Commute', icon: Clock },
] as const;

interface FleetCardItem {
  id: string;
  name: string;
  category: string;
  image: string;
  features: string[];
  badge: string;
}

const FLEET_CARS: FleetCardItem[] = [
  {
    id: 'dzire',
    name: 'Maruti Swift Dzire',
    category: 'Comfort Sedan',
    image: '/images/velora_dzire.webp',
    features: ['Chilled AC Cabin', 'Spacious Boot Luggage', 'Daily Sanitized'],
    badge: 'Popular Choice',
  },
  {
    id: 'ertiga',
    name: 'Maruti Suzuki Ertiga',
    category: 'Family MUV',
    image: '/images/velora_ertiga.webp',
    features: ['Rear AC Vents', 'Extra Luggage Capacity', 'Smooth Highway Ride'],
    badge: 'Family Favorite',
  },
  {
    id: 'traveller',
    name: 'Tempo Traveller',
    category: 'Luxury Minibus',
    image: '/images/velora_traveller.webp',
    features: ['High Roof AC', 'Pushback Comfort Seats', 'Group & Pilgrimage Trips'],
    badge: 'Group Travel',
  },
];

export default function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedVehicleId, setSelectedVehicleId] = useState<string>('dzire');

  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: '',
      phone: '',
      pickupLocation: 'Bhavnagar',
      dropLocation: 'Ahmedabad',
      tripDate: new Date().toISOString().split('T')[0],
      tripType: 'outstation',
      message: '',
    },
  });

  const formWatch = watch();
  const currentPickup = formWatch.pickupLocation;
  const currentDrop = formWatch.dropLocation;
  const currentTripType = formWatch.tripType;
  const currentVehicle = FLEET_CARS.find((c) => c.id === selectedVehicleId) || FLEET_CARS[0];

  useEffect(() => {
    const handleTripType = (e: CustomEvent<BookingFormValues['tripType']>) => {
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

  const handleSwap = () => {
    const p = formWatch.pickupLocation;
    const d = formWatch.dropLocation;
    setValue('pickupLocation', d);
    setValue('dropLocation', p);
  };

  const handlePickupChange = (newPickup: string) => {
    setValue('pickupLocation', newPickup);
    if (newPickup === currentDrop) {
      const fallback = MAJOR_CITIES.find((c) => c !== newPickup) || 'Ahmedabad';
      setValue('dropLocation', fallback);
    }
  };

  const handleDropChange = (newDrop: string) => {
    setValue('dropLocation', newDrop);
    if (newDrop === currentPickup) {
      const fallback = MAJOR_CITIES.find((c) => c !== newDrop) || 'Bhavnagar';
      setValue('pickupLocation', fallback);
    }
  };

  const onSubmit = async (data: BookingFormValues) => {
    setLoading(true);
    trackBookingSubmit({
      trip_type: data.tripType,
      route: `${data.pickupLocation} to ${data.dropLocation}`,
      vehicle: currentVehicle.name,
    });
    trackWhatsAppClick('inquiry_form', {
      trip_type: data.tripType,
      route: `${data.pickupLocation} to ${data.dropLocation}`,
      vehicle: currentVehicle.name,
    });

    // Build WhatsApp URL with full trip and car details
    const waUrl = buildWhatsAppLink({
      ...data,
      carName: currentVehicle.name,
    });

    // Directly open WhatsApp immediately on submit click to prevent popup blockers
    try {
      window.open(waUrl, '_blank');
    } catch (e) {
      console.error('Failed to auto-open WhatsApp:', e);
    }

    try {
      await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          carId: currentVehicle.id,
          carName: currentVehicle.name,
        }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const openWhatsApp = () =>
    window.open(
      buildWhatsAppLink({
        ...formWatch,
        carName: currentVehicle.name,
      }),
      '_blank'
    );

  if (submitted) {
    return (
      <section id="inquiry" className="py-16 bg-gradient-to-br from-[#F0FAFF] to-[#E8F7FF]">
        <div className="max-w-lg mx-auto px-4 text-center space-y-5">
          <div className="w-20 h-20 rounded-full bg-emerald-50 border-2 border-emerald-400 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10 text-emerald-500" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">Inquiry Sent to WhatsApp!</h3>
          <p className="text-slate-500 text-sm">
            Your booking details have been sent to WhatsApp directly. Our coordinator will confirm your ride with <span className="text-slate-800 font-semibold">{formWatch.phone}</span> shortly.
          </p>
          <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm text-left text-xs space-y-2">
            {[
              ['Route', `${formWatch.pickupLocation} → ${formWatch.dropLocation}`],
              ['Selected Cab', currentVehicle.name],
              [
                'Trip Type',
                currentTripType === 'outstation'
                  ? 'One-Way Outstation'
                  : currentTripType === 'roundtrip'
                  ? 'Round Trip'
                  : currentTripType === 'airport'
                  ? 'Airport Transfer'
                  : 'Local Rental',
              ],
              ['Journey Date', formatDateToDDMMYYYY(formWatch.tripDate)],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between py-1 border-b border-slate-50 last:border-0">
                <span className="text-slate-400">{k}</span>
                <span className="font-semibold text-slate-800">{v}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
            <button
              onClick={openWhatsApp}
              className="flex-1 py-2.5 rounded-xl font-bold text-sm bg-emerald-500 text-white hover:bg-emerald-600 flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" /> Open WhatsApp
            </button>
            <a
              href={`tel:${SITE.phone}`}
              className="flex-1 py-2.5 rounded-xl font-bold text-sm bg-white border border-slate-200 text-slate-800 hover:border-[#30AFFF] flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#0284c7]" /> Call {SITE.phoneDisplay}
            </a>
            <button
              onClick={() => setSubmitted(false)}
              className="py-2.5 px-3 rounded-xl text-xs text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
            >
              Reset
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="inquiry" className="py-8 sm:py-12 bg-gradient-to-br from-[#F0FAFF] via-white to-[#EBF5FF] relative">
      {/* Background soft blur */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#30AFFF]/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#30AFFF]/4 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8">
          <span className="inline-block text-[11px] font-bold text-[#30AFFF] uppercase tracking-[0.2em] bg-[#30AFFF]/10 px-3.5 py-1 rounded-full mb-1.5">
            Simple Booking & Inquiry
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Book Your Cab with Velora
          </h2>
          <p className="mt-1 text-slate-500 text-xs sm:text-sm max-w-xl mx-auto">
            Fill out the simple inquiry form below and explore our premium fleet gallery.
          </p>
        </div>

        {/* Main Grid: Simple Form on Left, Card Gallery on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">

          {/* ── LEFT: Simple Inquiry Form (Dark Theme for Maximum Visibility) ── */}
          <div className="lg:col-span-7 bg-gradient-to-b from-[#081d30] via-[#061726] to-[#04101c] rounded-2xl sm:rounded-3xl p-4 sm:p-7 shadow-2xl shadow-slate-950/30 border border-[#143d63] flex flex-col justify-between overflow-hidden">
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4 w-full max-w-full min-w-0">

              {/* Trip Type — 4 Crystal Clear Option Cards */}
              <div>
                <label className="block text-xs font-bold text-slate-100 uppercase tracking-wider mb-2">
                  Choose Trip Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {TRIP_TYPES.map(({ id, label, subtitle, icon: Icon }) => {
                    const active = currentTripType === id;
                    return (
                      <button
                        key={id}
                        type="button"
                        onClick={() => setValue('tripType', id)}
                        className={`p-2.5 sm:p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col gap-0.5 ${
                          active
                            ? 'bg-gradient-to-r from-[#0284c7] via-[#0ea5e9] to-[#30AFFF] border-[#38bdf8] text-white shadow-md shadow-[#30AFFF]/30'
                            : 'bg-[#0a2035] hover:bg-[#0f2c4a] border-[#183c61] text-slate-200'
                        }`}
                      >
                        <div className="flex items-center gap-1.5">
                          <Icon className={`w-3.5 h-3.5 shrink-0 ${active ? 'text-white' : 'text-[#38bdf8]'}`} />
                          <span className="font-bold text-xs sm:text-[13px]">{label}</span>
                        </div>
                        <span className={`text-[10px] ${active ? 'text-white/90' : 'text-slate-400'}`}>
                          {subtitle}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Route: Pickup & Drop with Swap Button */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold text-slate-100 uppercase tracking-wider">
                    Select Route
                  </label>
                  <button
                    type="button"
                    onClick={handleSwap}
                    className="text-[11px] font-semibold text-[#38bdf8] hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <ArrowUpDown className="w-3 h-3" /> Swap Cities
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {/* Pickup */}
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center pointer-events-none">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    </div>
                    <select
                      value={currentPickup}
                      onChange={(e) => handlePickupChange(e.target.value)}
                      className="w-full pl-9 pr-8 py-2.5 bg-[#0a2035] border border-[#1b3e64] hover:border-[#2a598c] focus:border-[#38bdf8] focus:bg-[#0d2742] rounded-xl text-xs sm:text-sm text-white appearance-none cursor-pointer outline-none transition-all font-medium"
                    >
                      {MAJOR_CITIES.filter((c) => c !== currentDrop).map((c) => (
                        <option key={c} value={c} className="bg-[#061726] text-white">{c}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
                  </div>

                  {/* Drop */}
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#38bdf8] pointer-events-none" />
                    <select
                      value={currentDrop}
                      onChange={(e) => handleDropChange(e.target.value)}
                      className="w-full pl-9 pr-8 py-2.5 bg-[#0a2035] border border-[#1b3e64] hover:border-[#2a598c] focus:border-[#38bdf8] focus:bg-[#0d2742] rounded-xl text-xs sm:text-sm text-white appearance-none cursor-pointer outline-none transition-all font-medium"
                    >
                      {MAJOR_CITIES.filter((c) => c !== currentPickup).map((c) => (
                        <option key={c} value={c} className="bg-[#061726] text-white">{c}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Journey Date */}
              <div className="w-full min-w-0 max-w-full">
                <label className="block text-xs font-bold text-slate-100 uppercase tracking-wider mb-1.5">
                  Travel Date
                </label>
                <div className="relative w-full min-w-0 max-w-full">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#38bdf8] pointer-events-none z-10" />
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    {...register('tripDate')}
                    className="w-full max-w-full min-w-0 box-border block pl-9 pr-3 py-2.5 bg-[#0a2035] border border-[#1b3e64] hover:border-[#2a598c] focus:border-[#38bdf8] focus:bg-[#0d2742] rounded-xl text-xs sm:text-sm text-white outline-none transition-all font-medium cursor-pointer [color-scheme:dark]"
                    style={{ width: '100%', maxWidth: '100%', minWidth: 0, boxSizing: 'border-box' }}
                  />
                </div>
              </div>

              {/* Your Name & Mobile Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-xs font-bold text-slate-100 uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    {...register('name')}
                    className="w-full px-3.5 py-2.5 bg-[#0a2035] border border-[#1b3e64] hover:border-[#2a598c] focus:border-[#38bdf8] focus:bg-[#0d2742] rounded-xl text-xs sm:text-sm text-white outline-none transition-all placeholder:text-slate-400 font-medium"
                  />
                  {errors.name && (
                    <p className="text-[10px] text-red-400 mt-1">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-100 uppercase tracking-wider mb-1.5">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter 10-digit number"
                    {...register('phone')}
                    className="w-full px-3.5 py-2.5 bg-[#0a2035] border border-[#1b3e64] hover:border-[#2a598c] focus:border-[#38bdf8] focus:bg-[#0d2742] rounded-xl text-xs sm:text-sm text-white outline-none transition-all placeholder:text-slate-400 font-medium"
                  />
                  {errors.phone && (
                    <p className="text-[10px] text-red-400 mt-1">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              {/* Special Requests / Instructions */}
              <div>
                <label className="block text-xs font-bold text-slate-100 uppercase tracking-wider mb-1.5">
                  Special Instructions <span className="text-slate-400 font-normal lowercase">(optional)</span>
                </label>
                <textarea
                  rows={2}
                  placeholder="Pickup address, timing, return notes or special instructions..."
                  {...register('message')}
                  className="w-full px-3.5 py-2 bg-[#0a2035] border border-[#1b3e64] hover:border-[#2a598c] focus:border-[#38bdf8] focus:bg-[#0d2742] rounded-xl text-xs text-white outline-none transition-all resize-none placeholder:text-slate-400"
                />
              </div>

              {/* Selected vehicle summary indicator inside form */}
              <div className="p-2.5 rounded-xl bg-[#0c233a] border border-[#1d4872] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Car className="w-4 h-4 text-[#38bdf8]" />
                  <span className="text-xs text-slate-300">
                    Selected Cab: <strong className="text-white">{currentVehicle.name}</strong>
                  </span>
                </div>
                <span className="text-[10px] font-semibold text-[#67e8f9] bg-[#30AFFF]/20 border border-[#30AFFF]/30 px-2 py-0.5 rounded">
                  {currentVehicle.category}
                </span>
              </div>

              {/* Action Button: Submits Inquiry & Directly Opens WhatsApp */}
              <div className="pt-1">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg shadow-emerald-500/25 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>Request a quote on WhatsApp</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
                <p className="text-[11px] text-center text-slate-300 mt-2">
                  We will confirm availability and fare on WhatsApp · Fast doorstep pickup
                </p>
              </div>

            </form>
          </div>

          {/* ── RIGHT: Car Card Gallery ── */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3">

            {/* Gallery Header */}
            <div className="flex items-center justify-between px-1">
              <div>
                <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
                  Our Fleet Gallery
                </h3>
                <p className="text-[11px] text-slate-500">
                  Click any card to select your preferred vehicle
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                <Sparkles className="w-3 h-3" /> AC Guaranteed
              </span>
            </div>

            {/* 3 Fleet Cards */}
            <div className="flex flex-col gap-3">
              {FLEET_CARS.map((car) => {
                const isSelected = selectedVehicleId === car.id;
                return (
                  <div
                    key={car.id}
                    onClick={() => setSelectedVehicleId(car.id)}
                    className={`p-3.5 rounded-2xl border-2 transition-all cursor-pointer relative overflow-hidden flex items-center gap-3.5 sm:gap-4 ${
                      isSelected
                        ? 'border-[#30AFFF] bg-gradient-to-r from-[#F0FAFF] to-white shadow-md shadow-[#30AFFF]/15 ring-2 ring-[#30AFFF]/20'
                        : 'border-slate-200/80 bg-white hover:border-[#30AFFF]/50 hover:shadow-sm'
                    }`}
                  >
                    {/* Car Image Preview */}
                    <div className="relative w-28 h-20 sm:w-32 sm:h-22 shrink-0 bg-slate-50 rounded-xl p-1 flex items-center justify-center">
                      <Image
                        src={car.image}
                        alt={car.name}
                        fill
                        className="object-contain p-1"
                        sizes="(max-width: 768px) 120px, 140px"
                      />
                    </div>

                    {/* Car Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <h4 className="font-bold text-xs sm:text-sm text-slate-900 truncate">
                          {car.name}
                        </h4>
                        {isSelected && (
                          <span className="inline-flex items-center gap-1 text-[9px] font-bold text-white bg-[#30AFFF] px-2 py-0.5 rounded-full shrink-0 shadow-sm">
                            <Check className="w-2.5 h-2.5 stroke-[3]" /> Selected
                          </span>
                        )}
                      </div>

                      <div className="inline-block text-[10px] font-semibold text-[#0c7ab8] bg-[#30AFFF]/10 px-2 py-0.5 rounded mb-1.5">
                        {car.category}
                      </div>

                      {/* Feature Bullets */}
                      <div className="space-y-0.5">
                        {car.features.map((feat, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 text-[10px] text-slate-500">
                            <Check className="w-2.5 h-2.5 text-[#30AFFF] shrink-0" />
                            <span className="truncate">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quality Assurance Strip */}
            <div className="p-3 sm:p-3.5 rounded-2xl bg-gradient-to-r from-[#0a2a3d] to-[#0d3b57] text-white flex items-center gap-3 shadow-md border border-white/5">
              <div className="w-8 h-8 rounded-xl bg-[#30AFFF]/20 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4 text-[#30AFFF]" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold text-white truncate">
                  Safe, Sanitized & Punctual Rides
                </div>
                <div className="text-[10px] text-slate-300 truncate">
                  24x7 Customer Support · Verified Highway Drivers · Doorstep Pickup
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
