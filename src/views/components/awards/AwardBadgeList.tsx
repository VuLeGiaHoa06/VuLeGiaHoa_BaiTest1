import React, { useState } from "react";
import { AwardBadgeCard, AwardItem } from "./AwardBadgeCard";

interface AwardBadgeListProps {
  awards?: AwardItem[];
}

const defaultAwards: AwardItem[] = [
  {
    id: 1,
    badgeType: "pink-circle",
    badgeTopText: "AWARD WINNER",
    badgeYear: "2024",
    badgeMainText: "NEWBEAUTY",
    badgeFooter: "THE BEAUTY AUTHORITY",
    productName: "ageLOC®",
    productSubtitle: "LumiSpa® iO",
    awardLine1: "2023 Best",
    awardLine2: "Cleansing Device Award Winner",
    awardOrganization: "NewBeauty Awards",
  },
  {
    id: 2,
    badgeType: "rose-oval",
    badgeTopText: "beautybible.com",
    badgeMainText: "Beauty Bible",
    badgeYear: "2023",
    productName: "Epoch",
    productSubtitle: "Baobab Body Butter",
    awardLine1: "Body Butter Silver Winner",
    awardLine2: "2023 Beauty Bible",
    awardOrganization: "Awards",
  },
  {
    id: 3,
    badgeType: "gold-square",
    badgeMainText: "MAKEUP",
    badgeYear: "2022",
    productName: "Nu Skin",
    productSubtitle: "Enterprises",
    awardLine1: "2022 Best USA Beauty Brand",
    awardLine2: "Global Makeup",
    awardOrganization: "Awards",
  },
  {
    id: 4,
    badgeType: "green-leaf",
    badgeMainText: "GREEN",
    badgeYear: "2022",
    productName: "Epoch® Yin",
    productSubtitle: "& Yang Mask",
    awardLine1: "2022 Most Sustainable",
    awardLine2: "Packaging: Silver Winner",
    awardOrganization: "Global Green Beauty Awards",
  },
  {
    id: 5,
    badgeType: "black-circle",
    badgeYear: "2021",
    badgeMainText: "BEAUTY AWARDS",
    productName: "ageLOC®",
    productSubtitle: "Facial Spa",
    awardLine1: "2021 Readers' Choice Beauty",
    awardLine2: "Award Winner",
    awardOrganization: "InStyle",
  },
  {
    id: 6,
    badgeType: "blue-ribbon",
    badgeMainText: "GLOBAL",
    productName: "Nutricentials®",
    productSubtitle: "Eye Love Bright Eyes",
    awardLine1: "2022 Pure Beauty Award Finalist",
    awardLine2: "Pure Beauty Global",
    awardOrganization: "Awards",
  },
];

export const AwardBadgeList: React.FC<AwardBadgeListProps> = ({
  awards = defaultAwards,
}) => {
  const [activeDot, setActiveDot] = useState(0);

  return (
    <div className="w-full pt-8 pb-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 justify-items-center">
        {awards.map((award) => (
          <AwardBadgeCard key={award.id} award={award} />
        ))}
      </div>

      <div className="flex items-center justify-center gap-1.5 mt-10">
        {[...Array(10)].map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveDot(i)}
            aria-label={`Slide ${i + 1}`}
            className={`w-1.5 h-1.5 rounded-full transition-all cursor-pointer ${
              activeDot === i ? "bg-sky-500 scale-125" : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
