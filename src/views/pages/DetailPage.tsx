import React, { useState, useEffect } from "react";
import { useAppController } from "../../controllers/useAppController";
import { HeroHeaderSearch, HeroNavBar, CategorySidebar } from "../components/hero";

export const DetailPage: React.FC = () => {
  const { submittedSearchText } = useAppController();
  const [content, setContent] = useState<string>(
    submittedSearchText || "Reasonable Price"
  );

  useEffect(() => {
    if (submittedSearchText) {
      setContent(submittedSearchText);
    }
  }, [submittedSearchText]);

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <HeroHeaderSearch />

        <div className="flex flex-col lg:flex-row gap-6 items-start mt-2">
          <CategorySidebar />

          <div className="flex-1 w-full flex flex-col gap-6">
            <HeroNavBar />

            <div className="w-full bg-white border border-gray-200 p-6">
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={12}
                className="w-full p-4 border border-gray-200 text-sm text-gray-800 outline-none resize-y focus:border-gray-400 font-sans leading-relaxed"
                placeholder="Reasonable Price"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
