import axios from 'axios';
import React, {  useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Remove } from '../context/Data';


const Cart = () => {

  const[CartItems,setCartItems]=useState([]);
  
  const user=localStorage.getItem("id");

  function callAPi(){
    axios.get(`http://localhost:3001/users/${user}`)
    .then((res)=>setCartItems(res.data.cart))
    .catch(()=>console.log("errror"))
  }
  
  
useEffect(()=>{
  callAPi()
},[]);





  // Nav

  const nav=useNavigate();

  const Nav=(item)=>{
    nav(`/${item.id}`)
  }

  // remove from cart

  const HandleRemove=async(item)=>{
   await Remove(item);
   callAPi()
  }


  // qty 

  


  // +

  const increasQty=async(id)=>{
await axios.patch(`http://localhost:3001/users/${user}`,{
  cart:CartItems.map((item)=>item.id===id ? {...item, qty : item.qty+1} : item)
});
callAPi();
}

// -

const decreaseQty=async(id)=>{
  await axios.patch(`http://localhost:3001/users/${user}`,
    {cart:CartItems.map((item)=>item.id===id ? {...item, qty: item.qty-1||1} : item)
  });
    callAPi();
}



// total

const calculate=()=>{
  return CartItems.reduce((total,item)=> total+item.price * item.qty,0);
}

// number of items 

const numOfItem=()=>{
  return CartItems.reduce((num,item)=>num+1,0)
}



// handlePayment

const navi=useNavigate();

const handlePayment =()=>{
  if(CartItems.length===0){
    alert("Your Cart is Empty..!")
  }else{
    navi("/payment");
  }
  
}




    
 

  

  return (
    <div className="container mx-auto p-4">

    <h1 className="text-3xl font-bold mb-6">Your Cart.</h1>
    <div>
      {CartItems.length === 0 ? (
       <div className="flex flex-col items-center justify-center p-8">
       <h1 className="text-2xl text-gray-500 mb-4">Your cart is empty..!</h1>
       <img
         src="https://media.istockphoto.com/id/1206806317/vector/shopping-cart-icon-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=1RRQJs5NDhcB67necQn1WCpJX2YMfWZ4rYi1DFKlkNA="
         alt="Empty Cart"
         className="w-40 h-40 object-contain"
       />
     </div>
     
      ) : (
        CartItems.map((item) => (
        <div
            key={item.id}
            className="flex items-center justify-between p-4 mb-4 bg-white shadow-md rounded-lg ">
            <div className="w-1/5 cursor-pointer" >
              <img
                src={item.url}
                alt="Item"
                className="object-cover w-full h-24 rounded-lg"
                onClick={()=>Nav(item)}
              />
            </div>
            <div className="w-2/5 px-4">
              <h1 className="text-lg font-semibold">{item.heading}</h1>
              <h3 className="text-sm text-gray-500">Rating:⭐{item.rating}/5</h3>
              <h2 className="text-xl font-bold text-blue-600">${Math.floor(item.price*item.qty)}</h2>
            </div>
            <div className="flex items-center">
            <div className="p-4">

<button onClick={()=>increasQty(item.id)} className='w-[40px] rounded-lg bg-blue-600 text-white font-bold p-1'>+</button>
Qty:{item.qty}
<button onClick={()=>decreaseQty(item.id)}   className='w-[40px] rounded-lg bg-blue-600 text-white font-bold p-1'>-</button>

  
    </div>

              <button className="px-4 py-2 bg-red-500 text-white rounded-lg" onClick={()=>HandleRemove(item)}>
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>

    <div className="p-4 bg-gray-100 rounded-lg">
  <div className="text-center">
    <h1 className="text-2xl font-bold mb-2">Total: ${calculate()}</h1>
    <p className="text-md font-semibold">Number of items: {numOfItem()}</p>
    <button className="mt-4 px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-yellow-700 transition duration-300" onClick={handlePayment}>
      Proceed To Payment
    </button>
  </div>
</div>




  </div>
  
  );
};

export default Cart;
