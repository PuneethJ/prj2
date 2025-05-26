import React from 'react';
import { products } from '../data/products';

export function FeaturedProducts() {
  const featuredProducts = products.filter(product => product.featured);

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Featured Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-w-3 aspect-h-4 bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                </div>
                <p className="text-lg font-medium text-gray-900">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}