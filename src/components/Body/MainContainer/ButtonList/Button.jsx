import React from "react";

const Button = ({ name, active, onClick }) => {
  return (
    <div className="mt-1">
      <button
        className={`flex cursor-pointer place-items-center rounded-[8px] px-4 py-2 text-[15px] font-medium whitespace-nowrap transition max-xl:px-3 max-xl:py-1 max-xl:text-[14px] ${active ? "bg-black text-white" : "hover: bg-gray-100 text-black"}`}
        onClick={onClick}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
