import React from 'react';
import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">404</h1>
        <p className="mt-2 text-lg text-gray-600">Page not found</p>
        <Link
          to="/"
          className="mt-6 inline-block bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}