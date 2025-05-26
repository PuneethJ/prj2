import React from 'react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../store/cart';
import { products } from '../data/products';
import { formatPrice } from '../lib/utils';
import { Trash2 } from 'lucide-react';

export function CartPage() {
  const { items, removeItem, updateQuantity } = useCartStore();
  
  const cartTotal = items.reduce((total, item) => {
    const product = products.find(p => p.id === item.productId);
    return total + (product?.price || 0) * item.quantity;
  }, 0);

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Your cart is empty</h2>
          <p className="mt-4 text-gray-500">Add some items to your cart to get started.</p>
          <Link
            to="/products"
            className="mt-8 inline-block bg-indigo-600 text-white py-3 px-8 rounded-md hover:bg-indigo-700"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          {items.map((item) => {
            const product = products.find(p => p.id === item.productId);
            if (!product) return null;
            
            return (
              <div key={item.productId} className="flex items-center py-4 border-b">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Size: {item.selectedSize}, Color: {item.selectedColor}
                  </p>
                  <div className="mt-2 flex items-center">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.productId, parseInt(e.target.value))}
                      className="w-20 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                    <button
                      onClick={() => removeItem(item.productId)}
                      className="ml-4 text-red-600 hover:text-red-800"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-gray-900">
                    {formatPrice(product.price * item.quantity)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="lg:col-span-4">
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
            <div className="mt-6 flex justify-between">
              <span>Subtotal</span>
              <span>{formatPrice(cartTotal)}</span>
            </div>
            <div className="mt-6">
              <Link
                to="/checkout"
                className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 text-center block"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}