import React, { useState, useEffect } from "react";
import axios from "axios";
import { YT_SEARCH_API } from "../../utils/constants";
import { Link, useSearchParams } from "react-router";
import VideoSearchCard from "../VideoSearchCard/VideoSearchCard";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search_query");
  console.log("query", query);

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

  console.log("videos_data", videos);

  return (
    <div className="m-6 flex flex-col gap-6">
      {videos.map((video) => (
        <VideoSearchCard video={video} />
      ))}
    </div>
  );
};

export default SearchResults;
