import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic White T-Shirt',
    price: 29.99,
    description: 'Essential cotton t-shirt perfect for everyday wear. Features a comfortable fit and breathable fabric.',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800',
    ],
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Gray'],
    featured: true,
  },
  {
    id: '2',
    name: 'Slim Fit Jeans',
    price: 79.99,
    description: 'Modern slim fit jeans with stretch comfort. Perfect for a casual yet stylish look.',
    images: [
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800',
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800',
    ],
    category: 'men',
    sizes: ['30x32', '32x32', '34x32', '36x32'],
    colors: ['Blue', 'Black', 'Gray'],
  },
  {
    id: '3',
    name: 'Summer Floral Dress',
    price: 89.99,
    description: 'Light and breezy floral dress perfect for summer days. Features a flattering cut and comfortable fabric.',
    images: [
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800',
      'https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=800',
    ],
    category: 'women',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Floral Print', 'Blue Print'],
    featured: true,
  },
  {
    id: '4',
    name: 'Leather Crossbody Bag',
    price: 129.99,
    description: 'Stylish leather crossbody bag with multiple compartments. Perfect for everyday use.',
    images: [
      'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=800',
      'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=800',
    ],
    category: 'accessories',
    sizes: ['One Size'],
    colors: ['Brown', 'Black', 'Tan'],
    featured: true,
  },
];