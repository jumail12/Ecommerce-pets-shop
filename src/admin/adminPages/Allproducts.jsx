import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Allproducts = () => {
  const [allp, setAllp] = useState([]);

  const data = async () => {
    const res = await axios.get(`http://localhost:3001/products`);
    setAllp(res.data);
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <nav className="w-64 bg-white shadow-md p-6">
        <ul className="space-y-4">
          <li>
            <Link
              to="/admin/allpro/catall"
              className="block text-lg font-semibold text-blue-600 hover:text-blue-800"
            >
              Cat Products
            </Link>
          </li>
          <li>
            <Link
              to="/admin/allpro/dogall"
              className="block text-lg font-semibold text-blue-600 hover:text-blue-800"
            >
              Dog Products
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="flex-1 p-9">
        <h1 className="text-2xl font-bold mb-4">All Products</h1>
        <h3 className='text-md font-bold mb-4'>Total Products: {allp.length}</h3>

        <div>
          {allp.length > 0 ? (
            <div className="grid grid-cols-2 gap-6">
              {allp.map((item) => (
                <div
                  key={item.id}
                  className="bg-white shadow-md rounded-md p-4 flex flex-col items-center"
                >
                  <img
                    src={item.url}
                    alt={item.heading}
                    className="w-full h-40 object-cover mb-4 rounded-md"
                  />
                  <h2 className="text-lg font-semibold">{item.heading}</h2>
                  <p className="text-gray-600">Rating: ⭐ {item.rating}</p>
                  <p className="text-gray-900 font-bold">${item.price}</p>
                </div>
              ))}
            </div>
          ) : (
            <h1>No items...!</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Allproducts;
