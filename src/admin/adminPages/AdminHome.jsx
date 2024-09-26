import { ChartBarIcon, UserIcon, HomeIcon, TagIcon, PlusIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/24/solid';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const AdminHome = () => {

  const [isAdmin, setIsAdmin] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // For mobile sidebar toggle

  const id = localStorage.getItem("id");
  const nav = useNavigate();

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

  // Logout handler

  const handleLogout = () => {
    localStorage.clear();
    nav('/login');
  };

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">Unauthorized</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-400">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-blue-900 text-white p-6 shadow-lg transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:w-64`}
      >
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <nav className="flex flex-col space-y-4">
         
          <Link to="dashboard" className="flex items-center text-white hover:text-blue-300 font-semibold">
            <ChartBarIcon className="h-6 w-6 mr-2" /> Dashboard
          </Link>

          <Link to="alluser" className="flex items-center text-white hover:text-blue-300 font-semibold">
            <UserIcon className="h-6 w-6 mr-2" /> All Users
          </Link>
          <Link to="allpro" className="flex items-center text-white hover:text-blue-300 font-semibold">
            <TagIcon className="h-6 w-6 mr-2" /> Categories
          </Link>
          <Link to="addpro" className="flex items-center text-white hover:text-blue-300 font-semibold">
            <PlusIcon className="h-6 w-6 mr-2" /> Add Products
          </Link>
          <Link to="/" className="flex items-center text-white hover:text-blue-300 font-semibold">
            <HomeIcon className="h-6 w-6 mr-2" /> Home
          </Link>

          {/* Log Out button styled as a link */}
          <button
            className="flex items-center text-white hover:text-blue-300 font-semibold w-full text-left"
            onClick={handleLogout}
          >
            <ArrowLeftOnRectangleIcon className="h-6 w-6 mr-2" /> Log Out
          </button>
        </nav>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden flex justify-between p-4 bg-blue-900 text-white">
        <h2 className="text-2xl font-bold">Admin Panel</h2>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isSidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6 bg-gray-50 lg:ml-64">
        <div className="bg-white p-6 rounded-md shadow-md">
          <Outlet />
        </div>-
      </div>
    </div>
  );
};

export default AdminHome;