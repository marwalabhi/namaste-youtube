import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMessage } from "../../utils/slices/chatSlice";

const ChatMessage = ({ name, message }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      console.log("api polling");

      dispatch(addMessage({
        name="abhi",
        message="hello",
      }));
    }, 2000);

    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <div className="flex items-center p-2 shadow-sm">
      <div>{name}</div>
      <div>{message}</div>
    </div>
  );
};

export default ChatMessage;
