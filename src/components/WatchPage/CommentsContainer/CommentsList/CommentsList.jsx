import Comment from "../Comment/Comment";

const CommentsList = ({ comments }) => {
  return comments?.map((eachComment, i) => (
    <Comment key={eachComment.id} data={eachComment} />
  ));
};

export default CommentsList;
