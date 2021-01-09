import React from "react";
//redux
import { useDispatch } from "react-redux";
import { loadChosenPosts } from "../actions/chosenPostsAction";

const SubredditList = ({ category, displayName, imageSrc }) => {
  const dispatch = useDispatch();

  const loadChosenPostsHandler = () => {
    dispatch(loadChosenPosts(category));
  };

  return (
    <div className="subredditList" onClick={loadChosenPostsHandler}>
      <p>{category}</p>
    </div>
  );
};

export default SubredditList;
