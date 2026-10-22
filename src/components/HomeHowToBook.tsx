import React from 'react';
import { FileText, MessageSquareCheck, Car, ChevronRight } from 'lucide-react';

export default function HomeHowToBook() {
  const steps = [
    {
      number: '01',
      title: 'Share Trip Details',
      description:
        'Tell us your pickup location, destination, travel date, time, and preferred car type (Dzire sedan, Ertiga MUV, or Tempo Traveller) via our quick form, phone call, or WhatsApp.',
      icon: FileText,
    },
    {
      number: '02',
      title: 'Get Fixed Fare Confirmation',
      description:
        'We promptly reply with your transparent fixed quote on WhatsApp or phone call. No hidden surge pricing, no unexpected meter surprises.',
      icon: MessageSquareCheck,
    },
    {
      number: '03',
      title: 'Driver Arrives at Your Door',
      description:
        'Your verified driver arrives punctually at your chosen pickup address in a clean, sanitized AC car, ready for a safe and comfortable journey.',
      icon: Car,
    },
  ];

  return (
    <section className="py-20 bg-[#EBF9FF] border-b border-[#bde9ff]">
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#92EEFF]/30 border border-[#bde9ff]">
            <span className="text-xs font-bold text-[#0284c7] uppercase tracking-wider">
              Simple 3-Step Process
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a2a3d]">
            How to Book a Cab with Velora Cabs
          </h2>
          <p className="text-sm sm:text-base text-[#2d6180] leading-relaxed">
            Booking your intercity or local cab in Bhavnagar and Gujarat takes less than 2 minutes.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-[#bde9ff] shadow-xs relative flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#EBF9FF] border border-[#bde9ff] flex items-center justify-center text-[#0284c7]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-black text-[#92EEFF]/80">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0a2a3d]">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#2d6180] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {idx < 2 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-[#EBF9FF] border border-[#bde9ff] flex items-center justify-center text-[#0284c7]">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA to Inquiry Form */}
        <div className="text-center pt-2">
          <a
            href="#inquiry"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0a2a3d] hover:bg-[#123952] text-white text-sm font-extrabold shadow-md transition-all active:scale-95"
          >
            <span>Book Your Ride Now</span>
            <ChevronRight className="w-4 h-4 text-[#92EEFF]" />
          </a>
        </div>

      </div>
    </section>
  );
}
