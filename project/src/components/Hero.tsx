import React from 'react';

export function Hero() {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1920"
          alt="Fashion banner"
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-40"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Summer Collection 2024
        </h1>
        <p className="mt-6 text-xl text-white max-w-3xl">
          Discover our latest arrivals featuring breathable fabrics and trendy designs perfect for the summer season.
        </p>
        <div className="mt-10">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}