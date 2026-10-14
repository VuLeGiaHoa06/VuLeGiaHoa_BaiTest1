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
    <div className="relative w-full md:w-65 lg:w-70 shrink-0 bg-white p-7 sm:p-8 flex flex-col justify-between overflow-hidden shadow-xs border border-gray-100">
      <div className="absolute top-0 right-0 w-36 h-72 pointer-events-none opacity-90">
        <svg
          viewBox="0 0 80 200"
          className="w-full h-full text-teal-500 stroke-current"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
        >
          <line x1="30" y1="-10" x2="90" y2="5" />
          <line x1="30" y1="25" x2="80" y2="30" />
          <line x1="30" y1="60" x2="80" y2="55" />
          <line x1="35" y1="100" x2="80" y2="80" />
        </svg>
      </div>

      <div className="relative z-10 space-y-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 leading-tight whitespace-pre-line tracking-tight">
          {headingText}
        </h2>

        <button
          onClick={onCtaClick}
          className="cursor-pointer group inline-flex items-center gap-1.5 text-xs font-semibold text-gray-700 hover:text-black transition-colors"
        >
          <span>{subheadingText}</span>
          {ctaText && <span className="font-bold">{ctaText}</span>}
          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
};
