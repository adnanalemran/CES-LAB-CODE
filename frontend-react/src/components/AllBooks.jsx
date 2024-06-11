import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/books")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the books!", error);
      });
  }, []);

  return (
    <div className="container mx-auto border-2 rounded-xl   ">
      <h1 className="text-2xl font-bold mb-4 bg-slate-500 text-white py-7 px-4">
        Edu Connect
      </h1>

      <div className="p-4 ">
        <h1 className="text-2xl font-bold mb-4 ">All Books</h1>
        <div className="flex  gap-4 py-3">
          <Link to="/addbook">
       
            <button className="btn">Add Book</button>
          </Link>  <Link to="/SearchBook">
       
            <button className="btn ">Search Book</button>
          </Link>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[60vh]">
          {books.map((book) => (
            <li key={book.isbn} className="bg-white p-4 rounded shadow">
              <h2 className="text-sm ">{book.isbn}</h2>
              <h2 className="text-xl font-bold">{book.title}</h2>
              <p>Author: {book.author}</p>
              <p>Price: ${book.price}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AllBooks;
