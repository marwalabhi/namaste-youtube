import React from "react";

const Button = ({ name, active, onClick }) => {
  return (
    <div>
      <button
        className={`m-2 rounded-[8px] px-4 py-2 text-[15px] font-medium whitespace-nowrap transition sm:px-3 sm:py-1 sm:text-[14px] ${active ? "bg-black text-white" : "hover: bg-gray-100 text-black"}`}
        onClick={onClick}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
