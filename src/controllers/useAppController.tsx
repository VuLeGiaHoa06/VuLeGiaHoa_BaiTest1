import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Product } from "../models/product.model";
import { mockProducts } from "../models/products.data";

const CART_STORAGE_KEY = "cartCount";

interface AppContextType {
  products: Product[];
  cartCount: number;
  setCartCount: React.Dispatch<React.SetStateAction<number>>;
  addToCart: (productId?: number) => void;
  clearCart: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  submittedSearchText: string;
  setSubmittedSearchText: (text: string) => void;
  handleSearchSubmit: (text: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products] = useState<Product[]>(mockProducts);

  // Khởi tạo cartCount từ localStorage (nếu có)
  const [cartCount, setCartCount] = useState<number>(() => {
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
  });

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [submittedSearchText, setSubmittedSearchText] = useState<string>("");

  // Lưu cartCount vào localStorage mỗi khi giá trị thay đổi
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, cartCount.toString());
    } catch (error) {
      console.error("Lỗi khi lưu cartCount vào localStorage:", error);
    }
  }, [cartCount]);

  const addToCart = (_productId?: number) => {
    setCartCount((prev) => prev + 1);
  };

  const clearCart = () => {
    setCartCount(0);
  };

  const handleSearchSubmit = (text: string) => {
    setSubmittedSearchText(text);
  };

  return (
    <AppContext.Provider
      value={{
        products,
        cartCount,
        setCartCount,
        addToCart,
        clearCart,
        searchQuery,
        setSearchQuery,
        submittedSearchText,
        setSubmittedSearchText,
        handleSearchSubmit,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppController = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppController must be used within an AppProvider");
  }
  return context;
};

