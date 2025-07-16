import React, { useEffect, useState } from "react";
import { YT_VIDEO_COMMENTS } from "../../../utils/constants";
import CommentsList from "./CommentsList/CommentsList";

// const CommentsList = ({ comments }) => (
//   <div>
//     {comments.map((comment, index) => (
//       <div key={index}>
//         <Comment data={comment} />
//         {comment.replies && comment.replies.length > 0 && (
//           <div className="ml-5 border-l border-l-black pl-5">
//             <CommentsList comments={comment.replies} />
//           </div>
//         )}
//       </div>
//     ))}
//   </div>
// );

const CommentsContainer = (props) => {
  const [commentsData, setCommentsData] = useState(null);

  const { commentCount, videoId } = props;
  const [token, setToken] = useState("");

  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    const apikey = import.meta.env.VITE_API_KEY;
    const res = await fetch(YT_VIDEO_COMMENTS + videoId + "&key=" + apikey);
    const json = await res.json();
    setCommentsData(json.items);
  };

  return (
    <div className="font-roboto m-5 p-2">
      <h1 className="text-[21px] font-bold">
        {Number(commentCount).toLocaleString() + " "}Comments
      </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
