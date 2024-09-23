import React from 'react';
import { useNavigate } from 'react-router-dom';

const PetShopOffers = () => {
  const nav=useNavigate();
  const handleDog=()=>{
   nav("/dog")
  }

  const handleCat=()=>{
    nav("/cat")
  }
  const handleAd=()=>{
    nav("/ad")
  }

  return (
    <div className="offer-section bg-gray-100 p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4">Special Offers </h2>
      <div className="offer-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 cursor-pointer">
        {/* Offer Card 1 - Dog Food Discount */}
        <div className="offer-card p-4 bg-white rounded-md shadow-sm" onClick={handleDog}>
          <img 
            src="https://cdn.pixabay.com/photo/2024/02/05/16/23/labrador-8554882_1280.jpg" 
            alt="Dog Food Discount" 
            className="w-full h-40 object-cover rounded-t-md" 
          />
          <h3 className="text-xl font-semibold mt-4">Dog Food Discount</h3>
          <p>Get 20% off on all dog food products this week.</p>
        </div>

        {/* Offer Card 2 - Cat Grooming Package */}
        <div className="offer-card p-4 bg-white rounded-md shadow-sm cursor-pointer" onClick={handleCat}>
          <img 
            src="https://cdn.pixabay.com/photo/2019/11/08/11/56/kitten-4611189_960_720.jpg" 
            alt="Cat Grooming Package" 
            className="w-full h-40 object-cover rounded-t-md" 
          />
          <h3 className="text-xl font-semibold mt-4">Cat Grooming Package</h3>
          <p>Buy 2 grooming sessions and get the 3rd free for your lovely cats.</p>
        </div>

        {/* Offer Card 3 - Pet Adoption Drive */}
        <div className="offer-card p-4 bg-white rounded-md shadow-sm cursor-pointer" onClick={handleAd}>
          <img 
            src="https://cdn.pixabay.com/photo/2018/09/23/11/04/dog-3697190_1280.jpg" 
            alt="Pet Adoption Drive" 
            className="w-full h-40 object-cover rounded-t-md" 
          />
          <h3 className="text-xl font-semibold mt-4">Pet Adoption Drive</h3>
          <p>Adopt a pet and get a free starter kit for both dogs and cats.</p>
        </div>
      </div>
    </div>
  );
};

export default PetShopOffers;
