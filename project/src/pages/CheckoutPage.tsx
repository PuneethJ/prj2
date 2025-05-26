import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useCartStore } from '../store/cart';
import { products } from '../data/products';
import { formatPrice } from '../lib/utils';
import type { CheckoutFormData } from '../types';

export function CheckoutPage() {
  const navigate = useNavigate();
  const { items, clearCart } = useCartStore();
  const { register, handleSubmit, formState: { errors } } = useForm<CheckoutFormData>();

  const cartTotal = items.reduce((total, item) => {
    const product = products.find(p => p.id === item.productId);
    return total + (product?.price || 0) * item.quantity;
  }, 0);

  const onSubmit = (data: CheckoutFormData) => {
    // Simulate order processing
    console.log('Order submitted:', data);
    clearCart();
    navigate('/order-confirmation');
  };

  if (items.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <h2 className="text-xl font-medium text-gray-900 mb-4">Contact Information</h2>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    {...register('email', { required: true })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                  {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-medium text-gray-900 mb-4">Shipping Address</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">First Name</label>
                  <input
                    type="text"
                    {...register('firstName', { required: true })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input
                    type="text"
                    {...register('lastName', { required: true })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Address</label>
                  <input
                    type="text"
                    {...register('address', { required: true })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">City</label>
                  <input
                    type="text"
                    {...register('city', { required: true })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">ZIP Code</label>
                  <input
                    type="text"
                    {...register('zipCode', { required: true })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-medium text-gray-900 mb-4">Payment Information</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Card Number</label>
                  <input
                    type="text"
                    {...register('cardNumber', { required: true })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    {...register('cardExpiry', { required: true })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">CVC</label>
                  <input
                    type="text"
                    {...register('cardCvc', { required: true })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700"
            >
              Place Order
            </button>
          </form>
        </div>
        <div className="lg:col-span-4">
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
            <div className="mt-6 space-y-4">
              {items.map((item) => {
                const product = products.find(p => p.id === item.productId);
                if (!product) return null;
                
                return (
                  <div key={item.productId} className="flex justify-between">
                    <div>
                      <p className="text-sm text-gray-600">{product.name}</p>
                      <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      {formatPrice(product.price * item.quantity)}
                    </p>
                  </div>
                );
              })}
              <div className="border-t pt-4 flex justify-between">
                <span className="font-medium">Total</span>
                <span className="font-medium">{formatPrice(cartTotal)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}