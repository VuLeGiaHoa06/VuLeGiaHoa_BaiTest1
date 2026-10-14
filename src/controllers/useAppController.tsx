import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Product } from "../models/product.model";
import { mockProducts } from "../models/products.data";
import { getStoredCartCount, setStoredCartCount } from "../models/cart.model";

interface AppContextType {
  products: Product[];
  cartCount: number;
  setCartCount: React.Dispatch<React.SetStateAction<number>>;
  addToCart: (itemOrId?: string | number) => void;
  decrementCart: () => void;
  clearCart: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  submittedSearchText: string;
  setSubmittedSearchText: (text: string) => void;
  handleSearchSubmit: (text: string) => void;
  toastMessage: string | null;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products] = useState<Product[]>(mockProducts);

  const [cartCount, setCartCount] = useState<number>(() => getStoredCartCount());

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [submittedSearchText, setSubmittedSearchText] = useState<string>("");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    setStoredCartCount(cartCount);
  }, [cartCount]);

  const showToast = (message: string) => {
    setToastMessage(message);
    const timer = setTimeout(() => {
      setToastMessage(null);
    }, 2200);
    return () => clearTimeout(timer);
  };

  const addToCart = (itemOrId?: string | number) => {
    setCartCount((prev) => prev + 1);
    let displayName = "Sản phẩm";
    if (typeof itemOrId === "string") {
      displayName = itemOrId;
    } else if (typeof itemOrId === "number") {
      const found = products.find((p) => p.id === itemOrId);
      if (found) displayName = found.name;
    }
    showToast(`Đã thêm "${displayName}" vào giỏ hàng!`);
  };

  const decrementCart = () => {
    setCartCount((prev) => Math.max(0, prev - 1));
  };

  const clearCart = () => {
    setCartCount(0);
    showToast("Đã xóa toàn bộ giỏ hàng!");
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
        decrementCart,
        clearCart,
        searchQuery,
        setSearchQuery,
        submittedSearchText,
        setSubmittedSearchText,
        handleSearchSubmit,
        toastMessage,
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

