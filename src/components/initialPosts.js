import React from "react";
//redux
import { useDispatch } from "react-redux";
import { loadSubreddit } from "../actions/subredditAction";

const Posts = ({ title, ups }) => {
  return (
    <div className="subredditList">
      <h3>{title}</h3>
      <p>First comment of post</p>
    </div>
  );
};

export default Posts;
