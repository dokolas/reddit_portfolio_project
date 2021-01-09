import React from "react";
//redux
import { useDispatch } from "react-redux";
import { loadSubreddit } from "../actions/subredditAction";

const Posts = ({ title, ups, thumb }) => {
  return (
    <div className="subredditList">
      <h3>
        {ups} - {title}
      </h3>
      <p>First lines of post</p>
    </div>
  );
};

export default Posts;
