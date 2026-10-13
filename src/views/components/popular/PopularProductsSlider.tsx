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
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&auto=format&fit=crop&q=80",
    brand: "AGELOC",
    name: "Vitamin C Serum",
    price: 14.0,
    originalPrice: 35.0,
  },
  {
    id: 102,
    tag: "SALE",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&auto=format&fit=crop&q=80",
    brand: "BEAUTIQUE",
    name: "Hair Care Shampoo",
    price: 14.0,
    originalPrice: 35.0,
  },
  {
    id: 103,
    tag: "SALE",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&auto=format&fit=crop&q=80",
    brand: "GLOW LAB",
    name: "Facial Moisturizer",
    price: 19.0,
    originalPrice: 40.0,
  },
  {
    id: 104,
    image:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500&auto=format&fit=crop&q=80",
    brand: "SKINCARE CO",
    name: "Eye Cream Gel",
    price: 14.0,
    originalPrice: 35.0,
  },
  {
    id: 105,
    tag: "NEW",
    image:
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=500&auto=format&fit=crop&q=80",
    brand: "LUMIERE",
    name: "Hydrating Toner",
    price: 22.0,
    originalPrice: 45.0,
  },
  {
    id: 106,
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&auto=format&fit=crop&q=80",
    brand: "BEAUTY BOX",
    name: "Lip Gloss Set",
    price: 9.0,
    originalPrice: 18.0,
  },
  {
    id: 107,
    tag: "SALE",
    image:
      "https://images.unsplash.com/photo-1512207736890-6ffed8a84e8d?w=500&auto=format&fit=crop&q=80",
    brand: "DERMIQUE",
    name: "Anti-Aging Cream",
    price: 29.0,
    originalPrice: 60.0,
  },
  {
    id: 108,
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=80",
    brand: "NATURELLE",
    name: "Rose Face Mist",
    price: 16.0,
    originalPrice: 30.0,
  },
  {
    id: 109,
    tag: "HOT",
    image:
      "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=500&auto=format&fit=crop&q=80",
    brand: "GLOWUP",
    name: "Sunscreen SPF 50",
    price: 18.0,
    originalPrice: 32.0,
  },
];

const CARDS_PER_PAGE = 3;

export const PopularProductsSlider: React.FC<PopularProductsSectionProps> = ({
  products = defaultPopularProducts,
  onAddToCart,
}) => {
  const [activeTab, setActiveTab] = useState<"description" | "specifications">(
    "description",
  );
  const [scrollIndex, setScrollIndex] = useState(0);

  const maxIndex = Math.max(0, products.length - CARDS_PER_PAGE);

  const handlePrev = () => {
    setScrollIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setScrollIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const totalDots = maxIndex + 1;

  return (
    <div className="flex-1 w-full flex flex-col justify-between">
      <div className="flex items-center justify-between border-b border-gray-200 mb-4 pb-0">
        <div className="flex items-center">
          <button
            onClick={() => setActiveTab("description")}
            className={`px-6 py-2.5 text-xs font-bold uppercase tracking-wider border-t-2 transition-all cursor-pointer ${
              activeTab === "description"
                ? "border-t-amber-500 bg-white text-gray-900 border-x-white border-b-white -mb-px"
                : "border-transparent bg-gray-50/70 text-gray-400 hover:text-gray-700"
            }`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("specifications")}
            className={`px-6 py-2.5 text-xs font-bold uppercase tracking-wider border-t-2 transition-all cursor-pointer ${
              activeTab === "specifications"
                ? "border-t-amber-500 bg-white text-gray-900 border-x-white border-b-white -mb-px"
                : "border-transparent bg-gray-50/70 text-gray-400 hover:text-gray-700"
            }`}
          >
            Specifications
          </button>
        </div>
      </div>

      <div className="relative group">
        <a
          href="#view-all"
          className="text-xs flex justify-end pb-4 font-semibold text-gray-700 hover:text-[#551760] underline tracking-tight transition-colors"
        >
          View All &gt;&gt;
        </a>

        {/* Nút trái */}
        <button
          onClick={handlePrev}
          disabled={scrollIndex === 0}
          aria-label="Previous"
          className="absolute -left-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 bg-white/95 rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-black border border-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Danh sách card - trượt mượt mà với animation */}
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out -mx-2"
            style={{
              transform: `translateX(-${scrollIndex * (100 / CARDS_PER_PAGE)}%)`,
            }}
          >
            {products.map((item) => (
              <div
                key={item.id}
                className="w-1/3 shrink-0 px-2 box-border"
              >
                <PopularProductCard
                  product={item}
                  onAddToCart={() => onAddToCart?.(item.name as any)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Nút phải */}
        <button
          onClick={handleNext}
          disabled={scrollIndex >= maxIndex}
          aria-label="Next"
          className="absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 bg-white/95 rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-black border border-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-1.5 mt-6">
        {Array.from({ length: totalDots }).map((_, i) => (
          <button
            key={i}
            onClick={() => setScrollIndex(i)}
            aria-label={`Go to page ${i + 1}`}
            className={`rounded-full transition-all duration-300 cursor-pointer ${
              scrollIndex === i
                ? "w-6 h-1.5 bg-gray-800"
                : "w-1.5 h-1.5 bg-gray-300 hover:bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
