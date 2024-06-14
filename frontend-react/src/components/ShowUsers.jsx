import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ShowUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/users");
        setUsers(response.data); 
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);  

  return (
    <div className="container mx-auto border-2 rounded-xl   ">
     <Link to="/dashboard">
        <h1 className="text-2xl font-bold mb-4 bg-slate-500 text-white py-7 px-4">
          Edu Connect
        </h1>
      </Link>
    <div className="flex  gap-4 p-3">
      <Link to="/addbook">
        <button className="btn">Add Book</button>
      </Link>
      <Link to="/Register">
        <button className="btn">Register user</button>
      </Link>
      <Link to="/users">
        <button className="btn">Show users</button>
      </Link>
      <Link to="/SearchBook">
        <button className="btn ">Search Book</button>
      </Link>{" "}
      <Link to="/PlaceOrder">
        <button className="btn ">Place Order</button>
      </Link>
      <Link to="/PlaceOrder">
        <button className="btn ">Orders</button>
      </Link>
    </div>
      <h1 className="text-2xl font-bold my-4 p-4">All Users</h1>
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
