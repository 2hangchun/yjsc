import React from "react";
import { Outlet } from "react-router-dom";
import FootNav from "../FootNav";

function Layout() {
  return (
    <div>
      <FootNav />
      <Outlet />
    </div>
  );
}

export default Layout;
