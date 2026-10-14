export interface SearchState {
  query: string;
  submittedText: string;
}

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
