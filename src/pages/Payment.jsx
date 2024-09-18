import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';




const Payment = () => {
 
    const[CartItems,setCartItems]=useState([]);
    const[orderItems,setOrderItems]=useState([]);
    

    const Log=localStorage.getItem("id");

    const callApi=async ()=>{
      const res=  await axios.get(`http://localhost:3001/users/${Log}`);
      setCartItems(res.data.cart);
      setOrderItems(res.data.order);

    }

    useEffect(()=>{
        callApi();
    },[]);

    
    


  const [formData, setFormData] = useState({
    address: '',
    city: '',
    state: '',
    zip: '',
    paymentMethod: '' 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };



// date 

const now=new Date();

// order id

const randomNum = Math.floor(Math.random() * 1000000); 

// navigate
const nav=useNavigate();


  const handleSubmit = async(e) => {
    e.preventDefault();
    // Handle form submission logic here
    const Log=localStorage.getItem("id");

    try{
        await axios.patch(`http://localhost:3001/users/${Log}`,{order:{ShippingAddress:[formData],OrderItems:CartItems,Amount:Total,date:now,orderId:randomNum}});
        await axios.patch(`http://localhost:3001/users/${Log}`,{cart:[]});  //cart will be null after payment 
        nav("/summary" ,{replace:true});

    }
    catch{
        console.log("error");
    }

  };

  // Calculate the total price of items in the cart
  const calculateTotal = () => {
    return CartItems.reduce((total, item) => total + item.price * item.qty, 0);
  };

  const Total=calculateTotal();






  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Cart Details Section */}

        <div className="bg-gray-100 p-6 rounded-lg shadow-md">

          <h2 className="text-2xl font-bold mb-4">Cart Details</h2>
          <ul className="space-y-4">
            {CartItems.map(item => (
              <li key={item.id} className="flex justify-between items-center border-b border-gray-300 pb-2">

                <span className='font-semibold text-md'>{item.heading} (x{item.qty})</span>
                <span className='font-semibold'>${(item.price * item.qty)}</span>
              </li>

            ))}
            <li className="flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>${Total}</span>
            </li>
          </ul>
        </div>

        {/* Payment Form Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Payment Details</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Address Information</h3>
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md mb-2"
                required
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md mb-2"
                required
              />
              <input
                type="text"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md mb-2"
                required
              />
              <input
                type="text"
                name="zip"
                placeholder="Zip Code"
                value={formData.zip}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Payment Method</h3>
              <div className="flex flex-col space-y-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="UPI"
                    checked={formData.paymentMethod === 'UPI'}
                    onChange={handleChange}
                    className="form-radio"
                  />
                  <span>UPI</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="CARD"
                    checked={formData.paymentMethod === 'CARD'}
                    onChange={handleChange}
                    className="form-radio"
                  />
                  <span>Card</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="CASH"
                    checked={formData.paymentMethod === 'CASH'}
                    onChange={handleChange}
                    className="form-radio"
                  />
                  <span>Cash on Delivery</span>
                </label>
              </div>
            </div>

            

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Submit Payment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
