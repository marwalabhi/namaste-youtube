import React from "react";
import {
  formatCount,
  formatDuration,
  formatTimeAgo,
} from "../../../../../utils/commonHelpers";

import { useGetChannelDetailsQuery } from "../../../../../services/youtubeChannelApi";

import { SolarUserCircleBoldDuotone } from "../../../../../assets/icons/SolarIcons";

const DEFAULT_AVATAR = <SolarUserCircleBoldDuotone />;

const VideoCard = ({ info }) => {
  if (!info) return null;

  const { snippet, statistics, contentDetails } = info;
  const { channelTitle, title, thumbnails, publishedAt, channelId } = snippet;

  const { data: channelData, isLoading } = useGetChannelDetailsQuery(
    channelId,
    {
      skip: !channelId,
    },
  );

  const avatarUrl =
    channelData?.items[0]?.snippet?.thumbnails?.default?.url || DEFAULT_AVATAR;

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
          src={avatarUrl}
          alt={channelTitle}
          className="mr-3 flex h-9 w-9 shrink-0 rounded-full bg-gray-200 object-cover"
        />
        <div className="flex flex-col">
          <h3 className="mb-1 line-clamp-2 font-medium">{title}</h3>
          <div className="cursor-pointer text-[14px] leading-[1.4rem] font-normal text-gray-500 hover:text-gray-800">
            {channelTitle}
          </div>
          <div className="text-[14px] leading-[1.4rem] font-normal text-gray-500">
            {formatCount(statistics?.viewCount, true)}
            {statistics?.viewCount ? " • " : ""}
            {formatTimeAgo(publishedAt)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
