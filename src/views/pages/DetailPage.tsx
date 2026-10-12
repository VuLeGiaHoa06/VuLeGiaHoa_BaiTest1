import React from "react";
import { useAppController } from "../../controllers/useAppController";
import { HeroHeaderSearch, HeroNavBar, CategorySidebar } from "../components/hero";

export const DetailPage: React.FC = () => {
  const { submittedSearchText } = useAppController();

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <HeroHeaderSearch />

        <div className="flex flex-col lg:flex-row gap-6 items-start mt-2">
          <CategorySidebar />

          <div className="flex-1 w-full flex flex-col gap-6">
            <HeroNavBar />

            <div className="w-full min-h-[350px] bg-white border border-gray-200 p-4">
              <div className="w-full max-w-sm border border-gray-300 p-2 text-sm text-gray-800 bg-white">
                {submittedSearchText || "Reasonable Price"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
