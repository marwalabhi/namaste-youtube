import React, { useEffect } from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center gap-2 p-2 text-sm shadow-sm">
      <div className="font-semibold">{name}</div>
      <div>{message}</div>
    </div>
  );
};

export default ChatMessage;
