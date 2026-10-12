import React from "react";

interface PromoCardProps {
  subtitle: string;
  title: string;
  image: string;
  buttonText?: string;
}

export const PromoBanner: React.FC<PromoCardProps> = ({
  subtitle,
  title,
  image,
  buttonText = "Shop Now",
}) => {
  return (
    <div className="relative h-48 bg-neutral-200 overflow-hidden flex items-center justify-between px-6 sm:px-10 border border-gray-100">
      <div className="z-10 max-w-[55%]">
        <p className="text-xs font-semibold text-gray-700 tracking-wider uppercase mb-1">
          {subtitle}
        </p>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 leading-snug">
          {title}
        </h3>
        <button className="px-5 py-2 text-xs font-semibold border border-rose-300 text-gray-800 bg-white/70 hover:bg-white hover:text-black transition-all">
          {buttonText}
        </button>
      </div>

      <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden flex items-end justify-end pointer-events-none">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover object-top"
        />
      </div>
    </div>
  );
};
