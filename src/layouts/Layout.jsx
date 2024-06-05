import React from "react";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <div className="header">
        <div className="flex justify-between shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          <h1 className="text-3xl">JayCars</h1>
          {/* / <button className="btn">user</button> */}
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
