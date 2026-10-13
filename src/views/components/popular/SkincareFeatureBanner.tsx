import React from "react";

interface SkincareFeatureBannerProps {
  badgeText?: string;
  badgePrice?: string;
  categoryTag?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  imageSrc?: string;
  onButtonClick?: () => void;
}

export const SkincareFeatureBanner: React.FC<SkincareFeatureBannerProps> = ({
  badgeText = "Sale Of",
  badgePrice = "$29.99",
  categoryTag = "AGELOC® LUMISPA® iO",
  title = "ageLOC® LumiSpa® iO",
  description = "Elevate your skincare routine",
  buttonText = "SHOP NOW",
  imageSrc = "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&auto=format&fit=crop&q=80",
  onButtonClick,
}) => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="relative bg-[#f5f2ed] overflow-hidden p-6 sm:p-10 lg:p-12 shadow-xs border border-[#eae6df]">
        <div className="flex flex-col lg:flex-row justify-between gap-8 sm:gap-12">
          <div className="relative w-full lg:w-1/2 flex justify-center">
            <div className="relative max-w-md w-full aspect-4/3 rounded-xs shadow-sm bg-white">
              <img
                src={imageSrc}
                alt={title}
                className="w-full h-full object-cover object-center"
              />

              <div className="absolute top-2 -right-2 sm:-top-3 sm:right-4 bg-[#551760] text-white rounded-full w-14 h-14 sm:w-16 sm:h-16 flex flex-col items-center justify-center shadow-lg text-center p-1 border-2 border-white">
                <span className="text-[10px] leading-tight text-white/90 font-medium">
                  {badgeText}
                </span>
                <span className="text-xs sm:text-sm font-black leading-tight">
                  {badgePrice}
                </span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col items-start lg:pl-8 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#cf3844] uppercase">
              {categoryTag}
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
              {title}
            </h2>

            <p className="text-sm text-gray-600 font-normal pb-3">
              {description}
            </p>

            <button
              onClick={onButtonClick}
              className="px-8 py-3 bg-[#551760] hover:bg-[#43124c] active:bg-[#340b3c] text-white text-xs font-bold tracking-wider uppercase transition-colors shadow-sm cursor-pointer"
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
