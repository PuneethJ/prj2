import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductGrid } from '../components/ProductGrid';
import { products } from '../data/products';
import type { SortOption, CategoryFilter } from '../types';

export function ProductsPage() {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const category = (searchParams.get('category') as CategoryFilter) || 'all';
  const [sort, setSort] = useState<SortOption>('rating-desc');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:justify-between sm:items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">All Products</h1>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full sm:w-auto border border-gray-300 rounded-md px-4 py-2"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className="w-full sm:w-auto border border-gray-300 rounded-md px-4 py-2"
          >
            <option value="rating-desc">Top Rated</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name-asc">Name: A to Z</option>
            <option value="name-desc">Name: Z to A</option>
          </select>
        </div>
      </div>
      <ProductGrid
        products={products}
        sort={sort}
        category={category}
        searchQuery={searchQuery}
      />
    </div>
  );
}