import React from 'react'
import Catall from '../comp/Cat/Catall'
import Catfood from '../comp/Cat/Catfood'
import Cattreat from '../comp/Cat/Cattreat'
import { Link, Outlet } from 'react-router-dom'

const Catpage = () => {
  return (
    <div className="p-4 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md">
    <nav className="flex space-x-6 mb-4">
      <Link 
        to="catall" 
        className="text-gray-700 hover:text-blue-500 transition-colors duration-300 font-bold"
      >
        Products
      </Link>
      <Link 
        to="food" 
        className="text-gray-700 hover:text-blue-500 transition-colors duration-300 font-bold"
      >
        Food
      </Link>
      <Link 
        to="treat" 
        className="text-gray-700 hover:text-blue-500 transition-colors duration-300 font-bold"
      >
        Treat
      </Link>
    </nav>
    
      <Outlet />
    
  </div>
  </div>
  
  )
}

export default Catpage