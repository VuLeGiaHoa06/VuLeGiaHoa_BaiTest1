import React from "react";
import { NewsSlider } from "./NewsSlider";
import { NewsFeatureBanner } from "./NewsFeatureBanner";

interface NewsSectionProps {
  title?: string;
}

export const NewsSection: React.FC<NewsSectionProps> = ({
  title = "Nu Skin In The News",
}) => {
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

      <div className="flex flex-col lg:flex-row gap-6 items-stretch">
        <NewsSlider />
        <NewsFeatureBanner />
      </div>
    </section>
  );
};
