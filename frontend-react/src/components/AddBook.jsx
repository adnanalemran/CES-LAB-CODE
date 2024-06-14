import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const AddBook = () => {
  const [isbn, setIsbn] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const book = { isbn, title, author, price };

    try {
      await axios.post("http://localhost:5000/api/addBook", book);
      toast.success("Book added successfully");
      setIsbn("");
      setTitle("");
      setAuthor("");
      setPrice("");
    } catch (error) {
      console.error("There was an error adding the book!", error);
      toast.error("Failed to add book");
    }
  };

  return (
    <div className="container mx-auto border-2 rounded-xl   ">
       <Link to="/dashboard">
        <h1 className="text-2xl font-bold mb-4 bg-slate-500 text-white py-7 px-4">
          Edu Connect
        </h1>
      </Link>
      <div className="flex  gap-4 px-3">
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
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Add Book</h1>
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
          <div className="mb-4">
            <label className="block text-gray-700">ISBN</label>
            <input
              type="text"
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Price</label>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-2"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Add Book
          </button>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
};

export default AddBook;
