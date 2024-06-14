import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Login from "./Page/Auth/Login";
import Dashboard from "./Page/Auth/Dashboard";
import AddBook from "./components/AddBook";
import SearchBook from "./Page/SearchBook";
import PlaceOrder from "./components/PlaceOrder";
import Adduser from "./components/Adduser";
import ShowUsers from "./components/ShowUsers";

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
  },
  {
    path: "/SearchBook",
    element: <SearchBook />,
  },
  {
    path: "/PlaceOrder",
    element: <PlaceOrder />,
  },
  {
    path: "/Register",
    element: <Adduser />,
  },  {
    path: "/users",
    element: <ShowUsers />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
