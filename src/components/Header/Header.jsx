import {
  SolarUserCircleOutline,
  SolarHamburgerMenuOutline,
  SolarMagniferLinear,
} from "../../assets/icons/SolarIcons";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className="font-roboto flex items-center justify-between bg-white px-4 py-2 shadow-lg">
      <div className="flex items-center gap-3">
        <button className="rounded-full p-2 hover:bg-gray-100 focus:outline-none">
          <SolarHamburgerMenuOutline fontSize={28} />
        </button>
        <img alt="logo" src={logo} className="h-16 w-auto object-contain" />
      </div>

      <form className="mx-6 flex max-w-xl flex-1">
        <input
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
        <button className="rounded-full p-2 hover:bg-gray-100 focus:outline-none">
          <SolarUserCircleOutline fontSize={32} />
        </button>
      </div>
    </header>
  );
};

export default Header;
