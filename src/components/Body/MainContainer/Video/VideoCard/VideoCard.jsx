import React, { useEffect, useState } from "react";
import {
  formatDuration,
  formatTimeAgo,
  formatViews,
} from "../../../../../utils/commonHelpers";

const DEFAULT_AVATAR =
  "https://www.gstatic.com/youtube/img/channel/default_profile_48.png";

const VideoCard = ({ info }) => {
  const [channelAvatar, setChannelAvatar] = useState(DEFAULT_AVATAR);

  if (!info) return null;

  const { snippet, statistics, contentDetails } = info;
  const { channelTitle, title, thumbnails, publishedAt, channelId } = snippet;

  useEffect(() => {
    const fetchChannelAvatar = async () => {
      try {
        const res = await fetch(
          `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${import.meta.env.VITE_API_KEY}`,
        );
        const data = await res.json();
        const avatar =
          data?.items?.[0]?.snippet?.thumbnails?.default?.url || DEFAULT_AVATAR;
        setChannelAvatar(avatar);
      } catch {
        setChannelAvatar(DEFAULT_AVATAR);
      }
    };
    fetchChannelAvatar();
  }, [channelId]);

  //border border-[#aaaaaa]/20

  return (
    <div className="font-roboto cursor-pointer rounded-xl bg-white transition-shadow hover:shadow-2xl">
      <div className="relative aspect-video w-full overflow-hidden rounded-xl">
        <img
          className="h-full w-full object-cover"
          alt="thumbnail"
          src={thumbnails?.standard?.url || thumbnails?.default?.url}
        />
        <span className="absolute right-2 bottom-2 rounded bg-black px-2 py-0.5 text-xs font-semibold text-white opacity-80">
          {formatDuration(contentDetails?.duration)}
        </span>
      </div>
      <div className="flex px-3 py-3">
        <img
          src={channelAvatar}
          alt={channelTitle}
          className="mr-3 flex h-9 w-9 shrink-0 rounded-full bg-gray-200 object-cover"
        />
        <div className="flex flex-col">
          <h3 className="mb-1 line-clamp-2 font-medium">{title}</h3>
          <div className="cursor-pointer text-[14px] leading-[1.4rem] font-normal text-gray-500 hover:text-gray-800">
            {channelTitle}
          </div>
          <div className="text-[14px] leading-[1.4rem] font-normal text-gray-500">
            {formatViews(statistics?.viewCount)}
            {statistics?.viewCount ? " • " : ""}
            {formatTimeAgo(publishedAt)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
