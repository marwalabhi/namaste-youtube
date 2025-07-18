import React from "react";
import { Link } from "react-router";
import { useSelector } from "react-redux";

const VideoSearchCard = ({ video }) => {
  const { snippet, id } = video;
  const { channelId, channelTitle, title, publishedAt, thumbnails } = snippet;

  return (
    <div className="font-roboto">
      <Link
        to={`/watch?v=${id.videoId || id.playlistId || id.channelId}`}
        className="flex w-full gap-4 rounded-xl bg-white p-2 transition hover:bg-gray-50"
      >
        <div className="aspect-video">
          <img
            src={thumbnails?.high?.url || thumbnails?.default?.url}
            alt={snippet?.title}
            className="h-full w-full flex-shrink-0 rounded-xl object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between">
          <div>
            <h3 className="line-clamp-2 text-lg font-semibold">
              {snippet?.title}
            </h3>
            <div className="mt-1 text-sm text-gray-600">
              {snippet?.channelTitle}
              {/* Add views, time, etc. here if available */}
            </div>
            <p className="mt-2 line-clamp-2 text-sm text-gray-700">
              {snippet?.description}
            </p>
          </div>
          {/* Add badges, duration, etc. as needed */}
        </div>
      </Link>
    </div>
  );
};

export default VideoSearchCard;
