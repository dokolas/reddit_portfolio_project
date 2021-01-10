import React from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import { commentChosenPosts } from "../actions/commentAction";
import Comments from "./Comments";

const Posts = ({ title, ups, id, subreddit }) => {
  const dispatch = useDispatch();

  const loadCommentPostsHandler = () => {
    dispatch(commentChosenPosts(subreddit, id));
  };

  const { commentPosts } = useSelector((state) => state.comments);

  return (
    <div className="subredditList">
      <h3 onClick={loadCommentPostsHandler}>{title}</h3>
    </div>
  );
};

export default Posts;
