import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserList = () => {
  const [user, setUser] = useState([]);
  const [filterU, setFilter] = useState([]);

  const userList = async () => {
    const res = await axios.get(`http://localhost:3001/users`);
    setUser(res.data);
  };

  useEffect(() => {
    userList();
  }, []);

  useEffect(() => {
    const filteredUsers = user.filter((item) => !item.admin);
    setFilter(filteredUsers);
  }, [user]);


  // Navigate to user details page
  const nav = useNavigate();
  const userD = (userId) => {
    nav(`/admin/userd/${userId}`);
  };



  // Block 
  const handleBlockUser = async (id) => {
    try {
      await axios.patch(`http://localhost:3001/users/${id}`, { block: true });
      setFilter(
        filterU.map((user) => (user.id === id ? { ...user, block: true } : user))
      );
    } catch {
      console.log("Error");
    }
  };

  // Unblock users

  const handleUnblockUser = async (id) => {
    try {
      await axios.patch(`http://localhost:3001/users/${id}`, { block: false });
      setFilter(
        filterU.map((user) => (user.id === id ? { ...user, block: false } : user))
      );
    } catch {
      console.log("Error");
    }
  };

  return (
    <div className="p-4 md:p-8 rounded-sm">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold mb-6">User List</h1>
      </div>
      
      <div className="space-y-4">
        {filterU.map((user) => (
          <div
            key={user.id}
            className="p-4 border border-gray-300 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between"
          >
            {/* User details and image */}
            <div
              className="cursor-pointer flex items-center space-x-4 mb-4 md:mb-0 md:mr-4"
              onClick={() => userD(user.id)}
            >
              <img
                src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
                alt="User Logo"
                className="w-12 h-12 md:w-16 md:h-16 rounded-full"
              />
              <div>
                <h3 className="text-lg md:text-xl font-semibold">{user.lastName}</h3>
                <h4 className="text-gray-600 text-sm md:text-base">{user.email}</h4>
              </div>
            </div>

            {/* Button for user action */}
            {!user.block ? (
              <button
                onClick={() => handleBlockUser(user.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 text-sm md:text-base"
              >
                Block
              </button>
            ) : (
              <button
                onClick={() => handleUnblockUser(user.id)}
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 text-sm md:text-base"
              >
                Unblock
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
