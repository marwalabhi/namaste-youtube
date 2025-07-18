import React, { useEffect, useState, useRef, useCallback } from "react";
import {
  API_PAGE_SIZE,
  YT_TRENDING_VIDEO_API,
} from "../../../../utils/constants";
import VideoCard from "./VideoCard/VideoCard";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { appendVideos, storeToken } from "../../../../utils/slices/scrollSlice";
import VideoSkeleton from "../../../ShimmerUI/VideoSkeleton";

const VideoContainer = () => {
  const [loadingPage, setLoadingPage] = useState(false);

  const videos = useSelector((store) => store.iscroll.videos);
  const nextToken = useSelector((store) => store.iscroll.token);

  const observerRef = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (videos.length === 0 && !loadingPage) getVideos(); // don't refresh on back-nav
  }, [videos.length]);

  const getVideos = async (pageToken = "") => {
    try {
      setLoadingPage(true);
      const data = await fetch(
        `${YT_TRENDING_VIDEO_API}&maxResults=${API_PAGE_SIZE}&pageToken=${pageToken}`,
      );
      const json = await data.json();

      dispatch(appendVideos(json.items)); // add to redux cache
      dispatch(storeToken(json.nextPageToken || ""));
    } catch (error) {
      console.error("Error fetching videos:", error);
    } finally {
      setLoadingPage(false);
    }
  };

  const setObserver = useCallback(
    (node) => {
      if (observerRef.current) observerRef.current.disconnect();
      if (!node) return;

      observerRef.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && nextToken && !loadingPage) {
            getVideos(nextToken);
          }
        },
        { rootMargin: "300px" },
      );

      observerRef.current.observe(node);

      // manually trigger fetch if already intersecting on load
      requestIdleCallback(() => {
        const rect = node.getBoundingClientRect();
        if (rect.top < window.innerHeight && nextToken && !loadingPage) {
          getVideos(nextToken);
        }
      });
    },
    [nextToken, loadingPage],
  );

  return (
    <div className="grid h-11/12 grid-cols-3 gap-6 p-6">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video?.id}>
          <VideoCard info={video} />
        </Link>
      ))}

      {nextToken && <div ref={setObserver} className="h-1" />}

      {loadingPage &&
        Array.from({ length: 9 }).map((_, i) => (
          <VideoSkeleton key={`sk-${i}`} />
        ))}
    </div>
  );
};

export default VideoContainer;
