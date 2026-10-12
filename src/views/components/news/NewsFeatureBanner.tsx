import React from "react";

interface NewsFeatureBannerProps {
  title?: string;
  subtitle?: string;
  imageSrc?: string;
  url?: string;
}

export const NewsFeatureBanner: React.FC<NewsFeatureBannerProps> = ({
  title = "News",
  subtitle = "Nu Skin In The News",
  imageSrc = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=80",
  url = "#",
}) => {
  return (
    <div className="relative w-full lg:w-[320px] shrink-0 min-h-[380px] sm:min-h-[440px] overflow-hidden shadow-xs flex flex-col justify-end p-6 border border-gray-100">
      <img
        src={imageSrc}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        loading="lazy"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />

      <div className="relative z-10 text-center space-y-2 mb-10">
        <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight drop-shadow-sm">
          {title}
        </h3>
        <div>
          <a
            href={url}
            className="text-xs sm:text-sm font-medium text-white/95 hover:text-white underline underline-offset-4 tracking-wide transition-colors"
          >
            {subtitle}
          </a>
        </div>
      </div>
    </div>
  );
};
