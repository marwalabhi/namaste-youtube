import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = ["All", "Music", "Satsang", "News", "Live", "Gaming"];
  return (
    <div className="flex flex-wrap gap-4 p-3">
      {list.map((item) => (
        <Button key={item} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
