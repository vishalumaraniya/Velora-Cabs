import Link from 'next/link';
import { ShieldCheck, Award, Clock, MapPin, ArrowRight } from 'lucide-react';

export default function HomeAbout() {
  return (
    <section className="py-20 bg-white border-b border-[#bde9ff]">
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#92EEFF]/30 border border-[#bde9ff]">
              <ShieldCheck className="w-4 h-4 text-[#0284c7]" />
              <span className="text-xs font-bold text-[#0284c7] uppercase tracking-wider">
                About Velora Cabs
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a2a3d] leading-tight">
              Your Trusted Taxi Service Partner Based in Bhavnagar, Gujarat
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#2d6180] leading-relaxed">
              <p>
                Founded in Bhavnagar {/* TODO: owner to confirm founding year */}, Velora Cabs was established to bring reliable, punctuality-focused, and comfortable cab hire across Saurashtra, Central Gujarat, South Gujarat, and interstate routes to Mumbai.
              </p>
              <p>
                Whether you need early-morning airport transfers to Ahmedabad SVPI Airport, corporate travel between industrial corridors like Bharuch, Dahej, and Vapi, or sacred pilgrimage yatras to Palitana Shatrunjaya, our fleet of well-maintained AC sedans, MUVs, and Tempo Travellers is ready 24 hours a day, 7 days a week.
              </p>
              <p className="text-xs text-[#5c9ab8] italic">
                * Note: Velora Cabs operates under Gujarat transport guidelines {/* TODO: owner to confirm commercial registration / permit details */}.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0a2a3d] hover:bg-[#123952] text-white text-xs sm:text-sm font-bold shadow-xs transition-all"
              >
                <span>Read Our Full Story</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#92EEFF]" />
              </Link>
              <Link
                href="/fleet"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-[#bde9ff] text-[#0a2a3d] hover:bg-[#EBF9FF] text-xs sm:text-sm font-bold transition-all"
              >
                <span>Inspect Fleet Vehicles</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Key Pillars Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#EBF9FF] p-5 rounded-2xl border border-[#bde9ff] space-y-2">
              <div className="w-9 h-9 rounded-xl bg-white border border-[#bde9ff] flex items-center justify-center text-[#0284c7]">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#0a2a3d]">24x7 Round-The-Clock</h3>
              <p className="text-xs text-[#2d6180]">
                Midnight airport departures or emergency hospital trips — our dispatchers answer every call.
              </p>
            </div>

            <div className="bg-[#EBF9FF] p-5 rounded-2xl border border-[#bde9ff] space-y-2">
              <div className="w-9 h-9 rounded-xl bg-white border border-[#bde9ff] flex items-center justify-center text-[#28A745]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#0a2a3d]">Verified Highway Drivers</h3>
              <p className="text-xs text-[#2d6180]">
                Polite, licensed chauffeurs with deep experience on major Gujarat state & national highways.
              </p>
            </div>

            <div className="bg-[#EBF9FF] p-5 rounded-2xl border border-[#bde9ff] space-y-2">
              <div className="w-9 h-9 rounded-xl bg-white border border-[#bde9ff] flex items-center justify-center text-[#0284c7]">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#0a2a3d]">Doorstep Convenience</h3>
              <p className="text-xs text-[#2d6180]">
                No lugging heavy bags to bus stands. We pick you up right from your home or hotel gate.
              </p>
            </div>

            <div className="bg-[#EBF9FF] p-5 rounded-2xl border border-[#bde9ff] space-y-2">
              <div className="w-9 h-9 rounded-xl bg-white border border-[#bde9ff] flex items-center justify-center text-[#F59E0B]">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#0a2a3d]">Fixed Fare Quotes</h3>
              <p className="text-xs text-[#2d6180]">
                All fares shared clearly upfront with zero surprises at the end of your trip.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
