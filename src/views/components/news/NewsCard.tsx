import React from "react";

export interface NewsArticleItem {
  id: number;
  image: string;
  title: string;
  url?: string;
}

interface NewsCardProps {
  article: NewsArticleItem;
}

export const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  return (
    <div className="bg-white border border-gray-100 flex flex-col justify-between overflow-hidden shadow-2xs hover:shadow-md transition-shadow duration-300 w-full min-w-[170px] sm:min-w-[190px]">
      <div className="p-3 sm:p-4 bg-white flex items-center justify-center">
        <div className="w-full aspect-square overflow-hidden bg-slate-50 flex items-center justify-center">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
      </div>

      <div className="px-4 pb-6 pt-2 text-center">
        <h4 className="text-xs sm:text-sm font-normal text-gray-800 leading-snug line-clamp-3 hover:text-[#551760] transition-colors cursor-pointer">
          {article.title}
        </h4>
      </div>
    </div>
  );
};
