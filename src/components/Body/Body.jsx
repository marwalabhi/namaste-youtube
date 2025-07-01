import React from "react";
import SideBar from "./SideBar/SideBar";
import MainContainer from "./MainContainer/MainContainer";


const Body = () => {
  return (
    <div className="flex">
      <SideBar />
      <MainContainer />
    </div>
  );
};

export default Body;
