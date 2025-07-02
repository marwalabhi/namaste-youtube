import React, { useEffect, useState } from "react";
import { YT_VIDEOS_API } from "../../../../utils/constants";
import VideoCard from "./VideoCard/VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YT_VIDEOS_API);
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items);
  };

  return (
    <div className="grid grid-cols-4 gap-2">
      {videos.map((video) => (
        <VideoCard key={video?.id} info={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
