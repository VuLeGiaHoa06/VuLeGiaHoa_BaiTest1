import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, Sparkles } from "lucide-react";

interface ComingSoonPageProps {
  pageTitle?: string;
}

export const ComingSoonPage: React.FC<ComingSoonPageProps> = ({
  pageTitle = "Page",
}) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full bg-white border border-gray-200 p-8 sm:p-10 text-center shadow-xs flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-purple-50 text-[#551760] flex items-center justify-center mb-6 border border-purple-100">
          <Clock className="w-8 h-8" />
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-800 text-xs font-semibold rounded-full mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>Under Construction</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mb-3">
          Coming Soon
        </h1>

        <p className="text-xs sm:text-sm text-gray-500 mb-8 leading-relaxed">
          Trang <span className="font-semibold text-gray-700">{pageTitle}</span> đang được hoàn thiện. Vui lòng quay lại sau!
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
          <button
            onClick={() => navigate(-1)}
            className="w-full py-2.5 px-4 border border-gray-300 text-gray-700 hover:bg-gray-50 text-xs font-semibold transition-colors cursor-pointer flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Quay lại</span>
          </button>

          <Link
            to="/"
            className="w-full py-2.5 px-4 bg-[#551760] hover:bg-[#43124c] text-white text-xs font-semibold transition-colors flex items-center justify-center"
          >
            Về trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
};
