import React, { useState } from 'react';
import axios from 'axios';

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
    } catch (error) {
      console.error('Error placing order:', error);
      setError('Failed to place order. Please try again.');
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Place Order</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {orderDetails && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          <p className="font-bold">Order placed successfully!</p>
          <p>Order ID: {orderDetails.orderId}</p>
          <p>Total Price: ${orderDetails.totalPrice}</p>
        </div>
      )}
      <form onSubmit={handleSubmit}>
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
    </div>
  );
};

export default PlaceOrder;
