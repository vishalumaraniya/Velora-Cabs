'use client';

import React, { useState, useEffect } from 'react';
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
  Compass,
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
    <section id="inquiry" className="py-5 sm:py-7 lg:py-8 bg-gradient-to-br from-[#F0FAFF] via-white to-[#EBF5FF] relative">
      {/* Background soft blur */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#30AFFF]/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#30AFFF]/4 blur-3xl" />
      </div>

      <div className="relative max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-3 sm:mb-4">
          <span className="inline-block text-[11px] font-bold text-[#30AFFF] uppercase tracking-[0.2em] bg-[#30AFFF]/10 px-3 py-0.5 rounded-full mb-1">
            Simple Booking & Inquiry
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            Book Your Cab with Velora
          </h2>
        </div>

        {/* Full Header-Width Clean & Simple Booking Card */}
        <div className="w-full">
          <div className="bg-gradient-to-b from-[#081d30] via-[#061726] to-[#04101c] rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-7 shadow-2xl shadow-slate-950/30 border border-[#143d63] w-full">
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4 sm:space-y-5 w-full">

              {/* Row 1: Trip & Route Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
                {/* Trip Type Dropdown */}
                <div>
                  <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                    Trip Type
                  </label>
                  <div className="relative">
                    <Compass className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#38bdf8] pointer-events-none" />
                    <select
                      value={currentTripType}
                      onChange={(e) => setValue('tripType', e.target.value as any)}
                      className="w-full pl-10 pr-9 py-2.5 sm:py-3 bg-[#0a2035] border border-[#1b3e64] hover:border-[#2a598c] focus:border-[#38bdf8] focus:bg-[#0d2742] rounded-xl text-xs sm:text-sm text-white appearance-none cursor-pointer outline-none transition-all font-medium"
                    >
                      <option value="outstation" className="bg-[#061726] text-white">One-Way Outstation</option>
                      <option value="roundtrip" className="bg-[#061726] text-white">Round Trip Journey</option>
                      <option value="airport" className="bg-[#061726] text-white">Airport Transfer</option>
                      <option value="local" className="bg-[#061726] text-white">Local City Rental</option>
                    </select>
                    <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                {/* Pickup City */}
                <div>
                  <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                    From (Pickup City)
                  </label>
                  <div className="relative">
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center pointer-events-none">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    </div>
                    <select
                      value={currentPickup}
                      onChange={(e) => handlePickupChange(e.target.value)}
                      className="w-full pl-10 pr-9 py-2.5 sm:py-3 bg-[#0a2035] border border-[#1b3e64] hover:border-[#2a598c] focus:border-[#38bdf8] focus:bg-[#0d2742] rounded-xl text-xs sm:text-sm text-white appearance-none cursor-pointer outline-none transition-all font-medium"
                    >
                      {MAJOR_CITIES.filter((c) => c !== currentDrop).map((c) => (
                        <option key={c} value={c} className="bg-[#061726] text-white">{c}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                {/* Drop City with Swap */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                      To (Drop City)
                    </label>
                    <button
                      type="button"
                      onClick={handleSwap}
                      className="text-[11px] font-semibold text-[#38bdf8] hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <ArrowUpDown className="w-3 h-3" /> Swap
                    </button>
                  </div>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#38bdf8] pointer-events-none" />
                    <select
                      value={currentDrop}
                      onChange={(e) => handleDropChange(e.target.value)}
                      className="w-full pl-10 pr-9 py-2.5 sm:py-3 bg-[#0a2035] border border-[#1b3e64] hover:border-[#2a598c] focus:border-[#38bdf8] focus:bg-[#0d2742] rounded-xl text-xs sm:text-sm text-white appearance-none cursor-pointer outline-none transition-all font-medium"
                    >
                      {MAJOR_CITIES.filter((c) => c !== currentPickup).map((c) => (
                        <option key={c} value={c} className="bg-[#061726] text-white">{c}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                {/* Travel Date */}
                <div>
                  <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                    Travel Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#38bdf8] pointer-events-none z-10" />
                    <input
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      {...register('tripDate')}
                      className="w-full pl-10 pr-3 py-2.5 sm:py-3 bg-[#0a2035] border border-[#1b3e64] hover:border-[#2a598c] focus:border-[#38bdf8] focus:bg-[#0d2742] rounded-xl text-xs sm:text-sm text-white outline-none transition-all font-medium cursor-pointer [color-scheme:dark]"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Cab Type & Passenger Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
                {/* Cab Category Dropdown */}
                <div>
                  <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                    Select Cab
                  </label>
                  <div className="relative">
                    <Car className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#38bdf8] pointer-events-none" />
                    <select
                      value={selectedVehicleId}
                      onChange={(e) => setSelectedVehicleId(e.target.value)}
                      className="w-full pl-10 pr-9 py-2.5 sm:py-3 bg-[#0a2035] border border-[#1b3e64] hover:border-[#2a598c] focus:border-[#38bdf8] focus:bg-[#0d2742] rounded-xl text-xs sm:text-sm text-white appearance-none cursor-pointer outline-none transition-all font-medium"
                    >
                      {FLEET_CARS.map((car) => (
                        <option key={car.id} value={car.id} className="bg-[#061726] text-white">
                          {car.name} ({car.category})
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                {/* Your Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    {...register('name')}
                    className="w-full px-3.5 py-2.5 sm:py-3 bg-[#0a2035] border border-[#1b3e64] hover:border-[#2a598c] focus:border-[#38bdf8] focus:bg-[#0d2742] rounded-xl text-xs sm:text-sm text-white outline-none transition-all placeholder:text-slate-400 font-medium"
                  />
                  {errors.name && (
                    <p className="text-[10px] text-red-400 mt-1">{errors.name.message}</p>
                  )}
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter 10-digit number"
                    {...register('phone')}
                    className="w-full px-3.5 py-2.5 sm:py-3 bg-[#0a2035] border border-[#1b3e64] hover:border-[#2a598c] focus:border-[#38bdf8] focus:bg-[#0d2742] rounded-xl text-xs sm:text-sm text-white outline-none transition-all placeholder:text-slate-400 font-medium"
                  />
                  {errors.phone && (
                    <p className="text-[10px] text-red-400 mt-1">{errors.phone.message}</p>
                  )}
                </div>

                {/* Pickup Notes / Address */}
                <div>
                  <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                    Pickup Address / Notes <span className="text-slate-400 font-normal lowercase">(optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Pickup address or notes..."
                    {...register('message')}
                    className="w-full px-3.5 py-2.5 sm:py-3 bg-[#0a2035] border border-[#1b3e64] hover:border-[#2a598c] focus:border-[#38bdf8] focus:bg-[#0d2742] rounded-xl text-xs sm:text-sm text-white outline-none transition-all placeholder:text-slate-400 font-medium"
                  />
                </div>
              </div>

              {/* Row 3: Trust Bar & WhatsApp Quote CTA */}
              <div className="pt-2 sm:pt-3 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#133552]">
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse shrink-0" />
                  <span>Fixed quote on WhatsApp · 24x7 Doorstep Pickup · Verified Drivers</span>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto min-w-[260px] h-11 sm:h-12 px-7 rounded-xl font-bold text-xs sm:text-sm bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg shadow-emerald-500/25 active:scale-[0.99] transition-all flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>Get Fixed Quote on WhatsApp</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
