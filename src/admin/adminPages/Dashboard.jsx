import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  
  const [users,setUsers] = useState([]);
  const [products,setproducts] = useState([]);
 
 

  const fetchu=async()=>{
    const resp  =await axios.get(`http://localhost:3001/users`);
    const respro=await axios.get(`http://localhost:3001/products`);
    setUsers(resp.data);
    setproducts(respro.data)
  }

  useEffect(()=>{
    fetchu()
  },[]);

  //total users,products

  const U=users.filter((u)=>!u.admin);
  const totalU=U.length
  const totalP=products.length;

  // profit

  const profit = users.filter((user) => user.order && Object.keys(user.order).length>0)
  const val=profit.map((item)=>item.order.Amount);

  const sum=val.reduce((acc,cur)=>{
    return acc+=cur;
  },0);

  // orders

 
  const torder= profit.map((item)=>item.order.OrderItems.length);
   const totalOrders=torder.reduce((acc,val)=>{
    return acc+=val;
   },0)
  

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Card for Total Users */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold">Total Users</h2>
          <p className="text-4xl font-bold text-blue-600">{totalU}</p>
        </div>

        {/* Card for Total Products */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold">Total Products</h2>
          <p className="text-4xl font-bold text-green-600">{totalP}</p>
        </div>

        {/* Card for Total Profit */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold">Total Profit</h2>
          <p className="text-4xl font-bold text-purple-600">${sum}</p>
        </div>

        {/* Card for Total Orders */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold">Total Orders</h2>
          <p className="text-4xl font-bold text-red-600">{totalOrders}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
