'use client';

import React, { useState, useEffect, useTransition, useCallback } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Calendar,
  Users,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  ArrowUpDown,
  ArrowLeftRight,
  MessageCircle,
  Check,
  ChevronDown,
  Loader2,
  Route,
  Clock,
  Car,
  Plane,
  Repeat,
} from 'lucide-react';
import { VEHICLE_OPTIONS, buildWhatsAppLink } from '@/lib/constants';
import { calculateRouteDistance, RouteEstimate } from '@/lib/distance';
import { VehicleModel } from '@/types';

const bookingSchema = z.object({
  name: z.string().min(2, { message: 'Enter your name' }),
  phone: z
    .string()
    .min(10, { message: 'Enter valid mobile number' })
    .regex(/^[0-9+\s-]{10,15}$/, { message: 'Invalid phone number' }),
  pickupLocation: z.string().min(2, { message: 'Select pickup city' }),
  dropLocation: z.string().min(2, { message: 'Select drop city' }),
  tripDate: z.string().min(1, { message: 'Select travel date' }),
  tripTime: z.string().optional(),
  tripType: z.enum(['outstation', 'roundtrip', 'local', 'airport']),
  passengers: z.number().min(1).max(30),
  message: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export const MAJOR_CITIES = [
  'Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar',
  'Jamnagar', 'Gandhinagar', 'Somnath', 'Dwarka', 'Vapi', 'Bhuj', 'Mumbai',
] as const;

const TRIP_TYPES = [
  { id: 'outstation', label: 'One-Way', icon: ArrowRight },
  { id: 'roundtrip', label: 'Round Trip', icon: Repeat },
  { id: 'airport', label: 'Airport', icon: Plane },
  { id: 'local', label: 'Local City', icon: Clock },
] as const;

export default function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hasNotesScroll, setHasNotesScroll] = useState(false);
  const [selectedVehicleId, setSelectedVehicleId] = useState<string>('sedan');
  const [routeData, setRouteData] = useState<RouteEstimate | null>({
    distanceKm: 270,
    durationText: '5h 30m',
    isEstimate: false,
  });
  const [isCalculating, setIsCalculating] = useState(false);
  const [, startTransition] = useTransition();

  const handleNotesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const el = e.target;
    setHasNotesScroll(el.scrollHeight > el.clientHeight + 2);
  };

  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: '', phone: '',
      pickupLocation: 'Bhavnagar',
      dropLocation: 'Surat',
      tripDate: new Date().toISOString().split('T')[0],
      tripTime: '09:00',
      tripType: 'outstation',
      passengers: 4,
      message: '',
    },
  });

  const formWatch = watch();
  const currentPickup = formWatch.pickupLocation;
  const currentDrop = formWatch.dropLocation;
  const currentTripType = formWatch.tripType;
  const currentPassengers = formWatch.passengers || 4;
  const currentVehicle: VehicleModel = VEHICLE_OPTIONS.find((v) => v.id === selectedVehicleId) || VEHICLE_OPTIONS[0];

  // Auto-select vehicle based on passenger count
  useEffect(() => {
    if (currentPassengers > 7) setSelectedVehicleId('traveller');
    else if (currentPassengers > 4) setSelectedVehicleId('ertiga');
    else setSelectedVehicleId('sedan');
  }, [currentPassengers]);

  const updateRoute = useCallback(async (pickup: string, drop: string) => {
    if (!pickup || !drop || pickup.length < 2 || drop.length < 2) { setRouteData(null); return; }
    setIsCalculating(true);
    try {
      const estimate = await calculateRouteDistance(pickup, drop);
      startTransition(() => setRouteData(estimate));
    } catch { /* fallback */ } finally { setIsCalculating(false); }
  }, []);

  useEffect(() => {
    const t = setTimeout(() => updateRoute(currentPickup, currentDrop), 400);
    return () => clearTimeout(t);
  }, [currentPickup, currentDrop, updateRoute]);

  useEffect(() => {
    const handleTripType = (e: CustomEvent<BookingFormValues['tripType']>) => {
      if (e.detail) setValue('tripType', e.detail);
    };
    const handleRoute = (e: CustomEvent<{ pickup: string; drop: string }>) => {
      if (e.detail) {
        setValue('pickupLocation', e.detail.pickup);
        setValue('dropLocation', e.detail.drop);
        setValue('tripType', 'outstation');
        updateRoute(e.detail.pickup, e.detail.drop);
      }
    };
    window.addEventListener('select-trip-type', handleTripType as EventListener);
    window.addEventListener('select-route', handleRoute as EventListener);
    return () => {
      window.removeEventListener('select-trip-type', handleTripType as EventListener);
      window.removeEventListener('select-route', handleRoute as EventListener);
    };
  }, [setValue, updateRoute]);

  const handleSwap = () => {
    const p = formWatch.pickupLocation, d = formWatch.dropLocation;
    setValue('pickupLocation', d);
    setValue('dropLocation', p);
    updateRoute(d, p);
  };

  const baseDistance = routeData?.distanceKm || 0;
  const isRoundTrip = currentTripType === 'roundtrip';
  const effectiveDistance = isRoundTrip ? baseDistance * 2 : baseDistance;
  const ratePerKm = currentVehicle.ratePerKm;
  const isLocal = currentTripType === 'local';
  const calculatedFare = isLocal
    ? (currentVehicle.id === 'sedan' ? 1800 : currentVehicle.id === 'ertiga' ? 2400 : 3800)
    : effectiveDistance > 0 ? Math.round(effectiveDistance * ratePerKm) : 0;

  const onSubmit = async (data: BookingFormValues) => {
    setLoading(true);
    try {
      await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, carId: currentVehicle.id, carName: currentVehicle.name, distanceKm: effectiveDistance, ratePerKm, estimatedFare: calculatedFare }),
      });
      setSubmitted(true);
    } catch { setSubmitted(true); } finally { setLoading(false); }
  };

  const openWhatsApp = () => window.open(buildWhatsAppLink({ ...formWatch, carName: currentVehicle.name, passengers: currentPassengers, distanceKm: effectiveDistance, ratePerKm, estimatedFare: calculatedFare }), '_blank');

  // Shared input style
  const inp = 'w-full bg-white border border-slate-200 rounded-xl text-sm text-slate-800 placeholder:text-slate-400 outline-none transition-all focus:border-[#30AFFF] focus:ring-2 focus:ring-[#30AFFF]/10 shadow-sm';

  if (submitted) return (
    <section id="inquiry" className="py-16 bg-gradient-to-br from-[#F0FAFF] to-[#E8F7FF]">
      <div className="max-w-lg mx-auto px-4 text-center space-y-5">
        <div className="w-20 h-20 rounded-full bg-emerald-50 border-2 border-emerald-400 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10 text-emerald-500" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900">Booking Request Received!</h3>
        <p className="text-slate-500 text-sm">We will call <span className="text-slate-800 font-semibold">{formWatch.phone}</span> within 15 minutes.</p>
        {effectiveDistance > 0 && (
          <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm text-left text-xs space-y-2">
            {[['Route', `${formWatch.pickupLocation} → ${formWatch.dropLocation}`], ['Vehicle', currentVehicle.name], ['Fare Estimate', `${effectiveDistance} km · ₹${calculatedFare.toLocaleString('en-IN')}`]].map(([k, v]) => (
              <div key={k} className="flex justify-between">
                <span className="text-slate-400">{k}</span>
                <span className="font-semibold text-slate-800">{v}</span>
              </div>
            ))}
          </div>
        )}
        <div className="flex gap-3 pt-2">
          <button onClick={openWhatsApp} className="flex-1 py-2 rounded-xl font-bold text-sm bg-emerald-500 text-white hover:bg-emerald-600 flex items-center justify-center gap-2 transition-colors cursor-pointer">
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </button>
          <button onClick={() => setSubmitted(false)} className="flex-1 py-2 rounded-xl text-sm text-slate-600 border border-slate-200 hover:border-[#30AFFF] hover:text-[#30AFFF] transition-colors cursor-pointer">
            Book Again
          </button>
        </div>
      </div>
    </section>
  );

  return (
    <section id="inquiry" className="py-6 sm:py-10 bg-gradient-to-br from-[#F0FAFF] via-white to-[#EBF5FF] relative">
      {/* Subtle background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#30AFFF]/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#30AFFF]/4 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-3 sm:mb-5">
          <span className="inline-block text-[10px] font-bold text-[#30AFFF] uppercase tracking-[0.2em] bg-[#30AFFF]/10 px-3 py-0.5 rounded-full mb-1">
            Instant Fare Calculator
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">
            Plan Your Ride & Check Fare
          </h2>
          <p className="mt-0.5 sm:mt-1 text-slate-500 text-[11px] sm:text-xs md:text-sm">Select cities, pick your vehicle and get an instant price estimate.</p>
        </div>

        {/* Main Card */}
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl shadow-slate-900/10 border border-[#bde9ff] bg-white">
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="h-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 h-full">

              {/* ── LEFT PANEL: deep blue gradient ── */}
              <div className="lg:col-span-5 bg-gradient-to-b from-[#0a2a3d] to-[#0d3b57] p-3 sm:p-5 flex flex-col gap-2.5 sm:gap-3">

                {/* Trip Type 2x2 Grid — smaller font size */}
                <div>
                  <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1.5">Choose Trip Type</p>
                  <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                    {TRIP_TYPES.map(({ id, label, icon: Icon }) => {
                      const active = currentTripType === id;
                      return (
                        <button
                          key={id} type="button"
                          onClick={() => setValue('tripType', id as BookingFormValues['tripType'])}
                          className={`py-1.5 sm:py-2 px-2 sm:px-2.5 rounded-xl text-[10px] sm:text-[11px] font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5 border ${
                            active
                              ? 'bg-[#30AFFF] text-white border-[#30AFFF] shadow-md shadow-[#30AFFF]/25'
                              : 'bg-white/6 hover:bg-white/10 text-slate-300 hover:text-white border-white/10'
                          }`}
                        >
                          <Icon className={`w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0 ${active ? 'text-white' : 'text-[#30AFFF]'}`} />
                          <span className="truncate">{label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Route Selector — Stacked Up & Down */}
                <div>
                  <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1">Route</p>
                  <div>
                    {/* Pickup */}
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center pointer-events-none">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      </div>
                      <select
                        value={currentPickup}
                        onChange={(e) => { setValue('pickupLocation', e.target.value); updateRoute(e.target.value, currentDrop); }}
                        className="w-full pl-9 pr-8 py-2 bg-white/8 hover:bg-white/12 border border-white/10 focus:border-[#30AFFF]/60 rounded-xl text-[11px] sm:text-xs text-white appearance-none cursor-pointer outline-none transition-all"
                        style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
                      >
                        {MAJOR_CITIES.map((c) => <option key={c} value={c} className="bg-[#0a2a3d] text-white">{c}</option>)}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
                    </div>

                    {/* Compact circular Swap Button */}
                    <div className="flex items-center justify-center -my-2.5 z-10 relative">
                      <button
                        type="button" onClick={handleSwap}
                        title="Swap Pickup and Drop"
                        className="w-6 h-6 rounded-full border border-white/20 bg-[#0a2a3d] hover:bg-[#30AFFF] text-slate-400 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-md active:scale-95"
                      >
                        <ArrowUpDown className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Drop */}
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#30AFFF]/20 flex items-center justify-center pointer-events-none">
                        <MapPin className="w-2.5 h-2.5 text-[#30AFFF]" />
                      </div>
                      <select
                        value={currentDrop}
                        onChange={(e) => { setValue('dropLocation', e.target.value); updateRoute(currentPickup, e.target.value); }}
                        className="w-full pl-9 pr-8 py-2 border border-white/10 focus:border-[#30AFFF]/60 rounded-xl text-[11px] sm:text-xs text-white appearance-none cursor-pointer outline-none transition-all"
                        style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
                      >
                        {MAJOR_CITIES.map((c) => <option key={c} value={c} className="bg-[#0a2a3d] text-white">{c}</option>)}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Distance Pill */}
                <div className="flex items-center justify-between p-2 sm:p-2.5 rounded-xl border border-white/10" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                  <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#30AFFF]/15 flex items-center justify-center shrink-0">
                      {isCalculating ? <Loader2 className="w-3.5 h-3.5 text-[#30AFFF] animate-spin" /> : <Route className="w-3.5 h-3.5 text-[#30AFFF]" />}
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-semibold text-slate-300">Estimated Distance</div>
                      <div className="text-[9px] sm:text-[10px] text-slate-400 truncate">{currentPickup} → {currentDrop}</div>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-sm sm:text-base font-black text-white">{routeData ? `${baseDistance} km` : '—'}</div>
                    {routeData?.durationText && (
                      <div className="text-[9px] sm:text-[10px] text-slate-400 flex items-center gap-1 justify-end">
                        <Clock className="w-2.5 h-2.5" /> ~{routeData.durationText}
                      </div>
                    )}
                  </div>
                </div>

                {/* Passengers + Date */}
                <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                  <div className="relative">
                    <Users className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
                    <select
                      value={currentPassengers}
                      onChange={(e) => setValue('passengers', Number(e.target.value))}
                      className="w-full pl-7 sm:pl-8 pr-6 py-2 border border-white/10 focus:border-[#30AFFF]/60 rounded-xl text-[11px] sm:text-xs text-white appearance-none cursor-pointer outline-none transition-all"
                      style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
                    >
                      {[1,2,3,4,5,6,7].map((n) => <option key={n} value={n} className="bg-[#0a2a3d]">{n} Pax</option>)}
                      <option value={8} className="bg-[#0a2a3d]">8–12 Pax</option>
                      <option value={15} className="bg-[#0a2a3d]">13–17 Pax</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
                  </div>
                  <div className="relative">
                    <Calendar className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
                    <input
                      type="date"
                      {...register('tripDate')}
                      className="w-full pl-7 sm:pl-8 pr-2 py-2 border border-white/10 focus:border-[#30AFFF]/60 rounded-xl text-[11px] sm:text-xs text-white cursor-pointer outline-none transition-all"
                      style={{ backgroundColor: 'rgba(255,255,255,0.06)', colorScheme: 'dark' }}
                    />
                  </div>
                </div>

                {/* Name & Phone — Full Width Inputs */}
                <div className="space-y-2 sm:space-y-2.5">
                  <input
                    type="text" placeholder="Your Name"
                    {...register('name')}
                    className="w-full px-3 py-2 border border-white/10 focus:border-[#30AFFF]/60 rounded-xl text-[11px] sm:text-xs text-white placeholder:text-slate-500 outline-none transition-all"
                    style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
                  />
                  <input
                    type="tel" placeholder="Mobile Number"
                    {...register('phone')}
                    className="w-full px-3 py-2 border border-white/10 focus:border-[#30AFFF]/60 rounded-xl text-[11px] sm:text-xs text-white placeholder:text-slate-500 outline-none transition-all"
                    style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
                  />
                </div>
                {(errors.name || errors.phone) && (
                  <p className="text-[10px] text-red-400">{errors.name?.message || errors.phone?.message}</p>
                )}

                {/* Notes / Special Requests — generous height so text flows naturally */}
                <div className="flex-1 flex flex-col min-h-[72px] sm:min-h-[84px] lg:min-h-0">
                  <textarea
                    placeholder="Special requests or instructions (optional)..."
                    {...register('message', {
                      onChange: handleNotesChange,
                    })}
                    className={`w-full h-20 sm:h-24 lg:h-full lg:flex-1 min-h-[72px] sm:min-h-[84px] px-3 py-2.5 border border-white/10 focus:border-[#30AFFF]/60 rounded-xl text-[11px] sm:text-xs text-white placeholder:text-slate-400 outline-none transition-all resize-none leading-relaxed ${
                      hasNotesScroll
                        ? 'overflow-y-auto [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.3)_transparent] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/25 [&::-webkit-scrollbar-thumb]:rounded-full'
                        : 'overflow-hidden'
                    }`}
                    style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
                  />
                </div>

              </div>

              {/* ── RIGHT PANEL: white / light ── */}
              <div className="lg:col-span-7 p-3 sm:p-5 flex flex-col gap-2.5 sm:gap-3 bg-slate-50/50 border-t lg:border-t-0 lg:border-l border-[#bde9ff]">

                {/* Vehicle Cards */}
                <div>
                  <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1">Choose Vehicle</p>
                  <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                    {VEHICLE_OPTIONS.map((car) => {
                      const sel = selectedVehicleId === car.id;
                      const displayName = car.id === 'traveller' ? '7+ Seater' : car.name;
                      const displayCat = car.id === 'sedan' ? 'Dzire' : car.id === 'ertiga' ? 'Ertiga' : 'Traveller';
                      return (
                        <button
                          key={car.id} type="button"
                          onClick={() => setSelectedVehicleId(car.id)}
                          className={`relative p-1.5 sm:p-2.5 rounded-xl border-2 text-left transition-all cursor-pointer overflow-hidden ${
                            sel ? 'border-[#30AFFF] bg-[#30AFFF]/5 shadow-sm' : 'border-[#bde9ff] bg-white hover:border-[#30AFFF]/50'
                          }`}
                        >
                          <div className="relative">
                            <div className="flex items-center justify-between gap-1">
                              <span className="text-[11px] sm:text-xs font-bold text-slate-800 leading-tight truncate">
                                {displayName}
                              </span>
                              {sel && <Check className="w-3 h-3 text-[#30AFFF] shrink-0" />}
                            </div>
                            <div className="flex items-center justify-between mt-1 gap-1">
                              <span className="text-[9px] sm:text-[10px] text-slate-400 truncate">{displayCat}</span>
                              <span className={`text-[10px] sm:text-xs font-bold shrink-0 ${sel ? 'text-[#30AFFF]' : 'text-slate-700'}`}>
                                ₹{car.ratePerKm}/km
                              </span>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Car Showcase */}
                <div className="rounded-xl bg-white border border-[#bde9ff] shadow-sm overflow-hidden">
                  {/* Showcase header */}
                  <div className="px-2.5 py-1.5 sm:px-3.5 sm:py-2 flex items-center justify-between border-b border-[#bde9ff]/60 gap-1.5">
                    <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                      <h4 className="text-xs sm:text-sm font-bold text-slate-800 truncate">{currentVehicle.name}</h4>
                      <span className="text-[10px] text-slate-400 font-medium truncate hidden sm:inline">
                        ({currentVehicle.category})
                      </span>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
                      <span className="flex items-center gap-1 text-[9px] sm:text-[10px] font-medium px-1.5 py-0.5 sm:px-2 rounded-md bg-slate-50 border border-[#bde9ff]/60 text-slate-600 whitespace-nowrap">
                        <Users className="w-2.5 h-2.5 text-[#30AFFF]" /> {currentVehicle.passengers} Seats
                      </span>
                      <span className="flex items-center gap-1 text-[9px] sm:text-[10px] font-medium px-1.5 py-0.5 sm:px-2 rounded-md bg-slate-50 border border-[#bde9ff]/60 text-slate-600 whitespace-nowrap">
                        <Briefcase className="w-2.5 h-2.5 text-[#30AFFF]" /> {currentVehicle.luggage} Bags
                      </span>
                    </div>
                  </div>

                  {/* Car Image — responsive height so mobile stays compact */}
                  <div className="relative h-28 sm:h-36 lg:h-40 w-full bg-gradient-to-b from-slate-50/80 to-white px-3">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentVehicle.id}
                        initial={{ opacity: 0, x: -60, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 60, scale: 0.95 }}
                        transition={{ duration: 0.28, ease: 'easeInOut' }}
                        className="relative w-full h-full"
                      >
                        <Image
                          src={currentVehicle.image}
                          alt={currentVehicle.name}
                          fill
                          priority
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, 55vw"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Features */}
                  <div className="px-2.5 py-1.5 sm:px-3.5 grid grid-cols-2 gap-x-2 gap-y-0.5 sm:gap-y-1 border-t border-[#bde9ff]/60">
                    {currentVehicle.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-1 text-[9px] sm:text-[10px] text-slate-500">
                        <Check className="w-2.5 h-2.5 text-[#30AFFF] shrink-0" />
                        <span className="truncate">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price + Buttons */}
                <div className="space-y-2 sm:space-y-2.5">
                  {/* Fare display */}
                  <div className="flex items-center justify-between px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl bg-gradient-to-r from-[#0a2a3d] to-[#0d3b57] shadow-md border border-white/5">
                    <div>
                      <div className="text-[9px] sm:text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Estimated Fare</div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-lg sm:text-2xl font-black text-white tracking-tight">
                          {calculatedFare > 0 ? `₹${calculatedFare.toLocaleString('en-IN')}` : '—'}
                        </span>
                        <span className="text-[9px] sm:text-[10px] text-slate-400 font-normal">*(Tolls/tax extra)</span>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                        ₹{ratePerKm}/km
                      </div>
                      <div className="text-[9px] sm:text-[10px] text-slate-400 mt-0.5">
                        {effectiveDistance > 0 ? `${effectiveDistance} km total` : (isRoundTrip ? 'Round-Trip' : 'One-Way')}
                      </div>
                    </div>
                  </div>

                  {/* CTA buttons */}
                  <div className="flex gap-2 sm:gap-2.5">
                    <button
                      type="submit" disabled={loading}
                      className="flex-1 py-2.5 sm:py-3 px-3 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-[#FFC107] to-[#F59E0B] hover:from-[#FFCA28] hover:to-[#FFA000] text-[#071828] shadow-md shadow-amber-500/20 active:scale-[0.99] transition-all disabled:opacity-50 flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer whitespace-nowrap overflow-hidden"
                    >
                      {loading ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <>
                          <Car className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                          <span className="truncate">Book {currentVehicle.id === 'traveller' ? 'Traveller' : currentVehicle.name}</span>
                          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                        </>
                      )}
                    </button>
                    <button
                      type="button" onClick={openWhatsApp}
                      title="Book via WhatsApp"
                      className="py-2.5 sm:py-3 px-3.5 sm:px-4 rounded-xl font-bold text-xs sm:text-sm bg-emerald-500 hover:bg-emerald-600 text-white shadow-md shadow-emerald-500/20 active:scale-[0.99] transition-all flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
