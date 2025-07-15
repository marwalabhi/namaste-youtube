import React, { useEffect, useState, useRef, useCallback } from "react";
import { YT_TRENDING_VIDEO_API } from "../../../../utils/constants";
import VideoCard from "./VideoCard/VideoCard";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { cacheVideos } from "../../../../utils/slices/scrollSlice";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nextToken, setNextToken] = useState(null);

  const sentinelRef = useRef(null);

  const dispatch = useDispatch();
  const limitedVideos = useSelector((store) => store.iscroll);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async (token = "") => {
    try {
      setLoading(true);
      const data = await fetch(`${YT_TRENDING_VIDEO_API}&pageToken=${token}`);
      const json = await data.json();

      setVideos((prev) => [...prev, ...json.items]);
      setNextToken(json.nextPageToken || null);

      dispatch(cacheVideos(json.items));
    } catch (error) {
      console.error("Error fetching videos:", error);
    } finally {
      setLoading(false);
    }
  };

  const attachObserver = useCallback(
    (node) => {
      if (loading) return;
      if (sentinelRef.current) sentinelRef.current.disconnect();

      sentinelRef.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && nextToken) {
            getVideos(nextToken);
          }
        },
        { rootMargin: "400px" }, // pre-fetch a bit before bottom
      );

      if (node) sentinelRef.current.observe(node);
    },
    [nextToken, loading],
  );

  return (
    <div className="grid h-11/12 grid-cols-3 gap-6 p-6">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video?.id}>
          <VideoCard info={video} />
        </Link>
      ))}

      {nextToken && <div ref={attachObserver} className="h-1" />}
      {loading && <h1 className="col-span-full">Loading...</h1>}
    </div>
  );
};

export default VideoContainer;
