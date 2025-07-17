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
import { VIDEO_CONTENT_DETAIL } from "../../utils/constants";
import LiveChat from "../LiveChat/LiveChat";
import { useGetChannelDetailsQuery } from "../../services/youtubeChannelApi";

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  const videoId = searchParams.get("v");
  const dispatch = useDispatch();

  const [video, setVideo] = useState(null);

  useEffect(() => {
    dispatch(closeMenu());

    const fetchVideoDetails = async () => {
      const apiKey = import.meta.env.VITE_API_KEY;
      const url = VIDEO_CONTENT_DETAIL + videoId + "&key=" + apiKey;
      const res = await fetch(url);
      const data = await res.json();
      setVideo(data.items?.[0]);
    };

    fetchVideoDetails();
  }, []);

  const channelId = video?.snippet?.channelId;
  const { data: channelData, isLoading } = useGetChannelDetailsQuery(
    channelId,
    { skip: !channelId },
  );

  const avatarUrl = channelData?.items[0]?.snippet?.thumbnails?.default?.url;

  if (!video || isLoading) return <div className="p-8">Loading...</div>;

  const { snippet, statistics } = video;

  return (
    <div className="flex flex-col">
      <div className="font-roboto m-6 flex min-h-screen flex-row justify-around">
        <div className="mt-4 w-full max-w-6xl xl:mt-15">
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
          <h1 className="mt-4 text-xl font-bold">{snippet.title}</h1>
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Channel Avatar */}
              <img
                src={avatarUrl}
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
              {/* Add Like, Share buttons */}
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
          <div className="mt-4 rounded-lg bg-[#f2f2f2] p-4 text-sm text-gray-800">
            <div className="mb-1 font-medium">
              {Number(statistics?.viewCount).toLocaleString() + " views"} •{" "}
              {formatTimeAgo(snippet.publishedAt)}
            </div>
            <div className="whitespace-pre-line">{snippet.description}</div>
          </div>
        </div>
        {/* Live Chat */}
        <div className="xl:mt-15">
          <div className="ml-1 p-2 font-semibold">Live Chat: </div>
          <LiveChat />
        </div>
      </div>
      <div>
        <CommentsContainer
          commentCount={statistics.commentCount}
          videoId={videoId}
        />
      </div>
    </div>
  );
};

export default WatchPage;
