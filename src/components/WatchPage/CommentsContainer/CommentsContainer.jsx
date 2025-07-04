import React from "react";

const CommentsContainer = () => {
  const commentsData = [{}];

  const Comment = ({ data }) => {
    return <div>Comment</div>;
  };

  return (
    <div className="font-roboto m-5 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <Comment data={commentsData[0]} />
    </div>
  );
};

export default CommentsContainer;
