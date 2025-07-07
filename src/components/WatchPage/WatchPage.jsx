import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router";
// import { YT_VIDEOS_API } from "../../utils/constants";
import { formatTimeAgo, formatViews } from "../../utils/commonHelpers";

import { closeMenu } from "../../utils/slices/appSlice";
import Comments from "./CommentsContainer/CommentsContainer";
import CommentsContainer from "./CommentsContainer/CommentsContainer";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const dispatch = useDispatch();

  const [video, setVideo] = useState(null);

  useEffect(() => {
    dispatch(closeMenu());
    fetchVideoDetails();
  }, []);

  const fetchVideoDetails = async () => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${videoId}&key=${import.meta.env.VITE_API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();
    setVideo(data.items?.[0]);
  };

  if (!video) return <div className="p-8">Loading...</div>;

  const { snippet, statistics } = video;

  console.log(video);
  return (
    <div className="flex flex-col">
      <div className="font-roboto m-6 flex min-h-screen flex-col">
        <div className="mt-4 w-full max-w-6xl">
          {/* Video Player */}
          <div className="aspect-video w-full overflow-hidden rounded-xl bg-black">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              frameBorder="0"
              allow="accelerometer; autoplay"
              title={snippet.title}
              allowFullScreen
            />
          </div>

          {/* Video Info */}
          <h1 className="mt-4 text-2xl font-bold">{snippet.title}</h1>
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Channel Avatar */}
              {/* <img
              // src={}
              alt={snippet.channelTitle}
              className="h-10 w-10 rounded-full"
            /> */}
              <div>
                <div className="font-semibold">{snippet.channelTitle}</div>
                <div className="text-xs text-gray-500">
                  34.1 lakh subscribers
                </div>
              </div>
              <button className="ml-4 rounded-full bg-black px-4 py-2 font-semibold text-white hover:bg-gray-800">
                Subscribe
              </button>
            </div>
            <div className="flex items-center gap-4">
              <span>{formatViews(statistics.viewCount)}</span>
              <span>•</span>
              <span>{formatTimeAgo(snippet.publishedAt)}</span>
              {/* Add Like, Share, etc. buttons here */}
              <button className="rounded-full bg-gray-100 px-3 py-1 font-medium">
                {formatViews(statistics.likeCount)}
              </button>
              <button className="rounded-full bg-gray-100 px-3 py-1 font-medium">
                Share
              </button>
              <button className="rounded-full bg-gray-100 px-3 py-1 font-medium">
                Download
              </button>
            </div>
          </div>

          {/* Description */}
          <div className="mt-4 rounded-lg bg-gray-100 p-4 text-gray-800">
            <div className="mb-1 font-medium">
              {formatViews(statistics.viewCount)} •{" "}
              {formatTimeAgo(snippet.publishedAt)}
            </div>
            <div className="whitespace-pre-line">{snippet.description}</div>
          </div>
        </div>
      </div>
      <div>
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
