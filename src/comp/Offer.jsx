import React from 'react';
import { useNavigate } from 'react-router-dom';

const Offer = () => {
  const nav = useNavigate();

  const handle = () => {
    nav("/store");
  };

  return (
    <div
      className="bg-black text-white py-8 px-5 shadow-xl text-center"
      style={{
        backgroundImage: `url("https://wallpapershome.com/images/pages/pic_h/14540.jpg")`,
        backgroundSize: '',      // Ensures the image covers the entire div
        backgroundPosition: 'center', // Centers the image
        backgroundRepeat: 'repeat',// Prevents the image from repeating
        // Fixes the background when scrolling
      }}
    >
      <div className="max-w-md mx-auto bg-opacity-75 bg-black p-6 rounded-lg">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Pets Land!</h1>
        <p className="text-lg mb-6">Sign up today and enjoy exclusive discounts on your first purchase.</p>
        <button
          onClick={handle}
          className="bg-white text-blue-500 font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-blue-100 transition duration-300"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Offer;
