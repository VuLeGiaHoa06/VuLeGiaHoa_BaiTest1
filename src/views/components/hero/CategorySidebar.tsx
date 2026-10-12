import React from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

const categories = [
  { name: 'Dresses', hasSub: true },
  { name: 'Shirts', hasSub: false },
  { name: 'Jeans', hasSub: false },
  { name: 'Swimwear', hasSub: false },
  { name: 'Sleepwear', hasSub: false },
  { name: 'Sportswear', hasSub: false },
  { name: 'Jumpsuits', hasSub: false },
  { name: 'Blazers', hasSub: false },
  { name: 'Jackets', hasSub: false },
  { name: 'Shoes', hasSub: false },
];

export const CategorySidebar: React.FC = () => {
  return (
    <div className="w-full sm:w-64 border border-gray-200 bg-white select-none shrink-0">
      <div className="bg-[#551760] text-white px-5 py-3.5 flex items-center justify-between font-semibold text-sm cursor-pointer shadow-sm">
        <span>Categories</span>
        <ChevronDown className="w-4 h-4 opacity-90" />
      </div>

      <nav className="divide-y divide-gray-100 text-sm">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between px-5 py-2.5 text-gray-700 hover:text-[#551760] hover:bg-gray-50 transition-colors cursor-pointer group"
          >
            <span className="text-[13px] group-hover:font-medium">{cat.name}</span>
            {cat.hasSub && (
              <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#551760]" />
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};
