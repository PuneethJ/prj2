import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { useCartStore } from '../store/cart';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = useCartStore((state) => state.items);
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button 
              onClick={toggleMenu}
              className="sm:hidden p-2 hover:bg-gray-100 rounded-md"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
            <Link to="/" className="text-2xl font-bold text-gray-900 ml-2 sm:ml-0">
              STYLE
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden sm:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
            <Link to="/products?category=men" className="text-gray-700 hover:text-gray-900">Men</Link>
            <Link to="/products?category=women" className="text-gray-700 hover:text-gray-900">Women</Link>
            <Link to="/products?category=accessories" className="text-gray-700 hover:text-gray-900">Accessories</Link>
            <Link to="/about" className="text-gray-700 hover:text-gray-900">About</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link to="/search" className="p-2 hover:bg-gray-100 rounded-md">
              <Search className="h-5 w-5 text-gray-700" />
            </Link>
            <Link to="/cart" className="p-2 hover:bg-gray-100 rounded-md relative">
              <ShoppingCart className="h-5 w-5 text-gray-700" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/products?category=men"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={toggleMenu}
              >
                Men
              </Link>
              <Link
                to="/products?category=women"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={toggleMenu}
              >
                Women
              </Link>
              <Link
                to="/products?category=accessories"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={toggleMenu}
              >
                Accessories
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={toggleMenu}
              >
                About
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}