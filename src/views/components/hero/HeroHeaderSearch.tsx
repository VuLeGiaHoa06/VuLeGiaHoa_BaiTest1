import React, { useState, useRef, useEffect } from "react";
import { Search, Heart, ShoppingCart, Plus, Minus, Trash2, X } from "lucide-react";
import { useAppController } from "../../../controllers/useAppController";
import { validateSearchQuery } from "../../../models/search.model";
import { useNavigate } from "react-router-dom";

export const HeroHeaderSearch: React.FC = () => {
  const {
    cartCount,
    addToCart,
    decrementCart,
    clearCart,
    searchQuery,
    setSearchQuery,
    handleSearchSubmit,
  } = useAppController();
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [badgeBump, setBadgeBump] = useState<boolean>(false);
  const cartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cartCount > 0) {
      setBadgeBump(true);
      const timer = setTimeout(() => setBadgeBump(false), 300);
      return () => clearTimeout(timer);
    }
  }, [cartCount]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setIsCartOpen(false);
      }
    };
    if (isCartOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCartOpen]);

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateSearchQuery(searchQuery);

    if (!result.isValid) {
      setErrorMessage(result.error || "Vui lòng nhập từ khóa tìm kiếm!");
      return;
    }

    setErrorMessage("");
    handleSearchSubmit(result.trimmedQuery);
    navigate("/detail");
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-3 px-2 sm:px-4">
      <div className="hidden lg:block w-64 shrink-0"></div>
      <div className="flex-1 max-w-xl w-full flex flex-col">
        <form
          onSubmit={onSearch}
          className={`w-full flex items-center border transition-all duration-200 ${
            errorMessage
              ? "border-red-500 shadow-xs"
              : "border-gray-300 hover:border-gray-400 focus-within:border-[#551760] focus-within:ring-2 focus-within:ring-purple-100"
          }`}
        >
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              if (errorMessage) setErrorMessage("");
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onSearch(e);
              }
            }}
            placeholder="Search for products"
            className="flex-1 px-4 py-2 text-sm text-gray-700 outline-none placeholder:text-gray-400 bg-transparent transition-colors"
          />
          <button
            type="submit"
            className="px-3.5 py-2 text-[#551760] hover:text-[#3e1046] hover:bg-purple-50 active:bg-purple-100 active:scale-95 transition-all duration-150 border-l border-gray-200 cursor-pointer"
            aria-label="Search"
          >
            <Search className="w-4 h-4 stroke-[2.5]" />
          </button>
        </form>
        {errorMessage && (
          <span className="text-xs text-red-500 mt-1 pl-1 font-medium animate-pulse">
            {errorMessage}
          </span>
        )}
      </div>
      <div className="flex items-center gap-2 text-xs font-semibold text-[#551760] relative">
        <div className="flex items-center gap-1.5 border border-gray-200 px-3 py-1.5 rounded-xs cursor-pointer hover:bg-gray-100 hover:border-gray-300 active:scale-95 transition-all duration-150">
          <Heart className="w-4 h-4 text-[#551760] fill-[#551760]" />
          <span>0</span>
        </div>
        <div ref={cartRef} className="relative">
          <button
            type="button"
            onClick={() => setIsCartOpen((prev) => !prev)}
            className={`flex items-center gap-1.5 border border-gray-200 px-3 py-1.5 rounded-xs cursor-pointer hover:bg-gray-100 hover:border-gray-300 active:scale-95 transition-all duration-150 ${
              badgeBump ? "scale-110 text-purple-900 border-[#551760]" : ""
            }`}
            aria-label="View Cart"
          >
            <ShoppingCart
              className={`w-4 h-4 text-[#551760] fill-[#551760] transition-transform duration-200 ${
                badgeBump ? "scale-125" : ""
              }`}
            />
            <span
              className={`font-bold transition-all duration-200 ${
                badgeBump ? "text-[#551760] scale-125" : ""
              }`}
            >
              {cartCount}
            </span>
          </button>
          {isCartOpen && (
            <div className="absolute right-0 top-full mt-2 w-72 sm:w-80 bg-white border border-gray-200 rounded-md shadow-xl z-50 p-4 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <span className="font-bold text-gray-900 text-sm">
                  Giỏ hàng ({cartCount})
                </span>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-gray-400 hover:text-gray-600 hover:scale-110 active:scale-95 transition-all cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {cartCount === 0 ? (
                <div className="py-6 text-center text-gray-400 text-xs">
                  <ShoppingCart className="w-8 h-8 mx-auto mb-2 opacity-40" />
                  Giỏ hàng của bạn đang trống
                </div>
              ) : (
                <div className="py-4 space-y-4">
                  <div className="flex items-center justify-between bg-gray-50 p-3 rounded">
                    <span className="text-xs text-gray-700">Tổng sản phẩm:</span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={decrementCart}
                        aria-label="Giảm số lượng"
                        className="w-6 h-6 rounded bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-100 text-gray-700 cursor-pointer"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-bold text-sm w-6 text-center text-gray-900">
                        {cartCount}
                      </span>
                      <button
                        onClick={() => addToCart()}
                        aria-label="Tăng số lượng"
                        className="w-6 h-6 rounded bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-100 text-gray-700 cursor-pointer"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <button
                      onClick={clearCart}
                      className="flex-1 py-1.5 px-3 border border-red-200 text-red-600 hover:bg-red-50 text-xs rounded transition-colors flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      Xóa giỏ hàng
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
