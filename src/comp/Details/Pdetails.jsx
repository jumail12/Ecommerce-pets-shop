import React, {useState,useEffect,useContext} from 'react' 
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { HnadleAddcart } from '../../context/Data';
import { useParams } from 'react-router-dom'
import {ToastContainer,toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';



const Pdetails = () => {
    const {id}=useParams();
    
    const [top, setTop] = useState([]);

    function fetchProduct(){
      axios.get("http://localhost:3001/products")
        .then((res) => setTop(res.data))
        .catch(() => console.log("Error in fetching..!"));
    }
    useEffect(() => {
      fetchProduct()
    }, []);

    // filter data by compare with server
    const data=top.filter((item)=>item.id===id);
  
    // back button
    const nav=useNavigate();
    const Back=()=>{
        nav(-1);
    }

    // add to cart functinalities
    const  addItem=async (item)=>{
      await HnadleAddcart(item)   
      
    }

    
    
  return (
    <div className="p-8">
      <ToastContainer/>
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img title='Home' src="https://img.freepik.com/premium-vector/vector-dog-cat-logo-with-pet-shop-text_995281-23121.jpg?size=626&ext=jpg&ga=GA1.1.326306754.1725864249&semt=ais_hybrid" className="h-8 rounded-md" alt="Logo" />
        </Link>

         <button title='Back' className='bg-purple-600 mt-2 text-white px-2 py-1 rounded-md shadow hover:bg-purple-700 transition-colors duration-300' onClick={Back}>←</button>
    {
        data.map((item)=>(
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6" key={item.id}>
      
      {/* Product Image */}
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <img src={item.url} alt={item.heading} className="w-full h-full object-cover rounded-md shadow-md" />
        </div>

        {/* Product Details */}
        <div className="lg:w-1/2 w-full lg:pl-8">
          <h1 className="text-3xl font-bold mb-4">{item.heading}</h1>
          <p className="text-gray-600 mb-4">{item.discription}</p>
          <p className="text-lg font-semibold text-gray-800 mb-2">Price: ${item.price}</p>
          <p className="text-lg text-gray-500 mb-4">Rating: ⭐ {item.rating} / 5</p>

          {/* Action Button */}
  
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md shadow hover:bg-blue-700 transition-colors duration-300" onClick={()=>addItem(item)}>
            Add to Cart
          </button>
       
        </div>
      </div>
    </div>
        ))
    }
  </div>
  )
}

export default Pdetails