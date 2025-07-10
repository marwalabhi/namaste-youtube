import React, { useEffect } from "react";
import ChatMessage from "../ChatMessage/ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../utils/slices/chatSlice";
import { getRandomMessage, getRandomName } from "../../utils/commonHelpers";

const LiveChat = () => {
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      console.log("api polling");

      dispatch(
        addMessage({
          name: getRandomName(),
          message: getRandomMessage(),
        }),
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <div className="ml-2 w-lg">
      <div className="mb-1 flex h-[625px] flex-col-reverse overflow-x-hidden overflow-y-scroll rounded-lg border border-black bg-slate-100 p-2">
        {chatMessages &&
          chatMessages.length > 0 &&
          chatMessages.map((c, i) => (
            <ChatMessage key={i} name={c?.name} message={c?.message} />
          ))}
      </div>
      <div className="flex justify-between rounded-[8px] border border-blue-400">
        <input
          type="text"
          className="w-[75%] p-1 pl-3 outline-none"
          placeholder={"Type and share your opinion"}
        />
        <button className="w-[25%] cursor-pointer rounded-[8px] bg-black text-white hover:bg-gray-800">
          Send
        </button>
      </div>
    </div>
  );
};

export default LiveChat;
