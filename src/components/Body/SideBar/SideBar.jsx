import React from "react";

const SideBar = () => {
  return (
    <aside className="font-roboto flex h-screen w-64 flex-col overflow-y-auto bg-black px-2 py-4 text-white">
      <ul className="space-y-1">
        <li>
          <button className="flex w-full items-center rounded-xl bg-gray-800 px-3 py-2 transition hover:bg-gray-700">
            {/* <MdHome className="mr-4 text-xl" /> */}
            <span>Home</span>
          </button>
        </li>
        <li>
          <button className="flex w-full items-center rounded-xl px-3 py-2 transition hover:bg-gray-800">
            {/* <MdPlayArrow className="mr-4 text-xl" /> */}
            <span>Shorts</span>
          </button>
        </li>
        <li>
          <button className="flex w-full items-center rounded-xl px-3 py-2 transition hover:bg-gray-800">
            {/* <MdSubscriptions className="mr-4 text-xl" /> */}
            <span>Subscriptions</span>
          </button>
        </li>
      </ul>
      <hr className="my-4 border-gray-700" />

      <div className="px-3 py-1 text-sm font-semibold text-gray-400">You</div>
      <ul className="space-y-1">
        <li>
          <button className="flex w-full items-center rounded-xl px-3 py-2 transition hover:bg-gray-800">
            {/* <MdHistory className="mr-4 text-xl" /> */}
            <span>History</span>
          </button>
        </li>
        <li>
          <button className="flex w-full items-center rounded-xl px-3 py-2 transition hover:bg-gray-800">
            {/* <MdPlaylistPlay className="mr-4 text-xl" /> */}
            <span>Playlists</span>
          </button>
        </li>
        <li>
          <button className="flex w-full items-center rounded-xl px-3 py-2 transition hover:bg-gray-800">
            {/* <MdWatchLater className="mr-4 text-xl" /> */}
            <span>Watch later</span>
          </button>
        </li>
        <li>
          <button className="flex w-full items-center rounded-xl px-3 py-2 transition hover:bg-gray-800">
            {/* <MdThumbUp className="mr-4 text-xl" /> */}
            <span>Liked videos</span>
          </button>
        </li>
      </ul>
      <hr className="my-4 border-gray-700" />

      <div className="px-3 py-1 text-sm font-semibold text-gray-400">
        Explore
      </div>
      <ul className="space-y-1">
        <li>
          <button className="flex w-full items-center rounded-xl px-3 py-2 transition hover:bg-gray-800">
            {/* <MdTrendingUp className="mr-4 text-xl" /> */}
            <span>Trending</span>
          </button>
        </li>
        <li>
          <button className="flex w-full items-center rounded-xl px-3 py-2 transition hover:bg-gray-800">
            {/* <MdShoppingBag className="mr-4 text-xl" /> */}
            <span>Shopping</span>
          </button>
        </li>
        <li>
          <button className="flex w-full items-center rounded-xl px-3 py-2 transition hover:bg-gray-800">
            {/* <MdMusicNote className="mr-4 text-xl" /> */}
            <span>Music</span>
          </button>
        </li>
        <li>
          <button className="flex w-full items-center rounded-xl px-3 py-2 transition hover:bg-gray-800">
            {/* <MdMovie className="mr-4 text-xl" /> */}
            <span>Movies</span>
          </button>
        </li>
        <li>
          <button className="flex w-full items-center rounded-xl px-3 py-2 transition hover:bg-gray-800">
            {/* <MdLiveTv className="mr-4 text-xl" /> */}
            <span>Live</span>
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
