import axios from 'axios';
import React, { useEffect, useState } from 'react'
import UserList from './UserList';

export const AdminHome = () => {
    const id=localStorage.getItem("id");

    const [isAdmin,setIsAdmin]=useState(false);

    const fetch=async()=>{
      try{
        const res= await axios.get(`http://localhost:3001/users/${id}`);
        if(res.data?.admin)setIsAdmin(true)
      }catch{
    console.log("error");
    }}

    useEffect(()=>{
        fetch();  
    },[id]);

    if(!isAdmin){
        return <div>
            <h1>Unautherized</h1>
           </div>
    }
  return (
    <div>
       <nav>
        AdminHome
       </nav>
       <div>
       <UserList/>
       </div>
    </div>
  )
}
