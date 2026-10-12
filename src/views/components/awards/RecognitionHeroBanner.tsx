import React from "react";

interface RecognitionHeroBannerProps {
  headingText?: string;
  sourceText?: string;
  imageSrc?: string;
}

export const RecognitionHeroBanner: React.FC<RecognitionHeroBannerProps> = ({
  headingText = "Beauty & Wellness Device Systems",
  sourceText = "Source: Euromonitor",
  imageSrc = "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80",
}) => {
  return (
    <div className="relative w-full bg-[#e8e9ea] overflow-hidden flex flex-col md:flex-row items-center justify-between px-6 sm:px-12 py-8 sm:py-10">
      <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start gap-4 py-2">
        <div className="flex items-center gap-3 sm:gap-6">
          <div className="w-12 h-28 sm:w-14 sm:h-32 bg-white rounded-full shadow-inner flex items-center justify-center p-2 border border-gray-200">
            <div className="w-4 h-4 rounded-full bg-slate-300 mb-auto mt-2" />
          </div>
          <div className="w-14 h-32 sm:w-16 sm:h-36 bg-white rounded-3xl shadow-inner flex items-center justify-center p-2 border border-gray-200">
            <div className="w-6 h-6 rounded-full bg-slate-300" />
          </div>
          <div className="w-12 h-28 sm:w-14 sm:h-32 bg-white rounded-full shadow-inner flex items-center justify-center p-2 border border-gray-200">
            <div className="w-6 h-6 rounded-full bg-sky-300" />
          </div>
          <div className="w-16 h-24 sm:w-20 sm:h-28 bg-white rounded-3xl shadow-inner flex items-center justify-center p-2 border border-gray-200">
            <div className="w-8 h-4 rounded-md bg-slate-200" />
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 text-center md:text-right mt-6 md:mt-0 space-y-1">
        <p className="text-xs sm:text-sm font-semibold tracking-wider text-gray-700 uppercase">
          WORLD'S #1 COMPANY FOR
        </p>
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-900 tracking-tight">
          {headingText}
        </h3>
        <p className="text-xs italic text-gray-500 pt-1 font-medium">
          {sourceText}
        </p>
      </div>
    </div>
  );
};
