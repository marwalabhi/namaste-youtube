import React from "react";

const Comment = ({ data, r }) => {
  const { name, text, replies, avatar } = data;
  console.log(r.snippet);

  return (
    <div className="flex items-start gap-3 py-4">
      <img
        src={
          avatar ||
          "https://www.gstatic.com/youtube/img/channel/default_profile_48.png"
        }
        alt="user"
        className="h-10 w-10 rounded-full object-cover"
      />
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold">{name}</span>
          {/* You can add a timestamp here if available */}
        </div>
        <p className="text-[15px] text-gray-800">
          {r?.snippet?.topLevelComment?.snippet?.textDisplay}
        </p>
        {/* Optionally, render replies here */}
        {replies && replies.length > 0 && (
          <div className="mt-2 border-l-2 border-gray-200 pl-4">
            {replies.map((reply, idx) => (
              <Comment key={idx} data={reply} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
