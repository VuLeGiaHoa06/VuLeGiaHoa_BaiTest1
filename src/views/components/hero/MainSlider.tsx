import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface SlideItem {
  id: number;
  image: string;
  subtitle: string;
  title: string;
  buttonText: string;
  link: string;
}

const slides: SlideItem[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80",
    subtitle: "10% OFF YOUR FIRST ORDER",
    title: "Reasonable Price",
    buttonText: "Shop Now",
    link: "/shop",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=80",
    subtitle: "10% OFF YOUR FIRST ORDER",
    title: "Fashionable Dress",
    buttonText: "Shop Now",
    link: "/shop",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1200&q=80",
    subtitle: "EXCLUSIVE 2025 COLLECTION",
    title: "Trending Style",
    buttonText: "Shop Now",
    link: "/shop",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1200&q=80",
    subtitle: "SUMMER SPECIAL PROMO",
    title: "Modern Minimalism",
    buttonText: "Shop Now",
    link: "/shop",
  },
];

export const MainSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) {
      handleNext();
    } else if (distance < -50) {
      handlePrev();
    }
  };

  return (
    <div
      className="relative w-full h-95 sm:h-102.5 overflow-hidden bg-stone-900 group select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div
        className="flex h-full w-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="relative w-full h-full shrink-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover opacity-85 object-center"
            />

            <div className="absolute inset-0 bg-black/25" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
              <span className="text-sm sm:text-base font-semibold tracking-wider uppercase mb-1 drop-shadow-sm">
                {slide.subtitle}
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-5 drop-shadow-md">
                {slide.title}
              </h2>
              <Link
                to={slide.link}
                className="px-6 py-2.5 bg-white cursor-pointer text-gray-900 text-xs sm:text-sm font-semibold hover:bg-gray-100 transition-all shadow-md active:scale-95 inline-block"
              >
                {slide.buttonText}
              </Link>
            </div>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={handlePrev}
        aria-label="Previous Slide"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors cursor-pointer"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        type="button"
        onClick={handleNext}
        aria-label="Next Slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors cursor-pointer"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              currentIndex === index
                ? "w-7 bg-white shadow"
                : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
