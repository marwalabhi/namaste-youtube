import React from "react";
import Comment from "./Comment/Comment";

const commentsData = [
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

const CommentsList = ({ comments }) => {
  return comments.map((comment, i) => <Comment key={i} data={comment} />);
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

const CommentsContainer = ({ commentCount }) => {
  return (
    <div className="font-roboto m-5 p-2">
      <h1 className="text-2xl font-bold">Comments: {commentCount} </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
