import axios from 'axios';
import React, { useState } from 'react';

const Addproducts = () => {
  const initialV = {
    id: '',
    heading: '',
    discription: '',
    url: '',
    catogory: '',
    price: '',
    rating: ''
  };

  const [formV, setFormValues] = useState(initialV);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async(e) => {
    
  try{
    const res=await axios.post(`http://localhost:3001/products`,{
      id: formV.id,
      heading: formV.heading,
      discription: formV.discription,
      url: formV.url,
      catogory: formV.catogory,
      price: formV.price,
      rating: formV.rating,
      qty:1
    });
 alert("Item added successfully..!")
    

  }catch{
    console.log("Error in posting new item");
  }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Add New Product</h1>
      </div>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-md p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label className="mb-2 text-lg font-semibold text-gray-700">Item ID</label>
            <input
              type="text"
              placeholder="Item Id"
              value={formV.id}
              onChange={handleChange}
              name="id"
              className="border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-lg font-semibold text-gray-700">Item Heading</label>
            <input
              type="text"
              placeholder="Item Heading"
              value={formV.heading}
              onChange={handleChange}
              name="heading"
              className="border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-lg font-semibold text-gray-700">Item Description</label>
            <input
              type="text"
              placeholder="Item Description"
              value={formV.discription}
              onChange={handleChange}
              name="discription"
              className="border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-lg font-semibold text-gray-700">Item URL</label>
            <input
              type="text"
              placeholder="Item URL"
              value={formV.url}
              onChange={handleChange}
              name="url"
              className="border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-lg font-semibold text-gray-700">Item Category</label>
            <input
              type="text"
              placeholder="Item Category"
              value={formV.catogory}
              onChange={handleChange}
              name="catogory"
              className="border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-lg font-semibold text-gray-700">Item Price</label>
            <input
              type="text"
              placeholder="Item Price"
              value={formV.price}
              onChange={handleChange}
              name="price"
              className="border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-lg font-semibold text-gray-700">Item Rating</label>
            <input
              type="text"
              placeholder="Item Rating"
              value={formV.rating}
              onChange={handleChange}
              name="rating"
              className="border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addproducts;