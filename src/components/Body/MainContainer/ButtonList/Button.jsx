import React from "react";

const Button = ({ name, active, onClick }) => {
  return (
    <div className="mt-1">
      <button
        className={`desktop:px-3 desktop:py-[5px] laptop:text-[14px] flex cursor-pointer place-items-center rounded-[8px] bg-[rgba(0,0,0,0.05)] px-4 py-2 text-[15px] font-medium whitespace-nowrap transition ${active ? "bg-black text-white" : "hover: text-black"}`}
        onClick={onClick}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
