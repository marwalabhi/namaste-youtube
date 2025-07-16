import React from "react";

const Button = ({ name, active, onClick }) => {
  return (
    <div className="mt-1">
      <button
        className={`desktop:px-3 desktop:py-[5px] flex cursor-pointer place-items-center rounded-[8px] bg-[rgba(0,0,0,0.05)] px-4 py-2 text-[15px] font-medium whitespace-nowrap transition max-2xl:px-[12px] max-2xl:py-[6px] max-2xl:text-[14px] ${active ? "bg-black text-white" : "hover: text-black"}`}
        onClick={onClick}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
