import React, { useState } from "react";
import Button from "./Button";

const list = [
  "All",
  "Music",
  "Podcasts",
  "Mixes",
  "Indian pop music",
  "Live",
  "Self-confidence",
  "Laptops",
  "Satsang",
  "Web Development",
  "Asana",
  "Computer programming",
  "Study Skills",
  "Feature Phones",
];

const ButtonList = () => {
  const [active, setActive] = useState("All");

  return (
    <div className="font-roboto flex flex-wrap gap-3 bg-white px-4 py-3">
      {list.map((item) => (
        <Button
          key={item}
          name={item}
          active={active === item}
          onClick={() => setActive(item)}
        />
      ))}
    </div>
  );
};

export default ButtonList;
