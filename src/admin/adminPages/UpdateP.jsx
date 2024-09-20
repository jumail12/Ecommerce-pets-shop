import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UpdateP = () => {
  const { eid } = useParams();

  const [uform, setUform] = useState({
    id: '',
    heading: '',
    discription: '',
    url: '',
    catogory: '',
    price: '',
    rating: ''
  });

  // Fetch data on component mount
  const fetchd = async () => {
    try {
      const res = await axios.get(`http://localhost:3001/products/${eid}`);
      setUform(res.data); // Set form values with fetched data
    } catch (error) {
      console.log('Error fetching data', error);
    }
  };

  useEffect(() => {
    fetchd();
  }, []);

  // Handle input changes for each field
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUform((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:3001/products/${eid}`, uform);
      console.log(res.data);
      alert('Product updated!');
    } catch (error) {
      console.log('Error updating product', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-500 to-blue-900 p-8">

      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white">Update Product</h1>
      </div>

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-md p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div className="flex flex-col">
            <label className="mb-2 text-lg font-semibold text-gray-700">Item ID</label>
            <input
              type="text"
              placeholder="Item Id"
              value={uform.id}
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
              value={uform.heading}
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
              value={uform.discription}
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
              value={uform.url}
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
              value={uform.catogory}
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
              value={uform.price}
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
              value={uform.rating}
              onChange={handleChange}
              name="rating"
              className="border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateP;
