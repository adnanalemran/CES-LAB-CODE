import React from "react";
import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <div>
      this header
      <Outlet />
    </div>
  );
};

export default Header;
