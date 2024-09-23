import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import {ToastContainer,toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const nav=useNavigate();

  const intialV={
    firstName:"",
    lastName:"",
    email:"",
    mob:"",
    password:"",
    confirmPassword:"",
    radio:false
  }

  const [Fvalues,setFvalues]=useState(intialV);
  const [error,setError]=useState({});
  const [data,setData]=useState({});

  useEffect(()=>{
    axios.get("http://localhost:3001/users")
    .then((res)=>setData(res.data))
  },[]);

// error validation in form

  const Validate= (fv)=>{
    let tempError={};

    if(!fv.firstName){
      tempError.firstName="First name is required..!"
    }

    if(!fv.lastName){
      tempError.lastName="Last name is required..!"
    }

    //email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!fv.email){
      tempError.email = "Email is required.";
    }else if(!emailRegex.test(fv.email)){
      tempError.email="Invalid email format..!";
    }

    if (!fv.mob) {
      tempError.mob = "Mobile number is required.";
    } else if (fv.mob.length !== 10) {
      tempError.mob = "Mobile number should be 10 digits.";
    }

    if (!fv.password) {
      tempError.password = "Password is required.";
    } else if (fv.password.length < 6) {
      tempError.password = "Password should be at least 6 characters long.";
    }

  if(!fv.confirmPassword){
    tempError.confirmPassword="Confirm your password..!";
  }  else if(!(fv.password===fv.confirmPassword)){
    tempError.confirmPassword = "Passwords do not match.";
  }



  setError(tempError);
  return Object.keys(tempError).length===0;
  }

  // form submission
  const handleSubmit= async(e)=>{

    e.preventDefault();

    if(Validate(Fvalues)){
      try{

        const userEmail=data.find((user)=>user.email===Fvalues.email)
       if(userEmail){
        // alert("email alredy taken...!")
        toast.warn("Email is alredy taken...!")
       }else{
        
       await axios.post("http://localhost:3001/users",{
          firstName: Fvalues.firstName,
          lastName: Fvalues.lastName,
          email: Fvalues.email,
          mob: Fvalues.mob,
          password: Fvalues.password,
          block:false,
          cart:[],
          order:{}
        });  
        nav("/login",{replace:true});
       }}

      catch{
        console.error('There was an error with the registration:', error);
      }}
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFvalues({ ...Fvalues, [name]: value });
  };

  const handleLnav=()=>{
    nav("/login")
  }

  return (
    <div className='p-6 m-10'>
      <ToastContainer/>
    <div className="max-w-md mx-auto p-6 bg-gray-200 shadow-lg rounded-lg mt-10">
    <h1 className="text-3xl font-bold mb-6 text-center">Register</h1>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          placeholder="First name*"
          required
          value={Fvalues.firstName}
          name="firstName"
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {error.firstName && <p className="text-red-500 text-sm mt-1">{error.firstName}</p>}
      </div>

      <div>
        <input
          type="text"
          placeholder="Last name*"
          required
          value={Fvalues.lastName}
          name="lastName"
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {error.lastName && <p className="text-red-500 text-sm mt-1">{error.lastName}</p>}
      </div>

      <div>
        <input
          type="number"
          placeholder="Mobile number*"
          required
          value={Fvalues.mob}
          name="mob"
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {error.mob && <p className="text-red-500 text-sm mt-1">{error.mob}</p>}
      </div>

      <div>
        <input
          type="email"
          placeholder="Your email*"
          required
          value={Fvalues.email}
          name="email"
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {error.email && <p className="text-red-500 text-sm mt-1">{error.email}</p>}
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-2">Password</h4>
        <input
          type="password"
          placeholder="Choose a password*"
          required
          value={Fvalues.password}
          name="password"
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {error.password && <p className="text-red-500 text-sm mt-1">{error.password}</p>}
      </div>

      <div>
        <input
          type="password"
          placeholder="Confirm a password*"
          required
          value={Fvalues.confirmPassword}
          name="confirmPassword"
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {error.confirmPassword && <p className="text-red-500 text-sm mt-1">{error.confirmPassword}</p>}
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="radio"
          required
          className="form-radio"
          onChange={handleChange}
          name='radio'
          onClick={()=>{
            if(Fvalues.radio===false){
              Fvalues.radio=true;
            }
          }}
        />
        <label className="text-sm">Terms and conditions..!</label>
      </div>

      <button
        type="submit"
        className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Create Account
      </button>
    </form>
    <div class="mt-3">
  <h4 class="text-sm ">
    already have an account, <span class="text-blue-600 font-bold cursor-pointer" onClick={handleLnav}>Log in</span>
  </h4>
</div>

  </div>
  </div>
  )
}

export default Register