export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  image: string;
  description: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
