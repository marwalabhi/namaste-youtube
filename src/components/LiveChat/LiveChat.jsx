import React, { useEffect, useState } from "react";
import ChatMessage from "../ChatMessage/ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../utils/slices/chatSlice";
import { getRandomMessage, getRandomName } from "../../utils/commonHelpers";

const LiveChat = () => {
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);
  const [liveMesaage, setLiveMessage] = useState("");

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

  const handleMessageSend = () => {
    if (liveMesaage.trim() === "") return;
    dispatch(
      addMessage({
        name: "Abhi Marwal",
        message: liveMesaage,
      }),
    );
    setLiveMessage("");
  };

  return (
    <div className="ml-2 w-[35vw]">
      <div className="flex h-[625px] flex-col-reverse overflow-x-hidden overflow-y-scroll bg-linear-to-r/decreasing from-indigo-200 to-teal-200">
        {chatMessages &&
          chatMessages.length > 0 &&
          chatMessages.map((c, i) => (
            <ChatMessage key={i} name={c?.name} message={c?.message} />
          ))}
      </div>
      <form
        className="flex justify-between rounded-[8px] border border-blue-400"
        onSubmit={(e) => {
          e.preventDefault();
          handleMessageSend();
        }}
      >
        <input
          type="text"
          className="w-[75%] p-1 pl-3 outline-none"
          placeholder={"Type and share your opinion"}
          onChange={(e) => setLiveMessage(e.target.value)}
          value={liveMesaage}
        />
        <button className="w-[25%] cursor-pointer rounded-[8px] bg-black text-white hover:bg-gray-800">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
