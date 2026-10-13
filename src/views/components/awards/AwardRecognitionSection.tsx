import React from "react";
import { RecognitionHeroBanner } from "./RecognitionHeroBanner";
import { AwardBadgeList } from "./AwardBadgeList";

interface AwardRecognitionSectionProps {
  title?: string;
}

export const AwardRecognitionSection: React.FC<
  AwardRecognitionSectionProps
> = ({ title = "Award And Recognition" }) => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-center my-6">
        <div className="relative inline-flex items-center justify-center">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-purple-200" />
          </div>
          <div className="relative py-2 bg-[#551760] text-white font-bold text-sm sm:text-base tracking-wide rounded-lg shadow-md">
            <div className="flex items-center gap-3">
              <span className="w-6 h-[1.5px] bg-white/70" />
              <span>{title}</span>
              <span className="w-6 h-[1.5px] bg-white/70" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200/80 shadow-xs overflow-hidden">
        <RecognitionHeroBanner />
        <div className="p-4 sm:p-6">
          <AwardBadgeList />
        </div>
      </div>
    </section>
  );
};
