import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const PlaceOrder = () => {
  const [userId, setUserId] = useState('');
  const [bookIsbns, setBookIsbns] = useState('');
  const [orderDetails, setOrderDetails] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/placeOrder', { userId, bookIsbns });
      setOrderDetails(response.data);
      setError('');
      toast.success("Order added successfully");
 

    } catch (error) {
      console.error('Error placing order:', error);
      setError('Failed to place order. Please try again.');
    }
  };

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
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Place Order</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {orderDetails && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          <p className="font-bold">Order placed successfully!</p>
          <p>Order ID: {orderDetails.orderId}</p>
          <p>Total Price: ${orderDetails.totalPrice}</p>
        </div>
      )}
      <form className='p-4' onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="userId" className="block text-gray-700">User ID:</label>
          <input
            type="text"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="bookIsbns" className="block text-gray-700">Book ISBNs (comma-separated):</label>
          <input
            type="text"
            id="bookIsbns"
            value={bookIsbns}
            onChange={(e) => setBookIsbns(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button type="submit" className="btn btn-primary">Place Order</button>
      </form>
      
      <ToastContainer />
    </div>
  );
};

export default PlaceOrder;
