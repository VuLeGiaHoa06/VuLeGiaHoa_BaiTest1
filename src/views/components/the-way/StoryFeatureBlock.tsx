import React from "react";

interface StoryFeatureBlockProps {
  title: string;
  description: string;
  ctaText?: string;
  imageSrc: string;
  imageAlt?: string;
  reverse?: boolean;
  onCtaClick?: () => void;
}

export const StoryFeatureBlock: React.FC<StoryFeatureBlockProps> = ({
  title,
  description,
  ctaText,
  imageSrc,
  imageAlt,
  reverse = false,
  onCtaClick,
}) => {
  return (
    <div className="w-full bg-[#fbfbfb] border border-gray-100 overflow-hidden shadow-xs">
      <div
        className={`flex flex-col ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } items-stretch`}
      >
        <div className="w-full lg:w-1/2 min-h-[300px] sm:min-h-[360px] relative overflow-hidden bg-slate-100">
          <img
            src={imageSrc}
            alt={imageAlt || title}
            className="w-full h-full object-cover object-center absolute inset-0"
            loading="lazy"
          />
        </div>

        <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-14 flex flex-col justify-center items-start space-y-4">
          <h3 className="text-2xl sm:text-3xl font-normal text-gray-800 tracking-tight">
            {title}
          </h3>

          <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed">
            {description}
          </p>

          {ctaText && (
            <button
              onClick={onCtaClick}
              className="pt-2 text-xs font-semibold text-gray-800 hover:text-black underline underline-offset-2 transition-colors cursor-pointer"
            >
              {ctaText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
