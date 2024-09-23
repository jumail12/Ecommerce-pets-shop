import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams,useNavigate,Link } from 'react-router-dom'

const Prodetails = () => {
    const {pid}=useParams();
    const [pdetails,setPd]=useState({});

    const fetchPro=async()=>{
        const resp=await axios.get(`http://localhost:3001/products/${pid}`)
        setPd(resp.data)
    }

    useEffect(()=>{
        fetchPro();
    },[]);

    console.log(pdetails);
    

     // back button
     const nav=useNavigate();
     const Back=()=>{
         nav(-1);
     }

  return (
    <div className="p-8 mb-6">
  
     

       <button title='Back' className='bg-purple-600 mt-2 text-white px-2 py-1 rounded-md shadow hover:bg-purple-700 transition-colors duration-300' onClick={Back}>←</button>

          <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6" >
    
    {/* Product Image */}
    <div className="flex flex-col lg:flex-row items-center">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <img src={pdetails.url} alt={pdetails.heading} className="w-full h-full object-cover rounded-md shadow-md" />
      </div>

      {/* Product Details */}
      <div className="lg:w-1/2 w-full lg:pl-8">
        <h1 className="text-3xl font-bold mb-4">{pdetails.heading}</h1>
        <p className="text-gray-600 mb-4">{pdetails.discription}</p>
        <p className="text-lg font-semibold text-gray-800 mb-2">Price: ${pdetails.price}</p>
        <p className="text-lg text-gray-500 mb-4">Rating: ⭐ {pdetails.rating} / 5</p>

        {/* Action Button */}

       
     
      </div>
    </div>
  </div>

</div>
  )
}

export default Prodetails