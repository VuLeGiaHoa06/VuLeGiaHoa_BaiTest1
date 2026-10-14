export const CART_STORAGE_KEY = "cartCount";

export interface CartState {
  count: number;
}

export const getStoredCartCount = (): number => {
  try {
    const saved = localStorage.getItem(CART_STORAGE_KEY);
    if (saved !== null) {
      const parsed = parseInt(saved, 10);
      return isNaN(parsed) || parsed < 0 ? 0 : parsed;
    }
  } catch (error) {
    console.error("Lỗi khi đọc cartCount từ localStorage:", error);
  }
  return 0;
};

export const setStoredCartCount = (count: number): void => {
  try {
    localStorage.setItem(CART_STORAGE_KEY, count.toString());
  } catch (error) {
    console.error("Lỗi khi lưu cartCount vào localStorage:", error);
  }
};
