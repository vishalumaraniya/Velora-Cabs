'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

interface VeloraLogoProps {
  className?: string;
  size?: number;
  animated?: boolean;
}

export default function VeloraLogo({ className = '', size = 42, animated = true }: VeloraLogoProps) {
  // Pure Clean SVG Path Data for Minimalist Luxury "V" Winged Emblem
  const shieldPath = "M 50 12 L 85 28 L 78 72 L 50 90 L 22 72 L 15 28 Z";
  const leftWingArc = "M 22 36 C 30 38 38 46 45 52 L 42 66 C 34 58 26 48 20 44 Z";
  const rightWingArc = "M 78 36 C 70 38 62 46 55 52 L 58 66 C 66 58 74 48 80 44 Z";
  const sharpCenterV = "M 32 30 L 50 76 L 68 30 L 58 30 L 50 60 L 42 30 Z";

  const drawVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1.2, ease: [0.42, 0, 0.58, 1] },
    },
  };

  const scaleVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, delay: 0.8 },
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
        className="overflow-visible filter drop-shadow-[0_0_12px_rgba(245,185,33,0.5)]"
      >
        <defs>
          {/* Main Gold Gradient */}
          <linearGradient id="logoSvgGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="30%" stopColor="#FFE599" />
            <stop offset="65%" stopColor="#F5B921" />
            <stop offset="100%" stopColor="#B88000" />
          </linearGradient>

          {/* Inner Accent Gold */}
          <linearGradient id="logoSvgGoldAccent" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FCD34D" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
        </defs>

        {/* Outer Geometric Shield Border */}
        <motion.path
          d={shieldPath}
          stroke="url(#logoSvgGold)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#0c0c10"
          fillOpacity="0.95"
          variants={animated ? drawVariants : undefined}
          initial={animated ? 'hidden' : undefined}
          animate={animated ? 'visible' : undefined}
        />

        {/* Left Wing Facet */}
        <motion.path
          d={leftWingArc}
          fill="url(#logoSvgGoldAccent)"
          fillOpacity="0.75"
          stroke="#FCD34D"
          strokeWidth="1"
          variants={animated ? scaleVariants : undefined}
          initial={animated ? 'hidden' : undefined}
          animate={animated ? 'visible' : undefined}
        />

        {/* Right Wing Facet */}
        <motion.path
          d={rightWingArc}
          fill="url(#logoSvgGoldAccent)"
          fillOpacity="0.75"
          stroke="#FCD34D"
          strokeWidth="1"
          variants={animated ? scaleVariants : undefined}
          initial={animated ? 'hidden' : undefined}
          animate={animated ? 'visible' : undefined}
        />

        {/* Sharp Center "V" Emblem */}
        <motion.path
          d={sharpCenterV}
          fill="url(#logoSvgGold)"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeLinejoin="round"
          variants={animated ? drawVariants : undefined}
          initial={animated ? 'hidden' : undefined}
          animate={animated ? 'visible' : undefined}
        />
      </svg>
    </div>
  );
}
