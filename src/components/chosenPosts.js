import React from "react";
//redux
import { useDispatch } from "react-redux";
import { loadSubreddit } from "../actions/subredditAction";

const SpecificPosts = () => {
  return (
    <div className="subredditList">
      <h3>This is my post title</h3>
      <p>First lines of post</p>
    </div>
  );
};

export default SpecificPosts;
