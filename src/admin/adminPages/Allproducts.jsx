import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {ToastContainer,toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const Allproducts = () => {
  const [allp, setAllp] = useState([]);

  const data = async () => {
    const res = await axios.get(`http://localhost:3001/products`);
    setAllp(res.data);
  };

  useEffect(() => {
    data();
  }, [allp]);

  // delete function
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:3001/products/${id}`);
      toast.warn('Item Deleted..!');
      console.log(res.data);
    } catch {
      console.log('error');
    }
  };

  // edit function
  const nav = useNavigate();
  const editDta = async (id) => {
    nav(`/admin/edit/${id}`);
  };

  // prodeatails
  const proDetails=(id)=>{
    nav(`/admin/prod/${id}`)
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-blue-500">
      <ToastContainer/>
      {/* Sidebar */}
      <nav className="w-full md:w-64 bg-red-600 text-white p-6 shadow-lg">
        <ul className="space-y-4">
          <li>
            <Link
              to="/admin/allpro/catall"
              className="block text-lg font-semibold hover:text-red-300"
            >
              Cat Products
            </Link>
          </li>
          <li>
            <Link
              to="/admin/allpro/dogall"
              className="block text-lg font-semibold hover:text-red-300"
            >
              Dog Products
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="flex-1 p-9">
        <h1 className="text-2xl font-bold mb-4">All Products</h1>
        <h3 className="text-md font-bold mb-4">Total Products: {allp.length-1}</h3>

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
                    className="w-full h-40 object-cover mb-4 rounded-md cursor-pointer"
                    onClick={()=>proDetails(item.id)}
                  />
                  <h2 className="text-lg font-semibold  cursor-pointer" onClick={()=>proDetails(item.id)}>{item.heading}</h2>
                  <p className="text-gray-600">Rating: ⭐ {item.rating}</p>
                  <p className="text-gray-900 font-bold">${item.price}</p>
                  <div className="flex space-x-2 mt-4">
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                      onClick={() => editDta(item.id)}
                    >
                      Edit
                    </button>
                  </div>
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
