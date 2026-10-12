import React from "react";
import { MapPin, Mail, Phone, ChevronRight } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Our Shop", href: "#" },
  { label: "Shop Detail", href: "#" },
  { label: "Shopping Cart", href: "#" },
  { label: "Checkout", href: "#" },
  { label: "Contact Us", href: "#" },
];

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#551760] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          <div className="space-y-6 max-w-sm">
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
              Dolore erat dolor sit lorem vero amet. Sed sit lorem magna,
              ipsum no sit erat lorem et magna ipsum dolore amet erat.
            </p>

            <div className="space-y-3.5 text-xs sm:text-sm text-white/90">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 shrink-0 text-white fill-white/20" />
                <span>123 Street, New York, USA</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 shrink-0 text-white fill-white/20" />
                <span>info@example.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 shrink-0 text-white fill-white/20" />
                <span>+012 345 67890</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-bold text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/90">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-1.5 hover:text-white hover:underline transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-white stroke-[2.5]" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-bold text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/90">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-1.5 hover:text-white hover:underline transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-white stroke-[2.5]" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 py-4 px-6 sm:px-10 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] sm:text-xs text-white/90">
          <div>
            <span>© </span>
            <span className="font-bold">Your Site Name</span>
            <span>. All Rights Reserved. Designed by </span>
            <span className="font-bold">HTML Codex</span>
            <br className="sm:hidden" />
            <span className="mt-1 block sm:inline sm:mt-0">
              {" "}Distributed By{" "}
              <a href="https://themewagon.com" target="_blank" rel="noreferrer" className="underline hover:text-white">
                ThemeWagon
              </a>
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <div className="h-5 px-1.5 bg-white text-blue-900 font-extrabold text-[9px] rounded-xs flex items-center justify-center tracking-tighter shadow-2xs">
              VISA
            </div>
            <div className="h-5 px-1.5 bg-white rounded-xs flex items-center justify-center shadow-2xs">
              <div className="flex -space-x-1">
                <span className="w-2.5 h-2.5 rounded-full bg-red-600 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block opacity-90" />
              </div>
            </div>
            <div className="h-5 px-1.5 bg-white text-[#003087] font-black text-[9px] italic rounded-xs flex items-center justify-center shadow-2xs">
              PayPal
            </div>
            <div className="h-5 px-1.5 bg-[#0070d1] text-white font-bold text-[8px] rounded-xs flex items-center justify-center tracking-tighter shadow-2xs">
              AMEX
            </div>
            <div className="h-5 px-1.5 bg-[#00579f] text-white font-bold text-[8px] rounded-xs flex items-center justify-center tracking-tighter shadow-2xs">
              Electron
            </div>
            <div className="h-5 px-1.5 bg-white rounded-xs flex items-center justify-center shadow-2xs">
              <div className="flex -space-x-1">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-red-600 inline-block opacity-90" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
