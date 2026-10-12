import React from "react";
import { ChevronRight } from "lucide-react";

interface PromoSidebarProps {
  headingText?: string;
  subheadingText?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

export const PopularPromoSidebar: React.FC<PromoSidebarProps> = ({
  headingText = "Find out\nwhat\neveryone's\ntalking\nabout",
  subheadingText = "Browse our best",
  ctaText,
  onCtaClick,
}) => {
  return (
    <div className="relative w-full md:w-[260px] lg:w-[280px] shrink-0 bg-white p-7 sm:p-8 flex flex-col justify-between overflow-hidden shadow-xs border border-gray-100">
      <div className="absolute top-8 right-6 w-32 h-32 pointer-events-none opacity-80">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full text-teal-600 stroke-current"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        >
          <line x1="20" y1="20" x2="85" y2="10" />
          <line x1="15" y1="42" x2="80" y2="38" />
          <line x1="18" y1="65" x2="75" y2="70" />
          <line x1="30" y1="85" x2="60" y2="95" />
        </svg>
      </div>

      <div className="relative z-10 space-y-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 leading-tight whitespace-pre-line tracking-tight">
          {headingText}
        </h2>
      </div>

      <div className="relative z-10 pt-16 sm:pt-20">
        <button
          onClick={onCtaClick}
          className="group inline-flex items-center gap-1.5 text-xs font-semibold text-gray-700 hover:text-black transition-colors"
        >
          <span>{subheadingText}</span>
          {ctaText && <span className="font-bold">{ctaText}</span>}
          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      <div className="absolute -bottom-8 -left-8 w-28 h-24 pointer-events-none opacity-20">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full text-teal-700 stroke-current"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
        >
          <line x1="10" y1="80" x2="70" y2="20" />
          <line x1="30" y1="95" x2="90" y2="40" />
        </svg>
      </div>
    </div>
  );
};
