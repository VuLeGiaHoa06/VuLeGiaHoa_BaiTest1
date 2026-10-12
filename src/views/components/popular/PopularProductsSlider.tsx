import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PopularProductCard, PopularItem } from "./PopularProductCard";

interface PopularProductsSectionProps {
  products?: PopularItem[];
  onAddToCart?: (id: number) => void;
}

const defaultPopularProducts: PopularItem[] = [
  {
    id: 101,
    badgeImageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&auto=format&fit=crop&q=80",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&auto=format&fit=crop&q=80",
    brand: "AGELOC",
    name: "Pure Pineapple",
    price: 14.0,
    originalPrice: 35.0,
  },
  {
    id: 102,
    tag: "SALE",
    badgeImageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&auto=format&fit=crop&q=80",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&auto=format&fit=crop&q=80",
    brand: "AGELOC",
    name: "Pure Pineapple",
    price: 14.0,
    originalPrice: 35.0,
  },
  {
    id: 103,
    tag: "SALE",
    badgeImageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&auto=format&fit=crop&q=80",
    image: "https://images.unsplash.com/photo-1608248597359-5776d5e1ff74?w=500&auto=format&fit=crop&q=80",
    brand: "AGELOC",
    name: "Pure Pineapple",
    price: 14.0,
    originalPrice: 35.0,
  },
  {
    id: 104,
    tag: "SALE",
    badgeImageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&auto=format&fit=crop&q=80",
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500&auto=format&fit=crop&q=80",
    brand: "AGELOC",
    name: "Pure Pineapple",
    price: 14.0,
    originalPrice: 35.0,
  },
];

export const PopularProductsSlider: React.FC<PopularProductsSectionProps> = ({
  products = defaultPopularProducts,
  onAddToCart,
}) => {
  const [activeTab, setActiveTab] = useState<"description" | "specifications">("description");
  const [scrollIndex, setScrollIndex] = useState(0);

  const handlePrev = () => {
    setScrollIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setScrollIndex((prev) => Math.min(products.length - 1, prev + 1));
  };

  return (
    <div className="flex-1 w-full flex flex-col justify-between">
      <div className="flex items-center justify-between border-b border-gray-200 mb-6 pb-0">
        <div className="flex items-center">
          <button
            onClick={() => setActiveTab("description")}
            className={`px-6 py-2.5 text-xs font-bold uppercase tracking-wider border-t-2 transition-all cursor-pointer ${
              activeTab === "description"
                ? "border-amber-500 bg-white text-gray-900 border-x border-gray-200 border-b-white -mb-px"
                : "border-transparent bg-gray-50/70 text-gray-400 hover:text-gray-700"
            }`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("specifications")}
            className={`px-6 py-2.5 text-xs font-bold uppercase tracking-wider border-t-2 transition-all cursor-pointer ${
              activeTab === "specifications"
                ? "border-amber-500 bg-white text-gray-900 border-x border-gray-200 border-b-white -mb-px"
                : "border-transparent bg-gray-50/70 text-gray-400 hover:text-gray-700"
            }`}
          >
            Specifications
          </button>
        </div>

        <a
          href="#view-all"
          className="text-xs font-semibold text-gray-700 hover:text-[#551760] underline tracking-tight transition-colors"
        >
          View All &gt;&gt;
        </a>
      </div>

      <div className="relative group">
        <button
          onClick={handlePrev}
          disabled={scrollIndex === 0}
          aria-label="Previous"
          className="absolute -left-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 bg-white/95 rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-black border border-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {products.slice(0, 3).map((item) => (
            <PopularProductCard
              key={item.id}
              product={item}
              onAddToCart={onAddToCart}
            />
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

      <div className="flex items-center justify-center gap-2 mt-6">
        <div className="w-6 h-1.5 bg-gray-800 rounded-full" />
        <div className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
      </div>
    </div>
  );
};
