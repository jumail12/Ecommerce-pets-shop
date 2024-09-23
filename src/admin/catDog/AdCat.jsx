import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {ToastContainer,toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const AdCat = () => {
  const [allp, setAllp] = useState([]);

  const data = async () => {
    const res = await axios.get(`http://localhost:3001/products`);
    setAllp(res.data);
  };

  useEffect(() => {
    data();
  }, [allp]);

  const catPro = allp.filter(
    (item) => item.catogory === 'cat-food' || item.catogory === 'cat-treat'
  );

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
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <ToastContainer/>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Cat Products</h1>
        <h3 className="text-md font-bold mb-4">Total Products: {catPro.length}</h3>
      </div>

      {catPro.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {catPro.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={item.url}
                alt={item.heading}
                className="w-full h-48 object-cover cursor-pointer"
                onClick={()=>proDetails(item.id)}
              />
              <div className="p-4 flex flex-col items-center">
                <h2 className="text-lg font-semibold text-gray-800 cursor-pointer"  onClick={()=>proDetails(item.id)}>{item.heading}</h2>
                <p className="text-gray-600 mt-1">Rating: ⭐ {item.rating}</p>
                <p className="text-gray-900 font-bold mt-2">${item.price}</p>

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
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center mt-10">
          <h1 className="text-2xl text-gray-600">No items available!</h1>
        </div>
      )}
    </div>
  );
};

export default AdCat;
