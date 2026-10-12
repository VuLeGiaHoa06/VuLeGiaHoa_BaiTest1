import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const MainSlider: React.FC = () => {
  return (
    <div className="relative w-full h-95 sm:h-102.5 overflow-hidden bg-stone-900 group">
      <img
        src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80"
        alt="Reasonable Price Banner"
        className="w-full h-full object-cover opacity-85 object-center"
      />

      <div className="absolute inset-0 bg-black/25" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <span className="text-sm sm:text-base font-semibold tracking-wider uppercase mb-1 drop-shadow-sm">
          10% OFF YOUR FIRST ORDER
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-5 drop-shadow-md">
          Reasonable Price
        </h2>
        <button className="px-6 py-2.5 bg-white text-gray-900 text-xs sm:text-sm font-semibold hover:bg-gray-100 transition-all shadow-md active:scale-95">
          Shop Now
        </button>
      </div>

      <button
        type="button"
        aria-label="Previous Slide"
        className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors cursor-pointer"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        type="button"
        aria-label="Next Slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors cursor-pointer"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};
