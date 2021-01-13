import React, { useState } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import { commentChosenPosts } from "../actions/commentAction";
import { loadChosenPosts } from "../actions/chosenPostsAction";
import Comments from "./Comments";
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

const Posts = ({ title, ups, id, subreddit, thumb, author, unixTime }) => {
  const dispatch = useDispatch();
  const { commentPosts } = useSelector((state) => state.comments);

  const loadCommentPostsHandler = () => {
    dispatch(commentChosenPosts(subreddit, id));
  };

  const loadChosenPostsHandler = () => {
    dispatch(loadChosenPosts(`/r/${subreddit}`));
    dispatch({ type: "CLEAR_INITIAL_POSTS" }); //CLEARS INITIAL POSTS
  };

  let imgSource;
  if (thumb.startsWith("http")) {
    imgSource = <img src={thumb} alt={id} />;
  } else {
    imgSource = "";
  }

  let date = new Date(unixTime * 1000).toLocaleDateString("en-us");

  return (
    <PostStyle>
      <TopBar>
        <div>{ups}</div>
        <CategoryOnPost onClick={loadChosenPostsHandler}>
          /r/{subreddit}
        </CategoryOnPost>
        <div>/u/{author}</div>
        <div>{`${date}`}</div>
      </TopBar>
      <Break></Break>
      <TitleImg>
        {imgSource}
        <h3 onClick={loadCommentPostsHandler}>{title}</h3>
      </TitleImg>
    </PostStyle>
  );
};

export default Posts;

const PostStyle = styled(motion.div)`
  display: flex;
  padding: 0.5rem 0.5rem;
  flex-wrap: wrap;
  border-left: 3px red solid;
  margin: 1rem 0;
`;

const TopBar = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-grow: 1;
  font-size: 1rem;
  color: gray;
`;

const TitleImg = styled(motion.div)`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  cursor: pointer;
  img {
    float: left;
    display: block;
    padding: 1rem 1rem;
  }
  h3 {
    width: 100%;
  }
`;

const Break = styled(motion.div)`
  height: 0;
  flex-basis: 100%;
`;

const CategoryOnPost = styled(motion.div)`
  cursor: pointer;
`;
