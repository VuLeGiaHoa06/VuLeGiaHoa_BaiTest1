import React from "react";

interface PromoCardProps {
  subtitle: string;
  title: string;
  image: string;
  buttonText?: string;
  className?: string;
}

export const PromoBanner: React.FC<PromoCardProps> = ({
  subtitle,
  title,
  image,
  buttonText = "Shop Now",
  className = "",
}) => {
  return (
    <div
      className={`relative h-48 bg-gradient-to-r from-gray-100 via-neutral-300 to-neutral-500 overflow-hidden flex items-center justify-between px-6 sm:px-10 border border-gray-200/80 group ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-black/30 pointer-events-none z-2" />
      <div className="z-10 max-w-[55%]">
        <p className="text-xs font-semibold text-gray-700 tracking-wider uppercase mb-1 drop-shadow-xs">
          {subtitle}
        </p>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 leading-snug">
          {title}
        </h3>
        <button className="px-5 py-2 text-xs font-semibold border border-rose-300 text-gray-800 bg-white/80 hover:bg-white hover:text-black transition-all shadow-xs cursor-pointer active:scale-95">
          {buttonText}
        </button>
      </div>
      <div
        className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden flex items-end justify-end pointer-events-none z-1"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 35%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 35%)",
        }}
      >
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  );
};

