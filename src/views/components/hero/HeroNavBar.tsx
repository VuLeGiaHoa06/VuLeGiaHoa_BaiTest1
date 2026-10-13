import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const HeroNavBar: React.FC = () => {
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";
  const isShop = location.pathname === "/shop";
  const isDetail = location.pathname === "/detail";
  const isContact = location.pathname === "/contact";
  const isPages = location.pathname.startsWith("/pages");

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-3 border-b border-gray-100 gap-4">
      <nav className="flex items-center gap-6 text-sm font-medium text-gray-700">
        <Link
          to="/"
          className={`transition-colors ${
            isHome
              ? "text-[#C5832B] font-semibold"
              : "text-gray-700 hover:text-[#551760]"
          }`}
        >
          Home
        </Link>

        <Link
          to="/shop"
          className={`transition-colors ${
            isShop
              ? "text-[#C5832B] font-semibold"
              : "text-gray-700 hover:text-[#551760]"
          }`}
        >
          Shop
        </Link>

        <Link
          to="/detail"
          className={`transition-colors ${
            isDetail
              ? "text-[#C5832B] font-semibold"
              : "text-gray-700 hover:text-[#551760]"
          }`}
        >
          Shop Detail
        </Link>

        <div
          className="relative"
          onMouseEnter={() => setPagesDropdownOpen(true)}
          onMouseLeave={() => setPagesDropdownOpen(false)}
        >
          <div className="flex items-center gap-1 cursor-pointer">
            <p
              className={`transition-colors ${
                isPages
                  ? "text-[#C5832B] font-semibold"
                  : "text-gray-700 hover:text-[#551760]"
              }`}
            >
              Pages
            </p>
            <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
          </div>

          {pagesDropdownOpen && (
            <div className="absolute left-0 top-full pt-1 z-30 w-44">
              <div className="bg-white border border-gray-200 shadow-md p-4 flex justify-center items-center ">
                <p className="font-bold text-xs text-gray-700">ComingPages</p>
              </div>
            </div>
          )}
        </div>

        <Link
          to="/contact"
          className={`transition-colors ${
            isContact
              ? "text-[#C5832B] font-semibold"
              : "text-gray-700 hover:text-[#551760]"
          }`}
        >
          Contact
        </Link>
      </nav>

      <div className="flex items-center gap-4 text-sm font-medium text-gray-700">
        <Link to="/login" className="hover:text-[#551760] transition-colors">
          Login
        </Link>
        <Link to="/register" className="hover:text-[#551760] transition-colors">
          Register
        </Link>
      </div>
    </div>
  );
};
