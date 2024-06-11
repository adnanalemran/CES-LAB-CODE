import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Login from "./Page/Auth/Login";
import Dashboard from "./Page/Auth/Dashboard";
import AddBook from "./components/AddBook";
import SearchBook from "./Page/SearchBook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/addbook",
    element: <AddBook />,
  },  {
    path: "/SearchBook",
    element: <SearchBook />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
