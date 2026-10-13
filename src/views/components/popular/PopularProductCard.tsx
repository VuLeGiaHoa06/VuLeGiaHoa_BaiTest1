import React from "react";

export interface PopularItem {
  id: number;
  tag?: string;
  badgeImageUrl?: string;
  image: string;
  brand: string;
  name: string;
  price: number;
  originalPrice?: number;
}

interface PopularProductCardProps {
  product: PopularItem;
  onAddToCart?: (id: number) => void;
}

export const PopularProductCard: React.FC<PopularProductCardProps> = ({
  product,
  onAddToCart,
}) => {
  return (
    <div className="relative bg-white border border-gray-100 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow duration-300 w-full h-full">
      {product.tag && (
        <span className="absolute top-4 z-10 bg-[#5cb85c] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-r-xs uppercase tracking-wider">
          {product.tag}
        </span>
      )}

      <div className="pt-8 pb-4 px-4 flex items-center justify-center h-48 sm:h-52 bg-white">
        <img
          src={product.image}
          alt={product.name}
          className="h-full object-contain max-h-40 hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      <div className="px-4 py-3 bg-[#fbfbfb] border-t border-gray-100 flex flex-col items-center text-center">
        <span className="text-[10px] font-semibold tracking-wider text-gray-400 uppercase mb-1">
          {product.brand}
        </span>

        <h4 className="text-xs sm:text-sm font-semibold text-gray-800 line-clamp-1 mb-2">
          {product.name}
        </h4>

        <div className="flex items-center gap-1.5 mb-3">
          <span className="text-sm font-bold text-amber-500">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-gray-400 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        <button
          onClick={() => onAddToCart?.(product.id)}
          className="w-full py-2 bg-[#551760] hover:bg-[#43124c] active:bg-[#340b3c] hover:shadow-md active:scale-95 text-white text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer rounded-xs"
        >
          Add to card
        </button>
      </div>
    </div>
  );
};
