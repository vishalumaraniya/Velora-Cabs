'use client';

import React from 'react';

// 1. Dedicated Illuminated TAXI Roof Sign & City Location Pin Vector (First Yellow Card)
export function CityCabMapGlassVector({ className = 'w-36 h-36 text-amber-400' }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="taxiBoxGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.4" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {/* Radar Location Circle Grid */}
      <circle cx="90" cy="70" r="58" stroke="currentColor" strokeWidth="1.5" opacity="0.2" strokeDasharray="4 3" />
      <circle cx="90" cy="70" r="42" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />

      {/* TAXI Roof Box Contour */}
      <path
        d="M 32 82 L 48 42 C 52 34 60 30 72 30 L 108 30 C 120 30 128 34 132 42 L 148 82 C 151 88 146 94 136 94 L 44 94 C 34 94 29 88 32 82 Z"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="url(#taxiBoxGoldGrad)"
      />

      {/* Inner Rim Light Line */}
      <path
        d="M 52 46 C 55 41 62 38 72 38 L 108 38 C 118 38 125 41 128 46 L 140 82 L 40 82 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.4"
      />

      {/* TAXI Bold Typography */}
      <text x="90" y="72" textAnchor="middle" fill="currentColor" fontSize="28" fontWeight="900" letterSpacing="4">
        TAXI
      </text>

      {/* Roof Mount Bar Base */}
      <rect x="52" y="94" width="76" height="7" rx="3" fill="currentColor" opacity="0.8" />
      <rect x="62" y="101" width="12" height="8" fill="currentColor" opacity="0.6" />
      <rect x="106" y="101" width="12" height="8" fill="currentColor" opacity="0.6" />

      {/* Side Decorative Stars */}
      <polygon points="42,32 44,37 49,37 45,40 47,45 42,42 37,45 39,40 35,37 40,37" fill="currentColor" opacity="0.8" />
      <polygon points="138,32 140,37 145,37 141,40 143,45 138,42 133,45 135,40 131,37 136,37" fill="currentColor" opacity="0.8" />

      {/* Ground Road Line */}
      <line x1="10" y1="118" x2="170" y2="118" stroke="currentColor" strokeWidth="2" strokeDasharray="6 3" opacity="0.5" />
    </svg>
  );
}

// 2. Travelling Luggage Suitcases Vector for Airport Flight Transfers (Cyan Card)
export function TravelBagsGlassVector({ className = 'w-36 h-36 text-cyan-400' }: { className?: string }) {
  return (
    <svg viewBox="0 0 170 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="bagGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.08" />
        </linearGradient>
      </defs>

      {/* Flight Trajectory Trail Arc overhead */}
      <path d="M 20 50 Q 80 15 150 25" stroke="currentColor" strokeWidth="2" strokeDasharray="4 3" opacity="0.4" />
      <polygon points="150,25 140,20 142,27" fill="currentColor" opacity="0.7" />

      {/* Trolley Suitcase Handle */}
      <path d="M 58 48 L 58 18 L 86 18 L 86 48" stroke="currentColor" strokeWidth="3" opacity="0.8" strokeLinecap="round" />
      <rect x="62" y="14" width="20" height="6" rx="2" fill="currentColor" opacity="0.9" />

      {/* Main Rolling Suitcase */}
      <rect
        x="42"
        y="48"
        width="60"
        height="82"
        rx="10"
        stroke="currentColor"
        strokeWidth="3.5"
        fill="url(#bagGrad)"
      />

      {/* Suitcase Front Grooves */}
      <rect x="52" y="62" width="40" height="54" rx="6" stroke="currentColor" strokeWidth="2" opacity="0.5" fill="none" />
      <line x1="52" y1="78" x2="92" y2="78" stroke="currentColor" strokeWidth="2" opacity="0.4" />
      <line x1="52" y1="94" x2="92" y2="94" stroke="currentColor" strokeWidth="2" opacity="0.4" />

      {/* Suitcase Corner Protectors */}
      <path d="M 42 60 C 42 54 48 48 54 48" stroke="currentColor" strokeWidth="3.5" />
      <path d="M 102 60 C 102 54 96 48 90 48" stroke="currentColor" strokeWidth="3.5" />

      {/* Luggage Flight Tag */}
      <path d="M 88 48 L 102 34 L 108 40 L 94 54 Z" fill="currentColor" opacity="0.7" />
      <circle cx="102" cy="38" r="2" fill="#0b0b0e" />

      {/* Wheels */}
      <circle cx="54" cy="133" r="5" stroke="currentColor" strokeWidth="2.5" fill="#0b0b0e" />
      <circle cx="90" cy="133" r="5" stroke="currentColor" strokeWidth="2.5" fill="#0b0b0e" />

      {/* Secondary Duffel / Travel Bag next to suitcase */}
      <rect
        x="98"
        y="80"
        width="48"
        height="50"
        rx="8"
        stroke="currentColor"
        strokeWidth="3"
        fill="url(#bagGrad)"
      />
      {/* Duffel Straps */}
      <path d="M 108 80 C 108 68 136 68 136 80" stroke="currentColor" strokeWidth="2.5" fill="none" />
      <line x1="112" y1="80" x2="112" y2="130" stroke="currentColor" strokeWidth="2" opacity="0.5" />
      <line x1="132" y1="80" x2="132" y2="130" stroke="currentColor" strokeWidth="2" opacity="0.5" />

      {/* Ground Line */}
      <line x1="20" y1="138" x2="155" y2="138" stroke="currentColor" strokeWidth="2" strokeDasharray="5 3" opacity="0.5" />
    </svg>
  );
}

// 3. 24x7 Emergency Express Cab Siren & Clock Shield Vector (Red Card)
export function EmergencyExpressGlassVector({ className = 'w-36 h-36 text-rose-400' }: { className?: string }) {
  return (
    <svg viewBox="0 0 170 170" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="emergencyGlowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.35" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.08" />
        </linearGradient>
      </defs>

      {/* Emergency Siren Pulse Waves */}
      <path d="M 30 50 A 65 65 0 0 1 140 50" stroke="currentColor" strokeWidth="2" strokeDasharray="4 3" opacity="0.4" />
      <path d="M 20 40 A 80 80 0 0 1 150 40" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.25" />

      {/* 24x7 Emergency Shield Contour */}
      <path
        d="M 85 24 L 138 44 C 138 95, 85 138, 85 138 C 85 138, 32 95, 32 44 Z"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="url(#emergencyGlowGrad)"
      />

      {/* Inner Shield Rim */}
      <path
        d="M 85 36 L 126 52 C 126 90, 85 124, 85 124 C 85 124, 44 90, 44 52 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.4"
      />

      {/* 24x7 Clock Dial inside Shield */}
      <circle cx="85" cy="74" r="22" stroke="currentColor" strokeWidth="2.5" fill="#0b0b0e" />
      <polyline points="85,60 85,74 96,74" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />

      {/* 24/7 Bold Badge Banner */}
      <rect x="58" y="102" width="54" height="20" rx="5" fill="#0b0b0e" stroke="currentColor" strokeWidth="2" />
      <text x="85" y="116" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="900" letterSpacing="1">
        24 / 7
      </text>

      {/* Emergency Flash / Lightning Surge Icon */}
      <polygon points="126,20 114,36 124,36 112,54 134,32 122,32" fill="currentColor" opacity="0.9" />
    </svg>
  );
}

// 4. Sleek Sedan Silhouette Vector
export function CabSilhouetteGlassVector({ className = 'w-36 h-36 text-amber-400' }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 130" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="headlightBeamGlow" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.7" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="carBodyGlowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.2" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      {/* Headlight Projection Beam */}
      <polygon points="182,72 220,50 220,94" fill="url(#headlightBeamGlow)" opacity="0.6" />
      <line x1="182" y1="72" x2="220" y2="72" stroke="currentColor" strokeWidth="2" opacity="0.8" />

      {/* Roof TAXI Light Sign Badge */}
      <path d="M 96 22 L 102 14 L 124 14 L 130 22 Z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.4" />
      <text x="113" y="20" textAnchor="middle" fill="#0b0b0e" fontSize="7" fontWeight="900">TAXI</text>

      {/* Sedan Body Main Outline */}
      <path
        d="M 16 78 L 32 78 C 36 64 54 64 58 78 L 138 78 C 142 64 160 64 164 78 L 186 78 C 194 78 198 72 194 62 C 188 48 170 46 158 46 L 136 24 C 124 14 84 12 58 22 L 34 46 C 20 46 8 56 16 78 Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="url(#carBodyGlowGrad)"
      />

      {/* Window Frames */}
      <path
        d="M 44 44 L 62 22 C 80 17 118 19 126 26 L 146 44 Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="currentColor"
        fillOpacity="0.15"
      />
      <line x1="94" y1="20" x2="94" y2="44" stroke="currentColor" strokeWidth="2" />

      {/* Door Handles */}
      <rect x="76" y="52" width="10" height="2.5" rx="1" fill="currentColor" opacity="0.8" />
      <rect x="118" y="52" width="10" height="2.5" rx="1" fill="currentColor" opacity="0.8" />

      {/* Rear Wheel */}
      <circle cx="45" cy="78" r="14" stroke="currentColor" strokeWidth="2.5" fill="#0b0b0e" />
      <circle cx="45" cy="78" r="7" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />

      {/* Front Wheel */}
      <circle cx="151" cy="78" r="14" stroke="currentColor" strokeWidth="2.5" fill="#0b0b0e" />
      <circle cx="151" cy="78" r="7" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />

      {/* Ground Line */}
      <path d="M 8 92 L 180 92" stroke="currentColor" strokeWidth="2" strokeDasharray="6 3" opacity="0.5" />
    </svg>
  );
}

// 5. High-Tech Speedometer Gauge Vector
export function SpeedometerGlassVector({ className = 'w-36 h-36 text-cyan-400' }: { className?: string }) {
  return (
    <svg viewBox="0 0 170 170" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="85" cy="85" r="76" stroke="currentColor" strokeWidth="1.5" opacity="0.2" strokeDasharray="3 3" />
      <path
        d="M 32 138 A 70 70 0 1 1 138 138"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.3"
      />
      <path
        d="M 32 138 A 70 70 0 0 1 125 48"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.8"
      />
      {[...Array(11)].map((_, i) => {
        const angle = -135 + i * 27;
        const rad = (angle * Math.PI) / 180;
        const isMajor = i % 2 === 0;
        const x1 = 85 + (isMajor ? 54 : 58) * Math.cos(rad);
        const y1 = 85 + (isMajor ? 54 : 58) * Math.sin(rad);
        const x2 = 85 + 66 * Math.cos(rad);
        const y2 = 85 + 66 * Math.sin(rad);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth={isMajor ? '2.5' : '1.5'}
            opacity={isMajor ? '0.85' : '0.4'}
          />
        );
      })}
      <circle cx="85" cy="85" r="14" stroke="currentColor" strokeWidth="2.5" fill="#0b0b0e" />
      <circle cx="85" cy="85" r="5" fill="currentColor" />
      <line x1="85" y1="85" x2="120" y2="50" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <rect x="60" y="112" width="50" height="20" rx="5" fill="#0b0b0e" stroke="currentColor" strokeWidth="1.5" opacity="0.8" />
      <text x="85" y="126" textAnchor="middle" fill="currentColor" fontSize="10" fontWeight="800">
        120 KM/H
      </text>
    </svg>
  );
}

// 6. Sports Steering Wheel Vector
export function SteeringWheelGlassVector({ className = 'w-36 h-36 text-rose-400' }: { className?: string }) {
  return (
    <svg viewBox="0 0 170 170" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="85" cy="85" r="72" stroke="currentColor" strokeWidth="5" opacity="0.25" />
      <circle cx="85" cy="85" r="78" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <path d="M 22 62 C 16 78 16 92 22 108" stroke="currentColor" strokeWidth="7" opacity="0.5" strokeLinecap="round" />
      <path d="M 148 62 C 154 78 154 92 148 108" stroke="currentColor" strokeWidth="7" opacity="0.5" strokeLinecap="round" />
      <circle cx="85" cy="85" r="26" stroke="currentColor" strokeWidth="2.5" fill="#0b0b0e" />
      <polygon points="85,74 92,88 78,88" fill="currentColor" opacity="0.8" />
      <path d="M 24 80 L 57 83 M 24 90 L 57 88" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M 146 80 L 113 83 M 146 90 L 113 88" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M 80 113 L 81 155 M 90 113 L 89 155" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}

// 7. GPS Route Map Navigation Vector
export function RouteMapGlassVector({ className = 'w-36 h-36 text-violet-400' }: { className?: string }) {
  return (
    <svg viewBox="0 0 170 170" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="45" cy="125" r="18" stroke="currentColor" strokeWidth="1.5" opacity="0.3" strokeDasharray="3 3" />
      <circle cx="125" cy="45" r="20" stroke="currentColor" strokeWidth="1.5" opacity="0.3" strokeDasharray="3 3" />
      <path
        d="M 45 125 C 45 75, 120 110, 125 45"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="6 4"
        opacity="0.85"
      />
      <circle cx="45" cy="125" r="9" fill="currentColor" opacity="0.9" />
      <circle cx="45" cy="125" r="14" stroke="currentColor" strokeWidth="2" opacity="0.5" />
      <text x="45" y="129" textAnchor="middle" fill="#0b0b0e" fontSize="10" fontWeight="900">A</text>
      <path
        d="M 125 24 C 117 24 110 31 110 40 C 110 54 125 66 125 66 C 125 66 140 54 140 40 C 140 31 133 24 125 24 Z"
        fill="currentColor"
        opacity="0.9"
      />
      <circle cx="125" cy="38" r="4" fill="#0b0b0e" />
    </svg>
  );
}

// 8. Classic Illuminated TAXI Roof Badge Light
export function TaxiBadgeGlassVector({ className = 'w-36 h-36 text-amber-400' }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M 30 85 L 45 45 C 48 38 55 35 65 35 L 115 35 C 125 35 132 38 135 45 L 150 85 C 152 90 148 95 140 95 L 40 95 C 32 95 28 90 30 85 Z"
        stroke="currentColor"
        strokeWidth="3"
        fill="currentColor"
        fillOpacity="0.08"
      />
      <text x="90" y="74" textAnchor="middle" fill="currentColor" fontSize="24" fontWeight="900" letterSpacing="4">
        TAXI
      </text>
      <rect x="55" y="95" width="70" height="5" rx="2" fill="currentColor" opacity="0.7" />
    </svg>
  );
}

// 9. City Skyline Vector
export function CitySkylineGlassVector({ className = 'w-36 h-36 text-violet-400' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M 10 100 L 10 70 L 25 70 L 25 50 L 40 50 L 40 80 L 50 80 L 50 30 L 70 20 L 90 30 L 90 85 L 105 85 L 105 45 L 130 45 L 130 65 L 145 65 L 145 35 L 165 35 L 165 75 L 180 75 L 180 90 L 190 90 L 190 100 Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="currentColor"
        fillOpacity="0.08"
      />
      <rect x="0" y="100" width="200" height="10" fill="currentColor" opacity="0.15" />
      <line x1="0" y1="100" x2="200" y2="100" stroke="currentColor" strokeWidth="2" opacity="0.8" />
    </svg>
  );
}

// -----------------------------------------------------------------------------
// DEDICATED VECTORS FOR WHY CHOOSE VELORA SECTION (6 CORE REASONS)
// -----------------------------------------------------------------------------

// 1. Safety Vector (Card 01): Man Seated in Car Seat with Fastened Seatbelt
export function WhyUsSafetyVector({ className = 'w-44 h-44 text-amber-400' }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="seatGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.4" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {/* Safety Radar Circle Glow */}
      <circle cx="90" cy="82" r="76" stroke="currentColor" strokeWidth="1.5" opacity="0.15" strokeDasharray="4 4" />

      {/* Car Seat Backrest & Cushion Contour */}
      {/* Headrest */}
      <rect x="74" y="16" width="32" height="22" rx="8" stroke="currentColor" strokeWidth="3" fill="#0b0b0e" />
      <line x1="82" y1="38" x2="82" y2="44" stroke="currentColor" strokeWidth="2.5" />
      <line x1="98" y1="38" x2="98" y2="44" stroke="currentColor" strokeWidth="2.5" />

      {/* Main Seat Backrest Upholstery */}
      <path
        d="M 54 44 C 48 44 44 50 44 58 L 46 124 Q 46 140 62 140 L 118 140 Q 134 140 134 124 L 136 58 C 136 50 132 44 126 44 Z"
        stroke="currentColor"
        strokeWidth="3.5"
        fill="url(#seatGrad)"
      />
      {/* Upholstery Stitching Lines */}
      <path d="M 60 54 Q 90 64 120 54 M 62 84 Q 90 94 118 84 M 64 114 Q 90 124 116 114" stroke="currentColor" strokeWidth="1" opacity="0.25" fill="none" />

      {/* Man Silhouette Seated Safely in Car Seat */}
      {/* Man's Head */}
      <circle cx="90" cy="58" r="13" fill="currentColor" opacity="0.9" />

      {/* Man's Upper Body Torso */}
      <path
        d="M 62 88 C 62 72 72 70 90 70 C 108 70 118 72 118 88 L 120 128 L 60 128 Z"
        fill="currentColor"
        opacity="0.8"
      />

      {/* Fastened 3-Point Seatbelt (Diagonal Shoulder Strap & Lap Strap) */}
      <line x1="64" y1="50" x2="116" y2="124" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
      <line x1="64" y1="50" x2="116" y2="124" stroke="#0b0b0e" strokeWidth="2" strokeLinecap="round" />

      {/* Lap Seatbelt Strap across Waist */}
      <line x1="62" y1="118" x2="118" y2="122" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />

      {/* Seatbelt Click Buckle Receiver & Latch at Hip */}
      <g transform="translate(110, 114)">
        <rect x="0" y="0" width="14" height="20" rx="4" fill="#0b0b0e" stroke="currentColor" strokeWidth="2.5" />
        <rect x="4" y="4" width="6" height="5" rx="1" fill="currentColor" />
        <circle cx="7" cy="14" r="2.5" fill="currentColor" opacity="0.9" />
      </g>

      {/* Verified Safety Checkmark Seal on Left */}
      <g transform="translate(38, 92)">
        <circle cx="12" cy="12" r="12" fill="#0b0b0e" stroke="currentColor" strokeWidth="2.5" />
        <path d="M 6 12 L 10 16 L 18 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Bottom FASTENED SEATBELT RIDE Badge */}
      <rect x="18" y="148" width="144" height="22" rx="11" fill="#0b0b0e" stroke="currentColor" strokeWidth="2" />
      <text x="90" y="163" textAnchor="middle" fill="currentColor" fontSize="8.5" fontWeight="900" letterSpacing="0.8">
        FASTENED SEATBELT RIDE
      </text>
    </svg>
  );
}

// 2. Verified Drivers Vector (Card 02): Police Clearance Lanyard ID Badge + 5-Star Chauffeur Steering Wheel
export function WhyUsDriverVector({ className = 'w-44 h-44 text-cyan-400' }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.35" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.08" />
        </linearGradient>
      </defs>

      {/* 5 Floating Star Badges Overhead */}
      {[
        { cx: 36, cy: 28 },
        { cx: 63, cy: 18 },
        { cx: 90, cy: 14 },
        { cx: 117, cy: 18 },
        { cx: 144, cy: 28 },
      ].map((star, i) => (
        <g key={i} transform={`translate(${star.cx - 7}, ${star.cy - 7}) scale(0.75)`}>
          <polygon points="10,1 13,7 19,7 14,11 16,17 10,13 4,17 6,11 1,7 7,7" fill="currentColor" opacity="0.95" />
        </g>
      ))}

      {/* Outer Rating Arc */}
      <path d="M 24 62 A 72 72 0 0 1 156 62" stroke="currentColor" strokeWidth="2" strokeDasharray="4 3" opacity="0.3" />

      {/* Steering Wheel Base */}
      <circle cx="90" cy="100" r="54" stroke="currentColor" strokeWidth="4.5" opacity="0.4" fill="none" />
      <circle cx="90" cy="100" r="20" stroke="currentColor" strokeWidth="3" fill="#0b0b0e" />
      <path d="M 36 100 L 70 100 M 110 100 L 144 100 M 90 120 L 90 154" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />

      {/* Police Clearance Lanyard ID Badge Card Overlay in Center */}
      <g transform="translate(54, 36)">
        {/* Lanyard Strap Loop */}
        <path d="M 36 -14 L 36 6" stroke="currentColor" strokeWidth="2.5" strokeDasharray="3 2" />
        <rect x="30" y="4" width="12" height="6" rx="2" fill="currentColor" opacity="0.9" />

        {/* Driver ID Card Body */}
        <rect
          x="4"
          y="10"
          width="64"
          height="84"
          rx="10"
          stroke="currentColor"
          strokeWidth="3"
          fill="url(#cardGrad)"
        />

        {/* Driver Photo Avatar Silhouette */}
        <circle cx="36" cy="34" r="14" fill="#0b0b0e" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="36" cy="28" r="6" fill="currentColor" opacity="0.9" />
        <path d="M 24 44 C 24 38 29 36 36 36 C 43 36 48 38 48 44 Z" fill="currentColor" opacity="0.9" />

        {/* Chauffeur Cap Accent on Photo */}
        <path d="M 27 22 C 27 17 33 15 36 15 C 39 15 45 17 45 22 Z" fill="currentColor" />

        {/* Police Verified Checkmark Badge Seal */}
        <circle cx="52" cy="46" r="9" fill="#0b0b0e" stroke="currentColor" strokeWidth="2" />
        <path d="M 47 46 L 50 49 L 57 42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />

        {/* Driver Name & License Lines */}
        <rect x="14" y="58" width="44" height="4" rx="2" fill="currentColor" opacity="0.85" />
        <rect x="18" y="66" width="36" height="3" rx="1.5" fill="currentColor" opacity="0.5" />
        <rect x="22" y="73" width="28" height="3" rx="1.5" fill="currentColor" opacity="0.5" />
      </g>

      {/* Bottom POLICE VERIFIED DRIVERS Badge */}
      <rect x="18" y="148" width="144" height="22" rx="11" fill="#0b0b0e" stroke="currentColor" strokeWidth="2" />
      <text x="90" y="163" textAnchor="middle" fill="currentColor" fontSize="8.5" fontWeight="900" letterSpacing="0.8">
        POLICE VERIFIED DRIVERS
      </text>
    </svg>
  );
}

// 3. 24/7 Availability Vector (Card 03): Enhanced 24/7 Infinity Loop & Night/Day Horizons
export function WhyUsClock247Vector({ className = 'w-44 h-44 text-rose-400' }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="infinityGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.4" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.08" />
        </linearGradient>
      </defs>

      {/* Day / Night Horizon Split Arcs */}
      {/* Sun Arc (Left Top) */}
      <path d="M 28 80 A 62 62 0 0 1 90 28" stroke="currentColor" strokeWidth="2" strokeDasharray="4 3" opacity="0.4" />
      <circle cx="46" cy="46" r="8" fill="currentColor" opacity="0.9" />
      <line x1="46" y1="32" x2="46" y2="36" stroke="currentColor" strokeWidth="2" />
      <line x1="32" y1="46" x2="36" y2="46" stroke="currentColor" strokeWidth="2" />

      {/* Crescent Moon Arc (Right Top) */}
      <path d="M 90 28 A 62 62 0 0 1 152 80" stroke="currentColor" strokeWidth="2" strokeDasharray="4 3" opacity="0.4" />
      <path d="M 134 40 C 138 40 142 44 142 50 C 142 56 138 60 134 60 C 140 60 146 55 146 50 C 146 45 140 40 134 40 Z" fill="currentColor" opacity="0.9" />

      {/* 24/7 Infinity Loop Road Figure-8 */}
      <path
        d="M 54 90 C 24 90 24 135 54 135 C 84 135 96 90 126 90 C 156 90 156 135 126 135 C 96 135 84 90 54 90 Z"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        fill="url(#infinityGrad)"
      />
      <path
        d="M 54 90 C 24 90 24 135 54 135 C 84 135 96 90 126 90 C 156 90 156 135 126 135 C 96 135 84 90 54 90 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="6 4"
        opacity="0.6"
      />

      {/* Cab Cruising on the Infinity Road */}
      <g transform="translate(110, 80) scale(0.75)">
        <rect x="0" y="0" width="28" height="14" rx="4" fill="currentColor" />
        <circle cx="6" cy="14" r="3" fill="#0b0b0e" />
        <circle cx="22" cy="14" r="3" fill="#0b0b0e" />
      </g>

      {/* Center 24/7 Illuminated Badge Display */}
      <g transform="translate(46, 56)">
        <rect x="0" y="0" width="88" height="42" rx="12" fill="#0b0b0e" stroke="currentColor" strokeWidth="3" />
        <text x="44" y="28" textAnchor="middle" fill="currentColor" fontSize="22" fontWeight="900" letterSpacing="2">
          24/7
        </text>
      </g>

      {/* Bottom NON-STOP SERVICE Badge */}
      <rect x="18" y="148" width="144" height="22" rx="11" fill="#0b0b0e" stroke="currentColor" strokeWidth="2" />
      <text x="90" y="163" textAnchor="middle" fill="currentColor" fontSize="9" fontWeight="900" letterSpacing="0.8">
        24/7 NON-STOP CABS
      </text>
    </svg>
  );
}

// 4. Punctual Arrival Vector (Card 04): Precision Target Clock & Cab Arriving Right on Time
export function WhyUsPunctualVector({ className = 'w-44 h-44 text-emerald-400' }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="punctualGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.35" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.08" />
        </linearGradient>
      </defs>

      {/* Outer Precision Radar Rings */}
      <circle cx="90" cy="90" r="76" stroke="currentColor" strokeWidth="1.5" opacity="0.15" strokeDasharray="3 3" />
      <circle cx="90" cy="90" r="64" stroke="currentColor" strokeWidth="3" opacity="0.3" />

      {/* Target Crosshair Lines */}
      <line x1="90" y1="18" x2="90" y2="40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="90" y1="140" x2="90" y2="162" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="18" y1="90" x2="40" y2="90" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="140" y1="90" x2="162" y2="90" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />

      {/* Stopwatch Crown */}
      <rect x="83" y="16" width="14" height="10" rx="3" fill="currentColor" opacity="0.9" />

      {/* Precision Stopwatch / Clock Dial */}
      <circle cx="90" cy="90" r="48" stroke="currentColor" strokeWidth="3.5" fill="url(#punctualGrad2)" />

      {/* Hour/Minute Ticks */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const x1 = 90 + 38 * Math.cos(rad);
        const y1 = 90 + 38 * Math.sin(rad);
        const x2 = 90 + 44 * Math.cos(rad);
        const y2 = 90 + 44 * Math.sin(rad);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth={i % 3 === 0 ? '2.5' : '1'} opacity={i % 3 === 0 ? '0.9' : '0.4'} />;
      })}

      {/* Fast Sweep Stopwatch Hand pointing straight UP to 12 (On Time) */}
      <line x1="90" y1="90" x2="90" y2="52" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="90" cy="90" r="6" fill="currentColor" />

      {/* Cab Icon Arriving Right at the Target Line */}
      <g transform="translate(112, 70)">
        <path d="M 6 20 L 12 12 L 32 12 L 38 20 L 42 20 L 42 28 L 2 28 L 2 20 Z" fill="#0b0b0e" stroke="currentColor" strokeWidth="2" />
        <circle cx="10" cy="28" r="4" fill="currentColor" />
        <circle cx="34" cy="28" r="4" fill="currentColor" />
      </g>

      {/* 10-MIN Pre-Arrival Badge Ribbon */}
      <rect x="18" y="148" width="144" height="22" rx="11" fill="#0b0b0e" stroke="currentColor" strokeWidth="2.5" />
      <text x="90" y="163" textAnchor="middle" fill="currentColor" fontSize="8.5" fontWeight="900" letterSpacing="0.8">
        10-MIN PRE-ARRIVAL GUARANTEE
      </text>
    </svg>
  );
}

// 5. Transparent Pricing Vector (Card 05): Cash Paper Money Stack + Gold Coins + Heavy Lock
export function WhyUsPricingVector({ className = 'w-44 h-44 text-amber-400' }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="cashGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.35" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.08" />
        </linearGradient>
      </defs>

      {/* Outer Financial Glow Grid */}
      <circle cx="90" cy="90" r="76" stroke="currentColor" strokeWidth="1.5" opacity="0.15" strokeDasharray="4 4" />

      {/* Stack of Cash Paper Currency Notes at Base */}
      {/* Cash Note 3 (Bottom) */}
      <rect x="32" y="118" width="96" height="34" rx="6" fill="#0b0b0e" stroke="currentColor" strokeWidth="2" transform="rotate(-6 80 135)" opacity="0.6" />
      
      {/* Cash Note 2 (Middle) */}
      <rect x="38" y="114" width="96" height="34" rx="6" fill="url(#cashGrad)" stroke="currentColor" strokeWidth="2" transform="rotate(4 86 131)" opacity="0.8" />
      
      {/* Cash Note 1 (Top Front) */}
      <rect x="42" y="108" width="96" height="34" rx="6" fill="#0b0b0e" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="90" cy="125" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.8" />
      <text x="90" y="129" textAnchor="middle" fill="currentColor" fontSize="10" fontWeight="900">₹</text>
      <line x1="50" y1="116" x2="62" y2="116" stroke="currentColor" strokeWidth="1.5" />
      <line x1="118" y1="134" x2="130" y2="134" stroke="currentColor" strokeWidth="1.5" />

      {/* Stack of Gold Rupee Coins on Left */}
      <g transform="translate(24, 98)">
        <ellipse cx="14" cy="24" rx="12" ry="6" fill="#0b0b0e" stroke="currentColor" strokeWidth="2" />
        <ellipse cx="14" cy="18" rx="12" ry="6" fill="#0b0b0e" stroke="currentColor" strokeWidth="2" />
        <ellipse cx="14" cy="12" rx="12" ry="6" fill="currentColor" opacity="0.85" />
        <text x="14" y="14" textAnchor="middle" fill="#0b0b0e" fontSize="8" fontWeight="900">₹</text>
      </g>

      {/* Heavy Steel Padlock Locked Around the Price Tag */}
      <g transform="translate(58, 14)">
        {/* Shackle Lock Arc */}
        <path
          d="M 18 32 L 18 18 C 18 8 28 2 38 2 C 48 2 58 8 58 18 L 58 32"
          stroke="currentColor"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
        />
        {/* Lock Body */}
        <rect x="4" y="32" width="68" height="48" rx="12" fill="#0b0b0e" stroke="currentColor" strokeWidth="3.5" />
        {/* Keyhole */}
        <circle cx="38" cy="48" r="5" fill="currentColor" />
        <polygon points="35,50 41,50 39,58 37,58" fill="currentColor" />
        {/* "FIXED PRICE" Tag */}
        <rect x="8" y="62" width="60" height="12" rx="4" fill="currentColor" opacity="0.95" />
        <text x="38" y="71" textAnchor="middle" fill="#0b0b0e" fontSize="7.5" fontWeight="900" letterSpacing="0.5">
          FIXED PRICE
        </text>
      </g>

      {/* "₹0 SURGE" Lock Stamp Badge on Right */}
      <rect x="114" y="68" width="60" height="22" rx="6" fill="#0b0b0e" stroke="currentColor" strokeWidth="2" />
      <text x="144" y="83" textAnchor="middle" fill="currentColor" fontSize="9" fontWeight="900" letterSpacing="0.5">
        ₹0 SURGE
      </text>

      {/* Bottom TRANSPARENT FIXED FARE Badge */}
      <rect x="18" y="148" width="144" height="22" rx="11" fill="#0b0b0e" stroke="currentColor" strokeWidth="2" />
      <text x="90" y="163" textAnchor="middle" fill="currentColor" fontSize="8.5" fontWeight="900" letterSpacing="0.8">
        TRANSPARENT FIXED FARE
      </text>
    </svg>
  );
}

// 6. Hygienic Cabs Vector (Card 06): Disinfectant Spray Bottle Sprinkles mist + Broom/Brush Sweeping Shiny Sedan
export function WhyUsHygieneVector({ className = 'w-44 h-44 text-violet-400' }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="hygieneGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.35" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.08" />
        </linearGradient>
      </defs>

      {/* Sanitization Shield Outer Circle */}
      <circle cx="90" cy="90" r="76" stroke="currentColor" strokeWidth="1.5" opacity="0.15" strokeDasharray="3 3" />
      <circle cx="90" cy="90" r="64" stroke="currentColor" strokeWidth="2" opacity="0.3" />

      {/* Shiny Clean Sedan Silhouette Base */}
      <path
        d="M 38 126 L 48 106 C 54 96 68 92 82 92 L 108 92 C 122 92 134 96 140 106 L 150 126 L 156 126 C 159 126 161 129 160 132 L 157 142 C 156 145 153 147 149 147 L 37 147 C 33 147 30 145 29 142 L 26 132 C 25 129 27 126 31 126 Z"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="url(#hygieneGrad2)"
      />
      <circle cx="48" cy="147" r="7" fill="#0b0b0e" stroke="currentColor" strokeWidth="2" />
      <circle cx="138" cy="147" r="7" fill="#0b0b0e" stroke="currentColor" strokeWidth="2" />

      {/* Disinfectant Spray Bottle on Top Left */}
      <g transform="translate(18, 16)">
        {/* Spray Bottle Body */}
        <path d="M 16 38 Q 10 44 10 64 L 32 64 Q 32 44 26 38 Z" fill="currentColor" opacity="0.8" />
        <rect x="18" y="30" width="6" height="8" fill="currentColor" />
        {/* Spray Trigger & Nozzle */}
        <path d="M 16 24 L 28 24 L 28 30 L 16 30 Z" fill="#0b0b0e" stroke="currentColor" strokeWidth="2" />
        <path d="M 10 26 L 16 26 M 28 26 L 36 32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        
        {/* Fine Aerosol Spray Mist Droplets / Sprinkles */}
        <circle cx="2" cy="14" r="2" fill="currentColor" opacity="0.9" />
        <circle cx="8" cy="10" r="1.5" fill="currentColor" opacity="0.9" />
        <circle cx="2" cy="22" r="1.5" fill="currentColor" opacity="0.9" />
        <circle cx="12" cy="18" r="2" fill="currentColor" opacity="0.9" />
        <circle cx="22" cy="12" r="2.5" fill="currentColor" opacity="0.9" />
      </g>

      {/* Cleaning Broom / Duster Brush Sweeping on Top Right */}
      <g transform="translate(118, 18) rotate(25)">
        {/* Broom Handle */}
        <line x1="16" y1="0" x2="16" y2="36" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        {/* Broom Bristles / Feather Brush */}
        <path d="M 6 36 Q 16 32 26 36 L 30 54 Q 16 48 2 54 Z" fill="currentColor" opacity="0.85" />
        <line x1="8" y1="36" x2="6" y2="52" stroke="#0b0b0e" strokeWidth="1.5" />
        <line x1="16" y1="34" x2="16" y2="52" stroke="#0b0b0e" strokeWidth="1.5" />
        <line x1="24" y1="36" x2="26" y2="52" stroke="#0b0b0e" strokeWidth="1.5" />
      </g>

      {/* Sparkling Sanitation Starbursts Everywhere */}
      {[
        { cx: 90, cy: 30, s: 1.2 },
        { cx: 62, cy: 72, s: 1.0 },
        { cx: 122, cy: 82, s: 1.1 },
        { cx: 154, cy: 115, s: 0.8 },
        { cx: 30, cy: 110, s: 0.8 },
      ].map((star, i) => (
        <g key={i} transform={`translate(${star.cx}, ${star.cy}) scale(${star.s})`}>
          <path d="M 0 -8 L 2 -2 L 8 0 L 2 2 L 0 8 L -2 2 L -8 0 L -2 -2 Z" fill="currentColor" opacity="0.95" />
        </g>
      ))}

      {/* Bottom 100% SANITIZED & FRESH Seal */}
      <rect x="20" y="148" width="140" height="22" rx="11" fill="#0b0b0e" stroke="currentColor" strokeWidth="2" />
      <text x="90" y="163" textAnchor="middle" fill="currentColor" fontSize="8.5" fontWeight="900" letterSpacing="0.8">
        100% SANITIZED & FRESH
      </text>
    </svg>
  );
}




