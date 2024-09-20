import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdminHome = () => {
  const id = localStorage.getItem("id");
  const [isAdmin, setIsAdmin] = useState(false);

  const fetch = async () => {
    try {
      const res = await axios.get(`http://localhost:3001/users/${id}`);
      if (res.data?.admin) setIsAdmin(true);
    } catch {
      console.log("error");
    }
  };

  useEffect(() => {
    fetch();
  }, [id]);

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">Unauthorized</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-900 text-white p-6 shadow-lg fixed h-full">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <nav className="flex flex-col space-y-4">
          <Link to="alluser" className="text-white hover:text-blue-300 font-semibold">
            All Users
          </Link>
          <Link to="allpro" className="text-white hover:text-blue-300 font-semibold">
            Categories
          </Link>
          <Link to="addpro" className="text-white hover:text-blue-300 font-semibold">
            Add Products
          </Link>
          <Link to="/" className="text-white hover:text-blue-300 font-semibold">
            Home
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6 bg-gray-50 ml-64">
        <div className="bg-white p-6 rounded-md shadow-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
