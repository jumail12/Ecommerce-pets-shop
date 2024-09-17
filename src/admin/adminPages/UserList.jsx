import axios from 'axios';
import React, { useEffect, useState } from 'react'

const UserList = () => {

    const [user,setUser]=useState([]);

    const userList=async()=>{
        const res=await axios.get(`http://localhost:3001/users`);
        setUser(res.data);
    }

    useEffect(()=>{
        userList();
    },[])

   const filterU=user.filter((item)=>!(item.admin));
 
   
    
    

    

  return (
    <div className="p-8">
    <div>
        <h1 className="text-3xl font-bold mb-6">User List</h1>
    </div>
    <div className="space-y-4">
        {filterU.map((user) => (
            <div key={user.id} className="p-4 border border-gray-300 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold">{user.lastName}</h3>
                <h4 className="text-gray-600">{user.email}</h4>
            </div>
        ))}
    </div>
</div>

  )
}

export default UserList