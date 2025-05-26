import React from 'react';
import { ProductCard } from './ProductCard';
import { Product, SortOption, CategoryFilter } from '../types';

interface ProductGridProps {
  products: Product[];
  sort: SortOption;
  category: CategoryFilter;
  searchQuery: string;
}

export function ProductGrid({ products, sort, category, searchQuery }: ProductGridProps) {
  const filteredProducts = products
    .filter((product) => {
      if (category === 'all') return true;
      return product.category === category;
    })
    .filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      switch (sort) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'rating-desc':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}