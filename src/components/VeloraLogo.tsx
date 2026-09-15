'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

interface VeloraLogoProps {
  className?: string;
  size?: number;
  animated?: boolean;
}

export default function VeloraLogo({ className = '', size = 42, animated = true }: VeloraLogoProps) {
  // Pure Clean SVG Path Data matching the Preloader Emblem
  const shieldPath = "M 50 10 L 85 28 L 78 72 L 50 92 L 22 72 L 15 28 Z";
  const leftWing = "M 28 32 C 18 36 14 46 16 58 C 24 54 32 50 42 50 L 50 78 Z";
  const rightWing = "M 72 32 C 82 36 86 46 84 58 C 76 54 68 50 58 50 L 50 78 Z";
  const centerV = "M 30 30 L 50 74 L 70 30 L 58 30 L 50 58 L 42 30 Z";

  const strokeVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1.2, ease: 'easeInOut' },
    },
  };

  const fillVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.8, duration: 0.4 },
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
        className="overflow-visible filter drop-shadow-[0_0_14px_rgba(245,185,33,0.5)]"
      >
        <defs>
          <linearGradient id="veloraGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF4D0" />
            <stop offset="50%" stopColor="#F5B921" />
            <stop offset="100%" stopColor="#D49B0E" />
          </linearGradient>

          <linearGradient id="veloraHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F5B921" />
          </linearGradient>
        </defs>

        {/* Geometric Crown Shield Outline */}
        <motion.path
          d={shieldPath}
          stroke="url(#veloraGoldGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#0c0c10"
          fillOpacity="0.95"
          variants={animated ? strokeVariants : undefined}
          initial={animated ? 'hidden' : undefined}
          animate={animated ? 'visible' : undefined}
        />

        {/* Left Wing */}
        <motion.path
          d={leftWing}
          fill="url(#veloraGoldGrad)"
          fillOpacity="0.85"
          stroke="url(#veloraHighlight)"
          strokeWidth="1.5"
          variants={animated ? fillVariants : undefined}
          initial={animated ? 'hidden' : undefined}
          animate={animated ? 'visible' : undefined}
        />

        {/* Right Wing */}
        <motion.path
          d={rightWing}
          fill="url(#veloraGoldGrad)"
          fillOpacity="0.85"
          stroke="url(#veloraHighlight)"
          strokeWidth="1.5"
          variants={animated ? fillVariants : undefined}
          initial={animated ? 'hidden' : undefined}
          animate={animated ? 'visible' : undefined}
        />

        {/* Center V */}
        <motion.path
          d={centerV}
          fill="url(#veloraHighlight)"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinejoin="round"
          variants={animated ? strokeVariants : undefined}
          initial={animated ? 'hidden' : undefined}
          animate={animated ? 'visible' : undefined}
        />
      </svg>
    </div>
  );
}
