import React from "react";

const Comment = ({ data }) => {
  return <div>Comment</div>;
};

const CommentsContainer = ({ commentCount }) => {
  const commentsData = [{}];

  return (
    <div className="font-roboto m-5 p-2">
      <h1 className="text-2xl font-bold">Comments: {commentCount} </h1>
      <Comment data={commentsData[0]} />
    </div>
  );
};

export default CommentsContainer;
