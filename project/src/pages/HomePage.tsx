import React from 'react';
import { Hero } from '../components/Hero';
import { FeaturedProducts } from '../components/FeaturedProducts';

export function HomePage() {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
    </div>
  );
}