import React from "react";
//redux
import { useDispatch } from "react-redux";
import { loadSubreddit } from "../actions/subredditAction";

const SubredditList = ({ category, displayName, imageSrc }) => {
  return (
    <div className="subredditList">
      <h3>{category}</h3>
    </div>
  );
};

export default SubredditList;
