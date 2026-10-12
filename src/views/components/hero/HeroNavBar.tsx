import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/', active: true },
  { label: 'Shop', path: '/shop' },
  { label: 'Shop Detail', path: '/detail' },
  { label: 'Pages', path: '#', hasDropdown: true },
  { label: 'Contact', path: '/contact' },
];

export const HeroNavBar: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-3 border-b border-gray-100 gap-4">
      <nav className="flex items-center gap-6 text-sm font-medium text-gray-700">
        {navItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-1 group cursor-pointer">
            <Link
              to={item.path}
              className={`transition-colors ${
                item.active
                  ? 'text-[#C5832B] font-semibold'
                  : 'text-gray-700 hover:text-[#551760]'
              }`}
            >
              {item.label}
            </Link>
            {item.hasDropdown && (
              <ChevronDown className="w-3.5 h-3.5 text-gray-500 group-hover:text-[#551760]" />
            )}
          </div>
        ))}
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
