import React from "react";
import SideBar from "./SideBar/SideBar";
import { Outlet } from "react-router";
import Header from "../Header/Header";

const Body = () => {
  return (
    <div>
      <Header />
      <div className="grid grid-flow-col">
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
