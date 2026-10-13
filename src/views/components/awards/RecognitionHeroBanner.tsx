import React from "react";

interface RecognitionHeroBannerProps {
  headingText?: string;
  sourceText?: string;
  imageSrc?: string;
}

export const RecognitionHeroBanner: React.FC<RecognitionHeroBannerProps> = ({
  headingText = "Beauty & Wellness Device Systems",
  sourceText = "Source: Euromonitor",
  imageSrc = "/beauty-devices.jpg",
}) => {
  return (
    <div className="relative w-full bg-[#e8e9ea] overflow-hidden flex flex-col md:flex-row items-center justify-between px-6 sm:px-12 py-6 sm:py-8">
      <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start py-2">
        <img
          src={imageSrc}
          alt={headingText}
          className="max-h-36 sm:max-h-44 w-auto object-contain mix-blend-multiply"
        />
      </div>

      <div className="w-full md:w-1/2 md:text-center text-center mt-6 md:mt-0 space-y-1">
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
