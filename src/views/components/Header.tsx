import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X, Store, Heart, User } from 'lucide-react';
import { useAppController } from '../../controllers/useAppController';

const navLinks = [
  { id: 1, title: "FAQs", url: "/faqs" },
  { id: 2, title: "Help", url: "/help" },
  { id: 3, title: "Support", url: "/support" }
];

const socialIcons = [
  {
    id: 1,
    name: 'Facebook',
    url: 'https://facebook.com',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    )
  },
  {
    id: 2,
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
      </svg>
    )
  },
  {
    id: 3,
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    )
  },
  {
    id: 4,
    name: 'Instagram',
    url: 'https://instagram.com',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <circle cx="12" cy="12" r="3.5" fill="none" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    )
  },
  {
    id: 5,
    name: 'YouTube',
    url: 'https://youtube.com',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fillRule="evenodd" clipRule="evenodd" />
      </svg>
    )
  }
];

export const Header: React.FC = () => {
  const { cartCount, searchQuery, setSearchQuery, handleSearchSubmit } = useAppController();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      handleSearchSubmit(searchQuery);
      navigate('/detail');
    }
  };

  return (
    <header className='w-full h-10 bg-[#551760] sticky top-0 z-50 flex justify-between items-center py-0 px-10'>
      <div className='flex items-center gap-2 text-xs text-white'>
        {navLinks.map((l, index) => (
          <React.Fragment key={l.id}>
            <a className='text-white hover:underline' href={l.url}>{l.title}</a>
            {index < navLinks.length - 1 && <span className='text-white/60'>|</span>}
          </React.Fragment>
        ))}
      </div>
      <div className='flex items-center gap-3 text-white'>
        {socialIcons.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="text-white hover:opacity-80 transition-opacity"
              aria-label={item.name}
            >
              <Icon className="w-4 h-4" />
            </a>
          );
        })}
      </div>
    </header>
  );
};
