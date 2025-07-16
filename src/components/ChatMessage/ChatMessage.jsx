import React from "react";
import { SolarUserCircleBoldDuotone } from "../../assets/icons/SolarIcons";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center gap-2 bg-white/85 p-2 text-sm shadow-sm backdrop-blur-xl backdrop-saturate-150">
      <div className="h-10 w-10 cursor-pointer rounded-full">
        <SolarUserCircleBoldDuotone className="h-full w-full" />
      </div>
      <div>
        <div className="font-semibold">{name}</div>
        <div>{message}</div>
      </div>
    </div>
  );
};

export default ChatMessage;
