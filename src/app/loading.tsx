import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#EBF9FF] flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 border-3 border-[#30AFFF] border-t-transparent rounded-full animate-spin" />
        <span className="text-xs font-semibold text-[#0284c7] tracking-wider uppercase">Loading Velora Cabs...</span>
      </div>
    </div>
  );
}
