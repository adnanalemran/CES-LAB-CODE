import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SearchBook = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:5000/api/searchBook?title=${searchTerm}`
      );
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error searching for books:", error);
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
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Search Books
      </h1>
      <form onSubmit={handleSubmit} className="mb-4 p-4">
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Enter book title"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="btn btn-primary mt-2">
          Search
        </button>
      </form>
      <div>
        {searchResults.length > 0 ? (
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {searchResults.map((book) => (
              <li key={book.isbn} className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-2">{book.title}</h2>
                <p className="text-gray-600">Author: {book.author}</p>
                <p className="text-gray-600">Price: ${book.price}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-600">No search results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchBook;
