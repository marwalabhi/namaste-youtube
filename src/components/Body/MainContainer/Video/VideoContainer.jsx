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
  const [nextToken, setNextToken] = useState(null);

  const videos = useSelector((store) => store.iscroll.videos);
  const getNextToken = useSelector((store) => store.iscroll.token);

  const sentinelRef = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (videos.length === 0) getVideos(); // don't refresh on back-nav
  }, [videos.length, nextToken]);

  const getVideos = async (pageToken = "") => {
    try {
      setLoadingPage(true);
      const data = await fetch(
        `${YT_TRENDING_VIDEO_API}&maxResults=${API_PAGE_SIZE}&pageToken=${pageToken}`,
      );
      const json = await data.json();

      dispatch(appendVideos(json.items)); // add to redux cache
      dispatch(storeToken(json.nextPageToken));
      setNextToken(json.nextPageToken || ""); // "" means no more pages
    } catch (error) {
      console.error("Error fetching videos:", error);
    } finally {
      setLoadingPage(false);
    }
  };

  // const attachObserver = useCallback(
  //   (node) => {
  //     if (loading) return;
  //     if (sentinelRef.current) sentinelRef.current.disconnect();

  //     sentinelRef.current = new IntersectionObserver(
  //       (entries) => {
  //         if (entries[0].isIntersecting && nextToken) {
  //           getVideos(nextToken);
  //         }
  //       },
  //       { rootMargin: "400px" }, // pre-fetch a bit before bottom
  //     );

  //     if (node) sentinelRef.current.observe(node);
  //   },
  //   [nextToken, loading],
  // );
  console.log(videos.length, nextToken, "token", videos);

  useEffect(() => {
    const node = sentinelRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && nextToken && !loadingPage) {
          getVideos(nextToken);
        }
      },
      { rootMargin: "300px" },
    );

    observer.observe(node);
    console.log(observer, node);

    return () => observer.disconnect();
  }, [nextToken, loadingPage]);

  return (
    <div className="grid h-11/12 grid-cols-3 gap-6 p-6">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video?.id}>
          <VideoCard info={video} />
        </Link>
      ))}

      {nextToken && <div ref={sentinelRef} className="h-1" />}

      {loadingPage &&
        Array.from({ length: 9 }).map((_, i) => (
          <VideoSkeleton key={`sk-${i}`} />
        ))}
    </div>
  );
};

export default VideoContainer;
