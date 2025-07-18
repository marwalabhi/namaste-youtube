import React, { useState, useEffect } from "react";
import { YT_SEARCH_API } from "../../utils/constants";
import { Link, useSearchParams } from "react-router";
import VideoSearchCard from "../VideoSearchCard/VideoSearchCard";
import { useSelector } from "react-redux";
import axios from "axios";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search_query");

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if (!query) return;

    const fetchVideos = async () => {
      const { data } = await axios.get(YT_SEARCH_API, {
        params: {
          part: "snippet",
          maxResults: 50,
          type: "video",
          q: query,
          key: import.meta.env.VITE_API_KEY,
        },
      });
      setVideos(data.items);
    };

    fetchVideos();
  }, [query]);

  return (
    <div
      className={`flex flex-col gap-6 ${isMenuOpen ? "desktop: mt-[13rem]" : "desktop: mt-[10rem] max-2xl:mt-[12rem]"}`}
    >
      {videos.map((video) => (
        <VideoSearchCard video={video} />
      ))}
    </div>
  );
};

export default SearchResults;
