import React, { useState, useEffect } from "react";
import axios from "axios";

const ShowUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/users");
        setUsers(response.data); // Assuming the API returns an array of users
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []); // Empty dependency array means this effect runs once after initial render

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold my-4">All Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <div key={user._id} className="bg-white p-4 rounded shadow">
            <p><strong>User ID:</strong> {user.userId}</p>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            {/* You can display other user information here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowUsers;
