'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  const strokeVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
    },
  };

  const fillVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[100] bg-[#0c0c0f] flex flex-col items-center justify-center select-none"
        >
          <div className="relative flex flex-col items-center gap-6">
            
            {/* SVG Luxury Geometric Logo Draw */}
            <svg
              width="130"
              height="130"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="filter drop-shadow-[0_0_25px_rgba(245,185,33,0.5)]"
            >
              <defs>
                <linearGradient id="loaderGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFF4D0" />
                  <stop offset="50%" stopColor="#F5B921" />
                  <stop offset="100%" stopColor="#D49B0E" />
                </linearGradient>

                <linearGradient id="loaderHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="100%" stopColor="#F5B921" />
                </linearGradient>
              </defs>

              {/* Geometric Crown Shield Outline Draw */}
              <motion.path
                d="M 50 10 L 85 28 L 78 72 L 50 92 L 22 72 L 15 28 Z"
                stroke="url(#loaderGoldGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={strokeVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1.5, ease: 'easeInOut' }}
              />

              {/* Left Wing Draw */}
              <motion.path
                d="M 28 32 C 18 36 14 46 16 58 C 24 54 32 50 42 50 L 50 78 Z"
                fill="url(#loaderGoldGrad)"
                fillOpacity="0.85"
                stroke="url(#loaderHighlight)"
                strokeWidth="1.5"
                variants={fillVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1.1, duration: 0.5 }}
              />

              {/* Right Wing Draw */}
              <motion.path
                d="M 72 32 C 82 36 86 46 84 58 C 76 54 68 50 58 50 L 50 78 Z"
                fill="url(#loaderGoldGrad)"
                fillOpacity="0.85"
                stroke="url(#loaderHighlight)"
                strokeWidth="1.5"
                variants={fillVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1.1, duration: 0.5 }}
              />

              {/* Center V Path Draw */}
              <motion.path
                d="M 30 30 L 50 74 L 70 30 L 58 30 L 50 58 L 42 30 Z"
                fill="url(#loaderHighlight)"
                stroke="#FFFFFF"
                strokeWidth="2"
                variants={strokeVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1.5, ease: 'easeInOut' }}
              />
            </svg>

            {/* VELORA CABS Text Animation */}
            <div className="text-center space-y-1">
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-3xl font-extrabold tracking-[0.2em] gold-gradient-text"
              >
                VELORA CABS
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="text-[11px] font-bold uppercase tracking-widest text-gray-400"
              >
                Safe Rides. On Time. Every Time.
              </motion.p>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
