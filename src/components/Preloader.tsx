'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import VeloraLogo from '@/components/VeloraLogo';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);



  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[100] bg-[#EBF9FF] flex flex-col items-center justify-center select-none"
        >
          <div className="relative flex flex-col items-center gap-6">
            
            {/* SVG Logo Draw */}
            <VeloraLogo size={120} animated={true} />

            {/* VELORA CABS Text Animation */}
            <div className="text-center space-y-1">
              <motion.h1
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="text-2xl font-black tracking-widest text-[#0a2a3d]"
              >
                VELORA <span className="text-[#30AFFF]">CABS</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="text-[11px] font-bold uppercase tracking-widest text-[#5c9ab8]"
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
