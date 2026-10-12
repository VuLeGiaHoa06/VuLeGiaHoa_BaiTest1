import React from "react";

export interface AwardItem {
  id: number;
  badgeType: "pink-circle" | "rose-oval" | "gold-square" | "green-leaf" | "black-circle" | "blue-ribbon";
  badgeTopText?: string;
  badgeMainText: string;
  badgeYear?: string;
  badgeFooter?: string;
  productName: string;
  productSubtitle?: string;
  awardLine1: string;
  awardLine2?: string;
  awardOrganization: string;
}

interface AwardBadgeCardProps {
  award: AwardItem;
}

export const AwardBadgeCard: React.FC<AwardBadgeCardProps> = ({ award }) => {
  const renderBadgeIcon = () => {
    switch (award.badgeType) {
      case "pink-circle":
        return (
          <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full border-2 border-pink-400 p-1 flex flex-col items-center justify-center text-center shadow-xs bg-white text-pink-500 font-bold">
            <span className="text-[7px] tracking-wider uppercase">{award.badgeTopText || "AWARD WINNER"}</span>
            <span className="text-xs font-black text-pink-600">{award.badgeYear || "2024"}</span>
            <span className="text-[8px] uppercase font-extrabold">{award.badgeMainText}</span>
            <span className="text-[6px] tracking-tighter text-gray-400">{award.badgeFooter}</span>
          </div>
        );
      case "rose-oval":
        return (
          <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-pink-600 p-1 flex flex-col items-center justify-center text-center shadow-xs text-white">
            <span className="text-[7px] italic text-pink-100">{award.badgeTopText || "beautybible.com"}</span>
            <span className="text-xs font-black tracking-wide leading-tight">{award.badgeMainText}</span>
            <span className="text-[8px] uppercase tracking-wider font-semibold">AWARDS</span>
            <span className="text-[9px] bg-slate-300 text-gray-800 font-bold px-2 py-0.5 rounded-full mt-0.5">{award.badgeYear || "2023"}</span>
          </div>
        );
      case "gold-square":
        return (
          <div className="relative w-20 h-20 sm:w-22 sm:h-22 flex items-center justify-center">
            <div className="w-16 h-16 bg-gradient-to-tr from-purple-900 to-pink-600 rounded-sm p-1 flex flex-col items-center justify-center text-white text-center shadow-xs border border-white">
              <span className="text-[7px] uppercase font-extrabold leading-tight">GLOBAL</span>
              <span className="text-[8px] uppercase font-black leading-tight text-yellow-300">MAKEUP</span>
              <span className="text-[7px] uppercase font-bold">AWARDS</span>
              <span className="text-[8px] font-black">{award.badgeYear || "2022"}</span>
            </div>
            <div className="absolute top-0 right-0 w-6 h-6 rounded-full bg-amber-400 border border-white flex items-center justify-center text-[6px] font-bold text-amber-950 uppercase shadow-xs">
              Winner
            </div>
          </div>
        );
      case "green-leaf":
        return (
          <div className="relative w-20 h-20 sm:w-22 sm:h-22 flex items-center justify-center">
            <div className="w-16 h-16 bg-gradient-to-b from-green-500 to-emerald-700 rounded-sm p-1 flex flex-col items-center justify-center text-white text-center shadow-xs">
              <span className="text-[7px] font-bold">GLOBAL</span>
              <span className="text-[8px] font-extrabold text-lime-200">GREEN</span>
              <span className="text-[7px]">BEAUTY AWARDS</span>
              <span className="text-[8px] font-black">{award.badgeYear || "2022"}</span>
            </div>
            <div className="absolute top-0 right-0 w-6 h-6 rounded-full bg-slate-300 border border-white flex items-center justify-center text-[6px] font-bold text-slate-800 uppercase shadow-xs">
              Silver
            </div>
          </div>
        );
      case "black-circle":
        return (
          <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-black p-1 flex flex-col items-center justify-center text-center shadow-xs text-white">
            <span className="text-[7px] text-gray-300">{award.badgeYear || "2021"}</span>
            <span className="text-[7px] font-bold tracking-tight">READERS' CHOICE</span>
            <span className="text-[8px] font-extrabold text-amber-400">BEAUTY AWARDS</span>
            <span className="text-[9px] font-bold italic mt-0.5 text-white">InStyle</span>
          </div>
        );
      case "blue-ribbon":
        return (
          <div className="w-20 h-20 sm:w-22 sm:h-22 flex flex-col items-center justify-center">
            <div className="w-16 h-14 bg-gradient-to-b from-blue-300 via-indigo-400 to-purple-400 rounded-t-full flex flex-col items-center justify-center text-white text-center shadow-xs p-1">
              <span className="text-[7px] font-bold tracking-tighter">BEAUTY</span>
              <span className="text-[8px] font-black leading-none text-yellow-200">GLOBAL</span>
              <span className="text-[7px] tracking-tight">AWARDS</span>
            </div>
            <div className="w-18 bg-slate-300 text-slate-800 text-[8px] font-black uppercase text-center py-0.5 rounded-xs shadow-xs border border-white -mt-1">
              Finalist
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center text-center p-2 min-w-[140px] max-w-[170px] select-none">
      <div className="h-24 flex items-center justify-center mb-3">
        {renderBadgeIcon()}
      </div>

      <div className="space-y-1">
        <h4 className="text-xs sm:text-sm font-bold text-gray-800 leading-snug">
          {award.productName}
        </h4>
        {award.productSubtitle && (
          <p className="text-xs font-semibold text-gray-700 leading-tight">
            {award.productSubtitle}
          </p>
        )}
      </div>

      <div className="mt-2 space-y-0.5">
        <p className="text-[10px] text-gray-500 font-medium leading-tight">
          {award.awardLine1}
        </p>
        {award.awardLine2 && (
          <p className="text-[10px] text-gray-500 leading-tight">
            {award.awardLine2}
          </p>
        )}
        <p className="text-[10px] text-gray-400 font-light leading-tight">
          {award.awardOrganization}
        </p>
      </div>
    </div>
  );
};
