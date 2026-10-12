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
];

export const NewsSlider: React.FC<NewsSliderProps> = ({
  articles = defaultArticles,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(articles.length - 1, prev + 1));
  };

  return (
    <div className="flex-1 w-full flex flex-col justify-between">
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
          className="absolute -left-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 bg-white/95 rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-black border border-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {articles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>

        <button
          onClick={handleNext}
          aria-label="Next"
          className="absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 bg-white/95 rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-black border border-gray-100 transition-all"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="flex items-center justify-center gap-2 mt-8">
        <div className="w-6 h-1.5 bg-gray-800 rounded-full" />
        <div className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
      </div>
    </div>
  );
};
