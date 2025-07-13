import React from "react";
import SideBar from "./SideBar/SideBar";
import { Outlet } from "react-router";
import Header from "../Header/Header";

const Body = () => {
  return (
    <div className="flex h-screen">
      <div className="sticky top-0 h-screen">
        <SideBar />
      </div>
      <div className="flex-1 overflow-y-auto">
        <Header />
        <Outlet />
      </div>
    </div>

    // <div>
    //   <div className="sticky top-0 z-20">
    //     <Header />
    //   </div>
    //   <div className="grid grid-flow-col">
    //     <div className="sticky top-0 h-screen">
    //       <SideBar />
    //     </div>
    //     <Outlet />
    //   </div>
    // </div>
  );
};

export default Body;
