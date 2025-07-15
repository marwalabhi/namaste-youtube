import React, { useEffect, useState } from "react";
import Comment from "./Comment/Comment";
import { YT_VIDEO_COMMENTS } from "../../../utils/constants";

const mockData = [
  {
    name: "Akshay Saini",
    text: "राधे राधे",
    replies: [
      {
        name: "Abhishek Marwal",
        text: "राधे राधे",
        replies: [],
      },
    ],
  },
  {
    name: "Akshay Saini",
    text: "राधे राधे",
    replies: [
      {
        name: "Abhishek Marwal",
        text: "राधे राधे",
        replies: [],
      },
      {
        name: "Harsh Kumawat",
        text: "राधे राधे",
        replies: [
          {
            name: "Lucky Kumawat",
            text: "राधे राधे",
            replies: [
              {
                name: "Rajesh Kumawat",
                text: "राधे राधे",
                replies: [
                  {
                    name: "Kuldeep Saini",
                    text: "राधे राधे",
                    replies: [],
                  },
                  {
                    name: "Vivek Lodia",
                    text: "राधे राधे",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Akshay Saini",
    text: "राधे राधे",
    replies: [{}],
  },
  {
    name: "Akshay Saini",
    text: "राधे राधे",
    replies: [{}],
  },
  {
    name: "Akshay Saini",
    text: "राधे राधे",
    replies: [{}],
  },
];

const CommentsList = ({ comments, realData }) => {
  return comments.map((comment, i) => (
    <Comment key={i} data={comment} r={realData} />
  ));
};

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
  const { commentCount, videoId } = props;
  const [commentsData, setCommentsData] = useState(null);
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
  console.log(commentsData);
  // const { snippet } = commentsData;
  // console.log(snippet);

  return (
    <div className="font-roboto m-5 p-2">
      <h1 className="text-2xl font-bold">Comments: {commentCount} </h1>
      <CommentsList comments={mockData} realData={commentsData} />
    </div>
  );
};

export default CommentsContainer;
