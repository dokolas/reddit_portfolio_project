import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
//redux
import { useDispatch } from "react-redux";
import { loadChosenPosts } from "../actions/chosenPostsAction";

const SubredditList = ({ category, displayName, imageSrc }) => {
  const dispatch = useDispatch();

  const loadChosenPostsHandler = () => {
    dispatch(loadChosenPosts(category));
    dispatch({ type: "CLEAR_INITIAL_POSTS" }); //CLEARS INITIAL POSTS
  };

  return (
    <SubRedList onClick={loadChosenPostsHandler}>
      <p>{category}</p>
    </SubRedList>
  );
};

export default SubredditList;

const SubRedList = styled(motion.div)`
  padding-left: 0.5rem;
  border-left: 1px red solid;
  margin-left: 0.5rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
`;
