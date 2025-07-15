import React from "react";

const Button = ({ name, active, onClick }) => {
  return (
    <div className="mt-1">
      <button
        className={`flex cursor-pointer place-items-center rounded-[8px] bg-[rgba(0,0,0,0.05)] px-4 py-2 text-[15px] font-medium whitespace-nowrap transition xl:px-3 xl:py-[5px] xl:text-[14px] ${active ? "bg-black text-white" : "hover: text-black"}`}
        onClick={onClick}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
