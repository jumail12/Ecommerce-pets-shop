import React from 'react';
import { useNavigate } from 'react-router-dom';

const OfferSection = () => {
    const nav=useNavigate()
    const handleC=()=>{
  nav("/cat")
    }

    const handleD=()=>{
        nav("/dog")
          }
  


    return (
        <div className="offer-poster bg-gray-100 p-8 rounded-lg shadow-lg text-center">
            <h1 className="text-5xl font-bold text-gray-800 mb-8">Exclusive Offers on Pet Food</h1>

            <div className="flex flex-col md:flex-row justify-center items-center gap-12">
                {/* Dog Food Offer */}
                <div className="dog-offer w-full md:w-1/2 cursor-pointer" onClick={handleD}>
                    <img 
                        src="https://cdn.pixabay.com/photo/2020/03/31/19/20/dog-4988985_1280.jpg" 
                        alt="Dog Food Offer" 
                        className="w-full h-64 object-cover rounded-lg mb-6" 
                    />
                    <h2 className="text-3xl font-semibold mb-4 text-blue-700">Premium Dog Food</h2>
                    <p className="text-lg text-gray-700 mb-4">
                        20% off on top-quality dog food! Keep your dog happy and healthy with our wide range of nutritious and delicious flavors.
                    </p>
                </div>

                {/* Cat Food Offer */}
                <div className="cat-offer w-full md:w-1/2 cursor-pointer" onClick={handleC}>
                    <img 
                        src="https://cdn.pixabay.com/photo/2016/02/10/16/37/cat-1192026_960_720.jpg" 
                        alt="Cat Food Offer" 
                        className="w-full h-64 object-cover rounded-lg mb-6" 
                    />
                    <h2 className="text-3xl font-semibold mb-4 text-green-700">Nutritious Cat Food</h2>
                    <p className="text-lg text-gray-700 mb-4">
                        Save 15% on our best-selling cat food! Ensure your cat's health with our nutrient-packed, vet-approved options.
                    </p>
                </div>
            </div>

         
        </div>
    );
};

export default OfferSection;
