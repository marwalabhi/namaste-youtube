import React from "react";
import ChatMessage from "../ChatMessage/ChatMessage";

const LiveChat = () => {
  return (
    <div className="ml-2 h-[600px] w-full rounded-lg border border-black bg-slate-100 p-2">
      <ChatMessage
        name="Abhishek Marwal"
        message="This is fitness session live of abhishek!"
      />
    </div>
  );
};

export default LiveChat;
