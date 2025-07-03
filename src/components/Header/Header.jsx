import {
  SolarUserCircleOutline,
  SolarHamburgerMenuOutline,
  SolarMagniferLinear,
} from "../../assets/icons/SolarIcons";
import logo from "../../assets/logo.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../utils/slices/appSlice";
import { useState, useEffect } from "react";
import { YOUTUBE_SEARCH_API } from "../../utils/constants";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    //API call
    console.log("You typed: ", searchQuery);

    // make an api call after every key press but if the diff b/w
    // 2 api calls is < 200ms
    // decline the API call
    getSearchSuggestions();
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const res = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const data = res.json();
    console.log("API responsed with", data);
  };
  const dispatch = useDispatch();

  const toggelMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <header className="font-roboto flex items-center justify-between bg-white px-4 py-2 shadow-lg">
      <div className="flex items-center gap-3">
        <button
          className="cursor-pointer rounded-full p-2 hover:bg-gray-100 focus:outline-none"
          onClick={() => toggelMenuHandler()}
        >
          <SolarHamburgerMenuOutline fontSize={28} />
        </button>
        <img alt="logo" src={logo} className="h-16 w-auto object-contain" />
      </div>

      <form className="mx-6 flex max-w-xl flex-1">
        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          placeholder="Search"
          className="flex-1 rounded-l-full border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
        />
        <button
          type="submit"
          className="rounded-r-full border border-l-0 border-gray-300 bg-gray-100 px-5 py-2 hover:bg-gray-200"
        >
          <SolarMagniferLinear />
        </button>
      </form>

      <div>
        <button className="cursor-pointer rounded-full p-2 hover:bg-gray-100 focus:outline-none">
          <SolarUserCircleOutline fontSize={32} />
        </button>
      </div>
    </header>
  );
};

export default Header;
