import React from "react";
import { formatTimeAgo } from "../../../../utils/commonHelpers";

const Comment = ({ data }) => {
  const { snippet } = data;

  console.log("comments real data received", data);

  const { topLevelComment } = snippet;

  const nestedComments = data?.replies?.comments ?? [];

  const commentSnippet = data.snippet.topLevelComment?.snippet ?? data.snippet;

  return (
    <div className="flex items-start gap-3 py-4">
      <img
        src={commentSnippet?.authorProfileImageUrl}
        alt={commentSnippet?.authorDisplayName}
        className="h-10 w-10 cursor-pointer rounded-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className="cursor-pointer text-sm font-semibold">
            {commentSnippet?.authorDisplayName}
          </span>
          <span className="text-xs font-normal text-gray-600">
            {formatTimeAgo(commentSnippet?.publishedAt)}
          </span>
        </div>
        <p
          className="text-[15px] text-gray-800"
          dangerouslySetInnerHTML={{
            __html: commentSnippet?.textOriginal || "",
          }}
        />
        {/* Nested comments */}
        {nestedComments.length > 0 && (
          <div className="mt-2 border-l-2 border-gray-200 pl-4">
            {nestedComments.map((reply) => (
              <Comment key={reply.id} data={reply} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
