import React from "react";
import SideBar from "./SideBar/SideBar";
import { Outlet } from "react-router";

const Body = () => {
  return (
    <div className="grid grid-flow-col">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;
