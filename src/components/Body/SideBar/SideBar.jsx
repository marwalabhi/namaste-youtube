import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router";
import {
  IcSharpHome,
  MaterialSymbolsLightSubscriptionsOutlineSharp,
  SimpleIconsYoutubeshorts,
} from "../../../assets/icons/SolarIcons";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // early return pattern
  if (!isMenuOpen) return null;
  const itemClasses =
    "flex w-full items-center rounded-xl px-3 py-2 transition hover:bg-[#e0e0e0]";

  return (
    <aside className="font-roboto flex h-screen w-64 flex-col overflow-y-auto bg-white px-2 py-4 text-[15px] text-black">
      <ul className="space-y-1">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${itemClasses} ${isActive ? "bg-[#f2f2f2]" : ""}`
            }
          >
            <div className="flex items-center gap-3">
              <IcSharpHome className="h-6 w-6" />
              <span>Home</span>
            </div>
          </NavLink>
        </li>

        <li>
          <button className="flex w-full items-center rounded-xl px-3 py-2 transition hover:bg-gray-100">
            <div className="flex items-center gap-3">
              <SimpleIconsYoutubeshorts className="h-5 w-5" />
              <span>Shorts</span>
            </div>
          </button>
        </li>
        <li>
          <button className="flex w-full items-center rounded-xl px-3 py-2 transition hover:bg-gray-100">
            <div className="flex items-center gap-3">
              <MaterialSymbolsLightSubscriptionsOutlineSharp className="h-6 w-6" />
              <span>Subscriptions</span>
            </div>
          </button>
        </li>
      </ul>
      <hr className="my-4 border-gray-200" />

      <div className="px-3 py-1 text-sm font-semibold text-gray-600">You</div>
      <ul className="space-y-1">
        <li>
          <button className="flex w-full items-center rounded-xl px-3 py-2 transition hover:bg-gray-100">
            <span>History</span>
          </button>
        </li>
        <li>
          <button className="flex w-full items-center rounded-xl px-3 py-2 transition hover:bg-gray-100">
            <span>Playlists</span>
          </button>
        </li>
        <li>
          <button className="flex w-full items-center rounded-xl px-3 py-2 transition hover:bg-gray-100">
            <span>Watch later</span>
          </button>
        </li>
        <li>
          <button className="flex w-full items-center rounded-xl px-3 py-2 transition hover:bg-gray-100">
            <span>Liked videos</span>
          </button>
        </li>
      </ul>
      <hr className="my-4 border-gray-200" />

      <div className="px-3 py-1 text-sm font-semibold text-gray-600">
        Explore
      </div>
      <ul className="space-y-1">
        <li>
          <NavLink to="/">
            <button className="flex w-full items-center rounded-xl px-3 py-2 transition hover:bg-gray-100">
              <span>Trending</span>
            </button>
          </NavLink>
        </li>
        <li>
          <button className="flex w-full items-center rounded-xl px-3 py-2 transition hover:bg-gray-100">
            <span>Shopping</span>
          </button>
        </li>
        <li>
          <button className="flex w-full items-center rounded-xl px-3 py-2 transition hover:bg-gray-100">
            <span>Music</span>
          </button>
        </li>
        <li>
          <button className="flex w-full items-center rounded-xl px-3 py-2 transition hover:bg-gray-100">
            <span>Movies</span>
          </button>
        </li>
        <li>
          <button className="flex w-full items-center rounded-xl px-3 py-2 transition hover:bg-gray-100">
            <span>Live</span>
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
