import React, { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "../models/product.model";
import { mockProducts } from "../models/products.data";

interface AppContextType {
  products: Product[];
  cartCount: number;
  addToCart: (productId?: number) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  submittedSearchText: string;
  setSubmittedSearchText: (text: string) => void;
  handleSearchSubmit: (text: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products] = useState<Product[]>(mockProducts);
  const [cartCount, setCartCount] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [submittedSearchText, setSubmittedSearchText] = useState<string>("");

  const addToCart = (_productId?: number) => {
    setCartCount((prev) => prev + 1);
  };

  const handleSearchSubmit = (text: string) => {
    setSubmittedSearchText(text);
  };

  return (
    <AppContext.Provider
      value={{
        products,
        cartCount,
        addToCart,
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
