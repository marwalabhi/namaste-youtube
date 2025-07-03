import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // early return pattern
  if (!isMenuOpen) return null;

  return (
    <aside className="font-roboto flex h-screen w-64 flex-col overflow-y-auto bg-white px-2 py-4 text-black">
      <ul className="space-y-1">
        <li>
          <Link to="/">
            <button className="flex w-full items-center rounded-xl bg-gray-100 px-3 py-2 transition hover:bg-gray-200">
              <span>Home</span>
            </button>
          </Link>
        </li>

        <li>
          <button className="flex w-full items-center rounded-xl px-3 py-2 transition hover:bg-gray-100">
            {/* <MdPlayArrow className="mr-4 text-xl" /> */}
            <span>Shorts</span>
          </button>
        </li>
        <li>
          <button className="flex w-full items-center rounded-xl px-3 py-2 transition hover:bg-gray-100">
            <span>Subscriptions</span>
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
          <button className="flex w-full items-center rounded-xl px-3 py-2 transition hover:bg-gray-100">
            <span>Trending</span>
          </button>
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
