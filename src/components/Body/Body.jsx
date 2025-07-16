import React from "react";
import SideBar from "./SideBar/SideBar";
import { Outlet } from "react-router";
import Header from "../Header/Header";

const Body = () => {
  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden">
      <div className="">
        <Header />
      </div>
      <div className="flex min-h-0 flex-1">
        <div className="sticky top-16 z-30 h-[calc(100vh-4rem)]">
          <SideBar />
        </div>
        {/* Scrollable Main Content */}
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Body;
