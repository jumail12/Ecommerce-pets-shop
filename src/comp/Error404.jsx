import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
      <p className="text-lg text-gray-500 mb-8">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to={"/"}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg text-lg hover:bg-blue-600 transition"
      >
        Go Back to Homepage
      </Link>
    </div>
  );
}

export default Error404;
