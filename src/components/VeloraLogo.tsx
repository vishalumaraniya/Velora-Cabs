'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

interface VeloraLogoProps {
  className?: string;
  size?: number;
  animated?: boolean;
}

export default function VeloraLogo({ className = '', size = 42, animated = true }: VeloraLogoProps) {
  // Balanced Shield Crest - scaled and proportioned to center the V & wings
  const shieldOuter = "M 50 14 L 84 24 C 84 56 72 73 50 85 C 28 73 16 56 16 24 Z";
  const shieldInner = "M 50 18 L 80 27 C 80 54 69 69 50 80 C 31 69 20 54 20 27 Z";

  // Aerodynamic curved wing feathers with razor-sharp tips and perfect uniform gaps
  // Left Wing (curved blades sweeping upward & outward)
  const leftWingTop = "M 42 33 C 32 23 24 21 17 21 C 25 28 32 34 39 38 L 42 33 Z";
  const leftWingMid = "M 43 41 C 34 33 28 32 22 32 C 30 39 36 44 42 47 L 43 41 Z";
  const leftWingBot = "M 45 49 C 38 44 33 43 28 43 C 35 49 40 54 46 56 L 45 49 Z";

  // Right Wing (exact symmetrical mirror)
  const rightWingTop = "M 58 33 C 68 23 76 21 83 21 C 75 28 68 34 61 38 L 58 33 Z";
  const rightWingMid = "M 57 41 C 66 33 72 32 78 32 C 70 39 64 44 58 47 L 57 41 Z";
  const rightWingBot = "M 55 49 C 62 44 67 43 72 43 C 65 49 60 54 54 56 L 55 49 Z";

  // Center 3D Faceted Chevron V (vertically centered inside shield)
  const vLeftFacet = "M 50 71 L 36 31 L 43 31 L 50 50 Z";
  const vRightFacet = "M 50 71 L 64 31 L 57 31 L 50 50 Z";

  const strokeVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1.1, ease: 'easeInOut' },
    },
  };

  const fillVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.45, duration: 0.4 },
    },
  };

  return (
    <div className={`relative flex items-center justify-center shrink-0 select-none ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible filter drop-shadow-[0_2px_14px_rgba(48,175,255,0.45)]"
      >
        <defs>
          {/* Vibrant Electric Blue & Cyan Chrome Gradients */}
          <linearGradient id="shieldBorderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#92EEFF" />
            <stop offset="50%" stopColor="#30AFFF" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>

          <linearGradient id="wingGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="30%" stopColor="#DDF6FF" />
            <stop offset="70%" stopColor="#30AFFF" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>

          <linearGradient id="wingGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DDF6FF" />
            <stop offset="50%" stopColor="#30AFFF" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>

          <linearGradient id="wingGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#92EEFF" />
            <stop offset="60%" stopColor="#30AFFF" />
            <stop offset="100%" stopColor="#0369a1" />
          </linearGradient>

          <linearGradient id="vLightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="45%" stopColor="#92EEFF" />
            <stop offset="100%" stopColor="#30AFFF" />
          </linearGradient>

          <linearGradient id="vDarkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#30AFFF" />
            <stop offset="60%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#0369a1" />
          </linearGradient>
        </defs>

        {/* Outer Shield Crest */}
        <motion.path
          d={shieldOuter}
          stroke="url(#shieldBorderGrad)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#071828"
          fillOpacity="0.95"
          variants={animated ? strokeVariants : undefined}
          initial={animated ? 'hidden' : undefined}
          animate={animated ? 'visible' : undefined}
        />

        {/* Inner Shield Bevel Line */}
        <path
          d={shieldInner}
          stroke="url(#shieldBorderGrad)"
          strokeWidth="0.8"
          strokeOpacity="0.35"
          fill="none"
        />

        {/* Left Wing (Feathers 1, 2, 3 with Curved Aerodynamic Blades & Sharp Tips) */}
        <motion.path
          d={leftWingTop}
          fill="url(#wingGrad1)"
          stroke="url(#shieldBorderGrad)"
          strokeWidth="0.6"
          strokeLinejoin="round"
          variants={animated ? fillVariants : undefined}
          initial={animated ? 'hidden' : undefined}
          animate={animated ? 'visible' : undefined}
        />
        <motion.path
          d={leftWingMid}
          fill="url(#wingGrad2)"
          stroke="url(#shieldBorderGrad)"
          strokeWidth="0.6"
          strokeLinejoin="round"
          variants={animated ? fillVariants : undefined}
          initial={animated ? 'hidden' : undefined}
          animate={animated ? 'visible' : undefined}
        />
        <motion.path
          d={leftWingBot}
          fill="url(#wingGrad3)"
          stroke="url(#shieldBorderGrad)"
          strokeWidth="0.6"
          strokeLinejoin="round"
          variants={animated ? fillVariants : undefined}
          initial={animated ? 'hidden' : undefined}
          animate={animated ? 'visible' : undefined}
        />

        {/* Right Wing (Feathers 1, 2, 3 with Curved Aerodynamic Blades & Sharp Tips) */}
        <motion.path
          d={rightWingTop}
          fill="url(#wingGrad1)"
          stroke="url(#shieldBorderGrad)"
          strokeWidth="0.6"
          strokeLinejoin="round"
          variants={animated ? fillVariants : undefined}
          initial={animated ? 'hidden' : undefined}
          animate={animated ? 'visible' : undefined}
        />
        <motion.path
          d={rightWingMid}
          fill="url(#wingGrad2)"
          stroke="url(#shieldBorderGrad)"
          strokeWidth="0.6"
          strokeLinejoin="round"
          variants={animated ? fillVariants : undefined}
          initial={animated ? 'hidden' : undefined}
          animate={animated ? 'visible' : undefined}
        />
        <motion.path
          d={rightWingBot}
          fill="url(#wingGrad3)"
          stroke="url(#shieldBorderGrad)"
          strokeWidth="0.6"
          strokeLinejoin="round"
          variants={animated ? fillVariants : undefined}
          initial={animated ? 'hidden' : undefined}
          animate={animated ? 'visible' : undefined}
        />

        {/* Center 3D Faceted Chevron V (Left & Right Facets) */}
        <motion.path
          d={vLeftFacet}
          fill="url(#vLightGrad)"
          stroke="url(#shieldBorderGrad)"
          strokeWidth="0.6"
          strokeLinejoin="round"
          variants={animated ? fillVariants : undefined}
          initial={animated ? 'hidden' : undefined}
          animate={animated ? 'visible' : undefined}
        />
        <motion.path
          d={vRightFacet}
          fill="url(#vDarkGrad)"
          stroke="url(#shieldBorderGrad)"
          strokeWidth="0.6"
          strokeLinejoin="round"
          variants={animated ? fillVariants : undefined}
          initial={animated ? 'hidden' : undefined}
          animate={animated ? 'visible' : undefined}
        />

        {/* Center 3D Ridge Highlight */}
        <motion.path
          d="M 50 50 L 50 71"
          stroke="#FFFFFF"
          strokeWidth="0.8"
          strokeOpacity="0.8"
          strokeLinecap="round"
          variants={animated ? fillVariants : undefined}
          initial={animated ? 'hidden' : undefined}
          animate={animated ? 'visible' : undefined}
        />
      </svg>
    </div>
  );
}
