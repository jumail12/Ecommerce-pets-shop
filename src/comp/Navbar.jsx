import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu

  const handleToggle = () => {
    setIsOpen(!isOpen); // Toggle mobile menu visibility
  };

  //search
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState(""); // State to manage search input
  const [query,setQuery]=useState([]);
  const [queryFilter,setqueryFilter]=useState([]);

  //get product
  const fetchQuery=async ()=>{
    try{
    const res=  await axios.get(`http://localhost:3001/products`)
    setQuery(res.data);
    
    }catch{
      console.log("Error");
    }
  }

 useEffect(()=>{
     fetchQuery();
  },[])

    //filter product

    useEffect(()=>{
      setqueryFilter(query.filter((item)=>item.heading.toLowerCase().includes(searchTerm.toLowerCase())))
    },[searchTerm,query]);

    const handleNavSearch=(id)=>{
      const filter=queryFilter.filter((item)=>item.id===id);
      if(filter){
        navigate(`/item/${id}`);
        setSearchTerm("");
      }
    }

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
 
  const userDisplay = localStorage.getItem("user");

  useEffect(() => {
    const userName = localStorage.getItem("user");
    if (userName) {
      setIsAuthenticated(true);
    }
  }, [userDisplay]);

  // Handle login/logout button click
  const handleAuthClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Handle Logout
  const handleLogout = () => {
    localStorage.clear();
    setIsAuthenticated(false);
    setIsDropdownOpen(false); 
    window.location.reload();
    
    
    // Close dropdown after logout
  };

  // cart number of utems

  const [CartItems, setCartItems] = useState([]);

  const Log = localStorage.getItem("id");

  const fetcCart = async () => {
    try {
      const res = await axios.get(`http://localhost:3001/users/${Log}`);
      setCartItems(res.data.cart);
    } catch {
      console.log("error");
    }
  };

  useEffect(() => {
    if (Log) {
      fetcCart();
    } else {
    }
  }, [CartItems]);

  return (
    <nav>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-md ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
          {/* Logo and brand name */}
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://img.freepik.com/premium-vector/vector-dog-cat-logo-with-pet-shop-text_995281-23121.jpg?size=626&ext=jpg&ga=GA1.1.326306754.1725864249&semt=ais_hybrid"
              className="h-8 rounded-md"
              alt="Logo"
            />
            <span className="self-center text-3xl  font-bold whitespace-nowrap dark:text-white">
              Pets.
            </span>
          </Link>

          {/* Mobile menu button */}
          <button
            data-collapse-toggle="navbar-links"
            aria-controls="navbar-links"
            aria-expanded={isOpen}
            onClick={handleToggle}
            className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>

          {/* Search bar (desktop) */}
<div className={`relative ${isOpen ? "block" : "hidden"} md:flex md:items-center md:w-auto`}>
  <input
    type="text"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="block w-80 p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    placeholder="Search products..."
  />

  {/* Mapped filtered items */}
  <div className="absolute top-10 mt-1 w-80 max-h-40 bg-black  shadow-lg rounded-lg overflow-y-auto">
    {queryFilter.length  && searchTerm.length>0 ? (
      queryFilter.map((item) => (
        <div key={item.id} className="p-2 border-b border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer" onClick={()=>handleNavSearch(item.id)}>
          <span className="text-sm font-bold dark:text-white">{item.heading}</span>
        </div>
      ))
    ) : (
      null
    )}
  </div>
</div>

       

          {/* Cart and Login icons */}
          <div className="flex md:order-2 items-center space-x-5">
            <Link
              to="/cart"
              className="font-bold text-xs text-gray-400 dark:text-gray hover:text-blue-700 dark:hover:text-blue-500 items-center"
            >
              {CartItems.length === 0 ? null : (
                <div className=" pl-1 h-4 w-4 bg-red-800 text-xs rounded-full font-bold relative top-2 right-1">
                  {CartItems.length}
                </div>
              )}
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.5 1h12l.5-1h2m-2 0v1m-1 1h-2l-1 14H6l-1-14H3M6 22a2 2 0 1 0 4 0 2 2 0 0 0-4 0m10 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0"
                />
              </svg>
              <span className="text-md ">Cart</span>
            </Link>

            <button
              onClick={handleAuthClick}
              className="font-bold  text-gray-500 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-500 items-center flex"
            >
              <svg
                className="w-6 h-7"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 12v9m0 0-4-4m4 4 4-4m-4-9C8.477 3 5 6.477 5 10s3.477 7 7 7 7-3.477 7-7-3.477-7-7-7z"
                />
              </svg>
              <span className="text-sm1">
                {isAuthenticated ? userDisplay : "Login"}
              </span>
            </button>

            {/* Dropdown Menu */}
            <div className="">
              {isDropdownOpen && (
                <div className="absolute right-0  w-30 h-17 bg-white rounded-md shadow-lg z-50 mt-4 mr-6">
                  <ul className="py-1">
                    {isAuthenticated ? (
                      <li>
                        <button
                          onClick={handleLogout}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                        >
                          Logout
                        </button>
                      </li>
                    ) : (
                      <>
                        <li>
                          <Link
                            to="/login"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            Login
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/register"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            Sign Up
                          </Link>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Navigation links */}
          <div
            className={`w-full md:flex md:w-auto md:order-1 ${
              isOpen ? "block" : "hidden"
            }`}
            id="navbar-links"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/store"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Best-Seller
                </Link>
              </li>
              <li>
                <Link
                  to="/ad"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  
                >
                  Adopt
                </Link>
              </li>

              <li>
                <Link
                  to="/summary"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  
                >
                  Order-Summary
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;
