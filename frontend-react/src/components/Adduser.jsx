import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddUser = () => {
  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = { userId, name, email, password };

    try {
      await axios.post("http://localhost:5000/api/register", newUser);
      toast.success("User added successfully");
      setUserId("");
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Failed to add user", error);
      toast.error("Failed to add user");
    }
  };

  return (
    <div className="container mx-auto border-2 rounded-xl">
      <h1 className="text-2xl font-bold mb-4 bg-slate-500 text-white py-7 px-4">
        Edu Connect
      </h1>

      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Add User</h1>
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
          <div className="mb-4">
            <label className="block text-gray-700">User ID</label>
            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-2"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Add User
          </button>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
};

export default AddUser;
