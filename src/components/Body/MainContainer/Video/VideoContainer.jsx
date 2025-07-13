import React, { useEffect, useState } from "react";
import { YT_TRENDING_VIDEO_API } from "../../../../utils/constants";
import VideoCard from "./VideoCard/VideoCard";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { cacheVideos } from "../../../../utils/slices/scrollSlice";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const limitedVideos = useSelector((store) => store.iscroll);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      setLoading(true);
      const data = await fetch(YT_TRENDING_VIDEO_API);
      const json = await data.json();
      setVideos(json.items);

      dispatch(cacheVideos(json.items));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching videos:", error);
    }
  };

  const handleScroll = (e) => {
    console.log("Scroll Top:");

    const { scrollTop, scrollHeight, clientHeight } = e.target;
    console.log("Scroll Top:", scrollTop);
  };

  console.log(videos, "from useSelector");

  return (
    <div
      className="h-[calc(100vh - 200px)] m-6 grid grid-cols-3 gap-6 overflow-y-scroll bg-pink-300"
      onScroll={handleScroll}
    >
      {loading && <h1>Loading...</h1>}
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video?.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
