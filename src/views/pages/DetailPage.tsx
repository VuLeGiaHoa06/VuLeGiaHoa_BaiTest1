import React, { useState, useEffect } from "react";
import { useAppController } from "../../controllers/useAppController";
import { HeroHeaderSearch, HeroNavBar, CategorySidebar } from "../components/hero";

export const DetailPage: React.FC = () => {
  const { submittedSearchText } = useAppController();
  const [content, setContent] = useState<string>(submittedSearchText || "");

  useEffect(() => {
    setContent(submittedSearchText || "");
  }, [submittedSearchText]);

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <HeroHeaderSearch />

        <div className="flex flex-col lg:flex-row gap-6 items-start mt-2">
          <CategorySidebar />

          <div className="flex-1 w-full flex flex-col gap-6">
            <HeroNavBar />

            <div className="w-full bg-white border border-gray-200 p-6 min-h-[350px]">
              {submittedSearchText && submittedSearchText.trim() ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                    <p className="text-sm text-gray-500">
                      Kết quả tìm kiếm cho:{" "}
                      <span className="font-semibold text-gray-900">
                        "{submittedSearchText}"
                      </span>
                    </p>
                  </div>
                  <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows={12}
                    className="w-full p-4 border border-gray-200 text-sm text-gray-800 outline-none resize-y focus:border-gray-400 font-sans leading-relaxed rounded-xs"
                    placeholder="Nhập nội dung ghi chú / chi tiết..."
                  />
                </div>
              ) : (
                /* Trạng thái rỗng (Empty State) khi chưa search gì */
                <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center mb-4 text-[#551760]">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">
                    Chưa có dữ liệu tìm kiếm
                  </h3>
                  <p className="text-sm text-gray-500 max-w-md mb-6">
                    Bạn chưa nhập từ khóa tìm kiếm nào. Vui lòng nhập từ khóa vào ô tìm kiếm phía trên hoặc quay về trang chủ để khám phá sản phẩm.
                  </p>
                  <a
                    href="/"
                    className="inline-flex items-center px-5 py-2.5 bg-[#551760] text-white text-xs font-semibold rounded-md shadow-xs hover:bg-[#43124c] transition-colors"
                  >
                    Về Trang Chủ
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
