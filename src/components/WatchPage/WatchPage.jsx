import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router";
import { formatTimeAgo, formatCount } from "../../utils/commonHelpers";
import {
  MdiLightDownload,
  MdiLightShare,
  SolarLikeLinear,
} from "../../assets/icons/SolarIcons";
import { closeMenu } from "../../utils/slices/appSlice";
import CommentsContainer from "./CommentsContainer/CommentsContainer";
import { VIDEO_CONTENT_DETAIL, YT_CHANNEL_DETAIL } from "../../utils/constants";
import LiveChat from "../LiveChat/LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  const videoId = searchParams.get("v");
  const dispatch = useDispatch();

  const [video, setVideo] = useState(null);
  const [channelAvatar, setChannelAvatar] = useState(null);

  useEffect(() => {
    dispatch(closeMenu());
    fetchVideoDetails();
  }, []);

  const fetchVideoDetails = async () => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const url = VIDEO_CONTENT_DETAIL + videoId + "&key=" + apiKey;
    const res = await fetch(url);
    const data = await res.json();

    setVideo(data.items?.[0]);
  };

  const channelId = video?.snippet?.channelId;

  useEffect(() => {
    if (!channelId) return; // only fetch if channelId is available
    fetchChannelDetails();
  }, [channelId]);

  const fetchChannelDetails = async () => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const res = await fetch(YT_CHANNEL_DETAIL + channelId + "&key=" + apiKey);
    const data = await res.json();
    // console.log("fetchChannelDetails", data);

    const avatar = data?.items?.[0]?.snippet?.thumbnails?.default?.url;
    setChannelAvatar(avatar);
  };

  if (!video) return <div className="p-8">Loading...</div>;

  const { snippet, statistics } = video;

  // console.log(video);
  return (
    <div className="flex flex-col">
      <div className="font-roboto m-6 flex min-h-screen flex-row justify-around">
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
          <h1 className="mt-4 text-2xl font-bold sm:text-xl">
            {snippet.title}
          </h1>
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Channel Avatar */}
              <img
                src={channelAvatar}
                alt={snippet.channelTitle}
                className="h-10 w-10 rounded-full"
              />
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
            <div className="flex items-center gap-4 text-[14px] font-medium">
              {/* Add Like, Share, etc. buttons here */}
              <button className="flex cursor-pointer items-center gap-2 rounded-full bg-gray-100 px-3.5 py-2">
                <SolarLikeLinear fontSize={21} />
                {formatCount(statistics?.likeCount)}
              </button>
              <button className="flex cursor-pointer items-center gap-2 rounded-full bg-gray-100 px-3.5 py-2">
                <MdiLightShare fontSize={25} /> Share
              </button>
              <button className="flex cursor-pointer items-center gap-2 rounded-full bg-gray-100 px-3.5 py-2">
                <MdiLightDownload fontSize={21} />
                Download
              </button>
            </div>
          </div>

          {/* Description */}
          <div className="mt-4 rounded-lg bg-gray-100 p-4 text-gray-800 sm:text-sm">
            <div className="mb-1 font-medium">
              {Number(statistics?.viewCount).toLocaleString() + " views"} •{" "}
              {formatTimeAgo(snippet.publishedAt)}
            </div>
            <div className="whitespace-pre-line">{snippet.description}</div>
          </div>
        </div>
        {/* Live Chat */}
        <div className="">
          <div className="ml-1 p-2 font-semibold">Live Chat: </div>
          <LiveChat />
        </div>
      </div>
      <div>
        <CommentsContainer commentCount={statistics.commentCount} />
      </div>
    </div>
  );
};

export default WatchPage;
