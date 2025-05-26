export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  category: string;
  sizes: string[];
  colors: string[];
  featured?: boolean;
  rating: number;
  reviews: number;
  stock: number;
}

export interface CartItem {
  productId: string;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

export interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

export type SortOption = 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc' | 'rating-desc';
export type CategoryFilter = 'all' | 'men' | 'women' | 'accessories';

export interface CheckoutFormData {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  cardNumber: string;
  cardExpiry: string;
  cardCvc: string;
}