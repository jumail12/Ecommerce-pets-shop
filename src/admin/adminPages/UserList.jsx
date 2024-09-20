import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserList = () => {
  const [user, setUser] = useState([]);

  const userList = async () => {
    const res = await axios.get(`http://localhost:3001/users`);
    setUser(res.data);
  };

  useEffect(() => {
    userList();
  }, []);

  const filterU = user.filter((item) => !item.admin);

  // Navigate to user details page
  const nav = useNavigate();
  const userD = (userId) => {
    nav(`/admin/userd/${userId}`);
  };

  return (
    <div className="p-8 bg-blue-500">
      <div>
        <h1 className="text-3xl font-bold mb-6">User List</h1>
      </div>
      <div className="space-y-4">
        {filterU.map((user) => (
          <div
            key={user.id}
            className="p-4 bg-red-500 border border-gray-300 rounded-lg shadow-lg cursor-pointer flex items-center space-x-4"
            onClick={() => userD(user.id)}
          >
            {/* User logo (placeholder) */}
            <img
              src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
              alt="User Logo"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="text-xl font-semibold">{user.lastName}</h3>
              <h4 className="text-gray-600">{user.email}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
