import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { NewsCard, NewsArticleItem } from "./NewsCard";

interface NewsSliderProps {
  articles?: NewsArticleItem[];
}

const defaultArticles: NewsArticleItem[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80",
    title: "New Beauty Products Editors Are Loving This December",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80",
    title: "38 New Beauty Products Our Editors Are Loving This December",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80",
    title: "38 New Beauty Products Our Editors Are Loving This December",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&auto=format&fit=crop&q=80",
    title: "38 New Beauty Products Our Editors Are Loving This December",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=500&auto=format&fit=crop&q=80",
    title: "Top Trending Skincare Devices And Tools To Try In 2026",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&auto=format&fit=crop&q=80",
    title: "The Ultimate Guide To Healthy Hair Care Routines",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&auto=format&fit=crop&q=80",
    title: "Best Hydrating Creams For Radiant Glowing Winter Skin",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=500&auto=format&fit=crop&q=80",
    title: "Expert Tips: Essential Morning Wellness And Beauty Habits",
  },
];

const CARDS_PER_PAGE = 4;

export const NewsSlider: React.FC<NewsSliderProps> = ({
  articles = defaultArticles,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const maxIndex = Math.max(0, articles.length - CARDS_PER_PAGE);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const totalDots = maxIndex + 1;

  return (
    <div className="flex-1 min-w-0 w-full flex flex-col justify-between">
      <div className="flex items-center justify-end mb-4">
        <a
          href="#view-all-news"
          className="text-xs font-semibold text-gray-700 hover:text-[#551760] underline tracking-tight transition-colors"
        >
          View All &gt;&gt;
        </a>
      </div>

      <div className="relative group">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          aria-label="Previous"
          className="absolute -left-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 bg-white/95 rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-black border border-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer hover:scale-105 active:scale-95"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Khung slider trượt với animation mượt mà */}
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out -mx-2"
            style={{
              transform: `translateX(-${currentIndex * 25}%)`,
            }}
          >
            {articles.map((article) => (
              <div
                key={article.id}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 shrink-0 px-2 box-border"
              >
                <NewsCard article={article} />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleNext}
          disabled={currentIndex >= maxIndex}
          aria-label="Next"
          className="absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 bg-white/95 rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-black border border-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer hover:scale-105 active:scale-95"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="flex items-center justify-center gap-1.5 mt-8">
        {Array.from({ length: totalDots }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 cursor-pointer ${
              currentIndex === i
                ? "w-6 h-1.5 bg-gray-800"
                : "w-1.5 h-1.5 bg-gray-300 hover:bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
