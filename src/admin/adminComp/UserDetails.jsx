import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
  const { u } = useParams();  // Get user ID from the URL parameters
  const [udata, setUdata] = useState({});

  const fetchU = async () => {
    try {
      const res = await axios.get(`http://localhost:3001/users/${u}`);
      setUdata(res.data);
    } catch (error) {
      console.error("Error fetching user details", error);
    }
  };

  useEffect(() => {
    fetchU();  // Fetch user details once when component mounts
  }, []);

  const { order = {} } = udata;
  const { ShippingAddress = [], OrderItems = [],Amount } = order;

  return (
    <div className="p-4 md:p-8 min-h-screen bg-gradient-to-r from-blue-500 to-red-500 text-white">
      {/* User Details */}
      <div className="bg-white text-gray-800 p-4 md:p-6 rounded-lg shadow-lg mb-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-blue-600">
          {udata.firstName} {udata.lastName}
        </h1>
        <div className="mb-4">
          <h3 className="text-md font-bold text-red-600">Id: {udata.id}</h3>
          <h2 className="text-md font-bold">Email: {udata.email}</h2>
          <h2 className="text-md font-bold">Phone: {udata.mob}</h2>
        </div>

        {/* Shipping Address */}
        <div className="mb-4">
          <h1 className="text-lg md:text-xl font-bold text-red-600"> Address:</h1>
          {ShippingAddress.length > 0 ? (
            ShippingAddress.map((address, index) => (
              <div key={index} className="mb-2 p-4 rounded-lg bg-blue-100">
                <p className="text-sm md:text-md font-semibold">{address.address}</p>
                <p className="text-sm md:text-md font-semibold">{address.city}, {address.state}, {address.zip}</p>
                <p className="text-sm md:text-md font-semibold"><strong className="text-blue-600">Payment Method:</strong> {address.paymentMethod}</p>
              </div>
            ))
          ) : (
            <p className="text-red-600">No address found.</p>
          )}
        </div>

        {/* Order Items */}
        <div>
            <h1 className=''><strong>Number of items: {OrderItems.length}</strong></h1>
        </div>
        <div className="mb-4">
          <h1 className="text-lg md:text-xl font-bold text-red-600">Order Items:</h1>
          {OrderItems.length > 0 ? (
            OrderItems.map((item) => (
              <div key={item.id} className="border p-4 mb-4 rounded-lg shadow-lg flex flex-col md:flex-row items-start bg-blue-100">
                {/* Image Section */}
                <img
                  src={item.url}
                  alt={item.heading}
                  className="w-full md:w-32 h-32 object-cover mb-4 md:mb-0 mr-0 md:mr-4 rounded-lg border-2 "
                />

                {/* Item Details */}
                <div className="w-full">
                  <h3 className="text-md md:text-lg font-bold text-blue-600">{item.heading}</h3>
                  <p className="font-semibold mt-2 text-red-600">
                    Price: ${item.price}
                  </p>
                  <p><strong>Quantity:</strong> {item.qty}</p>
                  <h2 className="font-bold mt-2 text-red-600">Pay: ${item.qty*item.price}</h2>
                </div>
               
              </div>
            ))
          ) : (
            <p className="text-red-600">No order items found.</p>
          )}
        </div>
        <div>
            <h1 className='text-red-600 text-lg font-bold'><strong>Total: ${Amount}</strong></h1>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
