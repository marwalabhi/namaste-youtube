import React from "react";
import VideoContainer from "./Video/VideoContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div className="">
      <div className={`${isMenuOpen ? "mt-[190px]" : "mt-32"}`}>
        <VideoContainer />
      </div>
    </div>
  );
};

export default MainContainer;
