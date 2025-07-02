import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // early return pattern
  if (!isMenuOpen) return null;

  return (
    <aside className="font-roboto flex h-screen w-64 flex-col overflow-y-auto bg-white px-2 py-4 text-black">
      <ul className="space-y-1">
        <li>
          <button className="flex w-full items-center rounded-xl bg-gray-100 px-3 py-2 transition hover:bg-gray-200">
            {/* <MdHome className="mr-4 text-xl" /> */}
            <span>Home</span>
          </button>
        </li>
        <li>
          <button className="flex w-full items-center rounded-xl px-3 py-2 transition hover:bg-gray-100">
            {/* <MdPlayArrow className="mr-4 text-xl" /> */}
            <span>Shorts</span>
          </button>
        </li>
        <li>
          <button className="flex w-full items-center rounded-xl px-3 py-2 transition hover:bg-gray-100">
            {/* <MdSubscriptions className="mr-4 text-xl" /> */}
            <span>Subscriptions</span>
          </button>
        </li>
      </ul>
      <hr className="my-4 border-gray-200" />

      <div className="px-3 py-1 text-sm font-semibold text-gray-600">You</div>
      <ul className="space-y-1">
        <li>
          <button className="flex w-full items-center rounded-xl px-3 py-2 transition hover:bg-gray-100">
            {/* <MdHistory className="mr-4 text-xl" /> */}
            <span>History</span>
          </button>
        </li>
        <li>
          <button className="flex w-full items-center rounded-xl px-3 py-2 transition hover:bg-gray-100">
            {/* <MdPlaylistPlay className="mr-4 text-xl" /> */}
            <span>Playlists</span>
          </button>
        </li>
        <li>
          <button className="flex w-full items-center rounded-xl px-3 py-2 transition hover:bg-gray-100">
            {/* <MdWatchLater className="mr-4 text-xl" /> */}
            <span>Watch later</span>
          </button>
        </li>
        <li>
          <button className="flex w-full items-center rounded-xl px-3 py-2 transition hover:bg-gray-100">
            {/* <MdThumbUp className="mr-4 text-xl" /> */}
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
            {/* <MdTrendingUp className="mr-4 text-xl" /> */}
            <span>Trending</span>
          </button>
        </li>
        <li>
          <button className="flex w-full items-center rounded-xl px-3 py-2 transition hover:bg-gray-100">
            {/* <MdShoppingBag className="mr-4 text-xl" /> */}
            <span>Shopping</span>
          </button>
        </li>
        <li>
          <button className="flex w-full items-center rounded-xl px-3 py-2 transition hover:bg-gray-100">
            {/* <MdMusicNote className="mr-4 text-xl" /> */}
            <span>Music</span>
          </button>
        </li>
        <li>
          <button className="flex w-full items-center rounded-xl px-3 py-2 transition hover:bg-gray-100">
            {/* <MdMovie className="mr-4 text-xl" /> */}
            <span>Movies</span>
          </button>
        </li>
        <li>
          <button className="flex w-full items-center rounded-xl px-3 py-2 transition hover:bg-gray-100">
            {/* <MdLiveTv className="mr-4 text-xl" /> */}
            <span>Live</span>
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
