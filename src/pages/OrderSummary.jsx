import React, { useContext, useEffect, useState } from 'react';
import { OrderC } from '../comp/OrderContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const OrderSummary = () => {
  const { Amount, ShippingAddress, OrderItems, date, orderId } = useContext(OrderC);
  const user = localStorage.getItem("user");
  const id = localStorage.getItem("id");

const [mob,setMob]=useState("");   //use mobile number fetching from user deatils

  const fetchMob=async()=>{
  try{
    const res= await axios.get(`http://localhost:3001/users/${id}`)
    setMob(res.data.mob);

  }
  catch{
     console.log("error");
  }
}

  useEffect(()=>{
    fetchMob();
  },[]);

  // home
  const nav = useNavigate();

  const goHome = () => {
    nav("/");
  };

  // back

   const Back=()=>{
       nav("/");
   }

  return (
    <div>
        <button title='Back' className='bg-purple-600  text-white relative left-5 top-10  px-2 py-1 rounded-md shadow hover:bg-purple-700 transition-colors duration-300' onClick={Back}>←</button>

      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
        <h1 className="text-3xl font-bold text-center mb-6">Order Summary</h1>

        {/* Order ID and Date */}
        <div className="mb-4 text-lg">
          <p className="font-bold text-sm"><span className="font-semibold">Order ID:</span> {orderId}</p>
          <p className="font-bold text-sm"><span className="font-semibold">Order Date:</span> {new Date(date).toLocaleDateString()}</p>
        </div>

        {/* Shipping Address */}
        {ShippingAddress && ShippingAddress.length > 0 ? (
          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <h2 className="text-xl font-bold mb-2">Shipping Address</h2>
            {ShippingAddress.map((address, index) => (
              <div key={index}>
                <p className='font-bold text-sm'>Name: {user}</p>
                <p className='font-semibold text-sm'>{address.address}</p>
                <p className='font-semibold text-sm'>{address.city}, {address.state} {address.zip}</p>
                <p className='font-semibold text-sm'>Mob: {mob}</p>
                <p className='font-bold'>Payment Method: {address.paymentMethod}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No shipping address available.</p>
        )}

        {/* Order Items */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Order Items</h2>
          {OrderItems && OrderItems.length > 0 ? (
            <ul>
              {OrderItems.map((item) => (
                <li key={item.id} className="flex justify-between items-center border-b py-2">
                  <div className="flex items-center">
                    {/* Product Image */}
                    <img src={item.url} alt={item.heading} className="w-16 h-16 object-cover rounded-md mr-4" />
                    <span className='font-semibold text-sm'>{item.heading}</span>
                  </div>
                  <span className="font-semibold">${item.price} x {item.qty}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p>No order items available.</p>
          )}
        </div>

        {/* Order Amount */}
        <div className="flex justify-between items-center text-lg font-bold border-t pt-4">
          <span>Total Amount:</span>
          <span>${Amount}</span>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 text-center">
          <button className="bg-red-500 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:bg-red-600 transition duration-300" onClick={goHome}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
