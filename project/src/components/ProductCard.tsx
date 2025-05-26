import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Product } from '../types';
import { formatPrice } from '../lib/utils';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/products/${product.id}`} className="group">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
      <div className="mt-1 flex items-center">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < product.rating ? 'text-yellow-400' : 'text-gray-200'
              }`}
              fill="currentColor"
            />
          ))}
        </div>
        <span className="ml-2 text-sm text-gray-500">({product.reviews})</span>
      </div>
      <p className="mt-1 text-lg font-medium text-gray-900">
        {formatPrice(product.price)}
      </p>
    </Link>
  );
}