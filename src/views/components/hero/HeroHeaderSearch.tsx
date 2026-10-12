import React from 'react';
import { Search, Heart, ShoppingCart } from 'lucide-react';
import { useAppController } from '../../../controllers/useAppController';
import { useNavigate } from 'react-router-dom';

export const HeroHeaderSearch: React.FC = () => {
  const { cartCount, searchQuery, setSearchQuery, handleSearchSubmit } = useAppController();
  const navigate = useNavigate();

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      handleSearchSubmit(searchQuery);
      navigate('/detail');
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-4 px-2 sm:px-4">
      <div className="hidden lg:block w-64">
      </div>

      <form onSubmit={onSearch} className="flex-1 max-w-xl w-full flex items-center border border-gray-300">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for products"
          className="flex-1 px-4 py-2 text-sm text-gray-700 outline-none placeholder:text-gray-400"
        />
        <button
          type="submit"
          className="px-3.5 py-2 text-[#551760] hover:text-[#3e1046] transition-colors"
          aria-label="Search"
        >
          <Search className="w-4 h-4" />
        </button>
      </form>

      <div className="flex items-center gap-4 text-xs font-semibold text-[#551760]">
        <div className="flex items-center gap-1.5 border border-gray-200 px-3 py-1.5 rounded-xs cursor-pointer hover:bg-gray-50">
          <Heart className="w-4 h-4 text-[#551760] fill-[#551760]" />
          <span>0</span>
        </div>
        <div className="flex items-center gap-1.5 border border-gray-200 px-3 py-1.5 rounded-xs cursor-pointer hover:bg-gray-50">
          <ShoppingCart className="w-4 h-4 text-[#551760] fill-[#551760]" />
          <span>{cartCount}</span>
        </div>
      </div>
    </div>
  );
};
