import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams,useNavigate } from 'react-router-dom';

const TopProducts = () => {

  const [top, setTop] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/products")
      .then((res) => setTop(res.data))
      .catch(() => console.log("Error in fetching..!"));
  }, []);

  const best = top.filter((item) => item.rating > 4.3);

  // individual product navigation
const nav=useNavigate();
  const Filter=(id)=>{
    nav(`/item/${id}`)
  }

  return (
    <div className='p-10'>
    <div className="p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center">Top Products.</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
{/* product mapping */}
        {best.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-lg hover:shadow-lg transition-shadow duration-300 p-4 cursor-pointer" onClick={()=>Filter(item.id)}>

            <div className="h-48 w-full bg-gray-200 rounded-md mb-4 overflow-hidden">
              <img src={item.url} alt={item.heading} className="w-full h-full object-cover" />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">{item.heading}</h2>
              <p className="text-gray-600">${item.price}</p>
            </div>

          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default TopProducts;
