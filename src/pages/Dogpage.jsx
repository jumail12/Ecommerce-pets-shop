import React from 'react'

import { Link, Outlet } from 'react-router-dom'

const Dogpage = () => {
  return (
    <div className="p-4 bg-gray-100">
  <div className="bg-white p-6 rounded-lg shadow-md">
    <nav className="flex space-x-6 mb-4 font-bold">
      <Link 
        to="dogall" 
        className="text-gray-700 hover:text-blue-500 font-semibold transition-colors duration-300"
      >
        Products
      </Link>
      <Link 
        to="beds" 
        className="text-gray-700 hover:text-blue-500 font-semibold transition-colors duration-300"
      >
        Beds
      </Link>
      <Link 
        to="food" 
        className="text-gray-700 hover:text-blue-500 font-semibold transition-colors duration-300"
      >
        Food
      </Link>
    </nav>
    
      <Outlet />
   
  </div>
</div>

  )
}

export default Dogpage