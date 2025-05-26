import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCartStore } from '../store/cart';
import { formatPrice } from '../lib/utils';

export function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);
  const addItem = useCartStore(state => state.addItem);
  
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '');
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-center text-gray-500">Product not found</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      quantity,
      selectedSize,
      selectedColor,
    });
    navigate('/cart');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="mt-4 text-2xl text-gray-900">{formatPrice(product.price)}</p>
          <p className="mt-4 text-gray-500">{product.description}</p>
          
          <div className="mt-8 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Size</label>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                {product.sizes.map((size) => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Color</label>
              <select
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                {product.colors.map((color) => (
                  <option key={color} value={color}>{color}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Quantity</label>
              <input
                type="number"
                min="1"
                max={product.stock}
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            
            <button
              onClick={handleAddToCart}
              className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}