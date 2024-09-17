import React from 'react'; 
import { useNavigate } from 'react-router-dom';

const Offer2 = () => {
  const nav = useNavigate();

  const handle = () => {
    nav("/cat");
  };

  return (
    <div
      className="bg-black text-white py-12 px-6 shadow-xl text-center"
      style={{
        backgroundImage: `url("https://cdn.pixabay.com/photo/2018/10/01/09/21/pets-3715733_1280.jpg")`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat', 
        backgroundAttachment: 'fixed', 
      }}
    >
      <div className="max-w-lg mx-auto bg-opacity-80 bg-white p-8 rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Explore</h1>
        <p className="text-md text-gray-700 mb-6">Subscribe today to unlock special deals ..!. Don't miss out on these exclusive offers for new members!</p>
        <button
          onClick={handle}
          className="bg-orange-500 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-green-600 transition duration-300"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Offer2;
