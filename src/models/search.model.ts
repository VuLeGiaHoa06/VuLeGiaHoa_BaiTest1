// Models/search.model.ts: Quản lý cấu trúc dữ liệu và logic liên quan đến tìm kiếm

export interface SearchState {
  query: string;
  submittedText: string;
}

/**
 * Validate từ khóa tìm kiếm: kiểm tra rỗng hoặc toàn khoảng trắng
 */
export const validateSearchQuery = (query: string): { isValid: boolean; trimmedQuery: string; error?: string } => {
  const trimmed = query.trim();
  if (!trimmed) {
    return {
      isValid: false,
      trimmedQuery: "",
      error: "Vui lòng nhập từ khóa tìm kiếm!",
    };
  }
  return {
    isValid: true,
    trimmedQuery: trimmed,
  };
};
