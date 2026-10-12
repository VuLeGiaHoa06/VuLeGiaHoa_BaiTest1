import React, { useState } from 'react';
import { useAppController } from '../../controllers/useAppController';
import { Search, FileText, ArrowLeft, RefreshCw, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

export const DetailPage: React.FC = () => {
  const { submittedSearchText, setSubmittedSearchText } = useAppController();
  const [textareaContent, setTextareaContent] = useState<string>(
    submittedSearchText
      ? `[Dữ liệu nhận từ thanh tìm kiếm]:\n${submittedSearchText}`
      : "Nhập hoặc xem dữ liệu chi tiết tại đây..."
  );

  React.useEffect(() => {
    if (submittedSearchText) {
      setTextareaContent(`[Dữ liệu nhận từ thanh tìm kiếm]:\n${submittedSearchText}`);
    }
  }, [submittedSearchText]);

  const handleReset = () => {
    setTextareaContent('');
    setSubmittedSearchText('');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="flex items-center justify-between">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Quay lại Trang Chủ</span>
        </Link>
        <span className="text-xs bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full font-semibold">
          Giao diện Trang Detail (Mô hình MVC)
        </span>
      </div>

      <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden p-6 sm:p-8 space-y-6">
        <div className="border-b border-gray-100 pb-5">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-indigo-600 text-white rounded-xl shadow-sm">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Trang Chi Tiết & Hiển Thị Dữ Liệu</h1>
              <p className="text-sm text-gray-500">
                Hiển thị dữ liệu tìm kiếm truyền từ Controller và cho phép chỉnh sửa trực tiếp qua Textarea.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-700">
              <Search className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                Từ khóa vừa tìm kiếm (Model State)
              </span>
              <span className="text-sm font-bold text-indigo-700">
                {submittedSearchText || '(Chưa có từ khóa nào được tìm kiếm)'}
              </span>
            </div>
          </div>

          {submittedSearchText && (
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-rose-600 transition-colors cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Xóa từ khóa</span>
            </button>
          )}
        </div>

        <div className="space-y-3">
          <label htmlFor="detail-textarea" className="block text-sm font-bold text-gray-800">
            Nội dung chi tiết (Textarea):
          </label>
          <div className="relative">
            <textarea
              id="detail-textarea"
              rows={8}
              value={textareaContent}
              onChange={(e) => setTextareaContent(e.target.value)}
              placeholder="Nhập bất kỳ dữ liệu nào bạn muốn tại đây..."
              className="w-full p-4 rounded-2xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-sm leading-relaxed text-gray-800 shadow-inner resize-y transition-all"
            />
          </div>
          <div className="flex items-center justify-between text-xs text-gray-400">
            <span>Số ký tự: {textareaContent.length}</span>
            <span>Hỗ trợ nhập và hiển thị văn bản đa dòng</span>
          </div>
        </div>

        <div className="pt-4 flex flex-wrap gap-3">
          <button
            onClick={() => alert('Đã lưu nội dung: ' + textareaContent)}
            className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl text-sm shadow-sm transition-all cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Xác nhận / Lưu nội dung</span>
          </button>
          <button
            onClick={handleReset}
            className="px-5 py-2.5 border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold rounded-xl text-sm transition-all cursor-pointer"
          >
            Làm mới
          </button>
        </div>
      </div>
    </div>
  );
};
