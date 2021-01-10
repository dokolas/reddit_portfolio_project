import React from "react";
//redux
import { useDispatch } from "react-redux";
import { loadSubreddit } from "../actions/subredditAction";

const Comments = ({ body }) => {
  return (
    <div className="subredditList">
      <h3>{body}</h3>
    </div>
  );
};

export default Comments;
