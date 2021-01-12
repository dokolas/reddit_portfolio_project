import React from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import { commentChosenPosts } from "../actions/commentAction";
import Comments from "./Comments";
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

const Posts = ({ title, ups, id, subreddit, thumb, author, unixTime }) => {
  const dispatch = useDispatch();

  const loadCommentPostsHandler = () => {
    dispatch(commentChosenPosts(subreddit, id));
  };

  const { commentPosts } = useSelector((state) => state.comments);

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
        <div>/r/{subreddit}</div>
        <div>/u/{author}</div>
        <div>{`${date}`}</div>
      </TopBar>
      <Break></Break>
      <TitleImg>
        <h3 onClick={loadCommentPostsHandler}>{title}</h3>
        {imgSource}
      </TitleImg>
    </PostStyle>
  );
};

export default Posts;

const PostStyle = styled(motion.div)`
  display: flex;
  padding: 0.5rem 0.5rem;
  flex-wrap: wrap;
  box-shadow: 0px 5px 30px rgba(255, 0, 0, 0.2);
  margin: 1rem 0;
`;

const TopBar = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-grow: 1;
`;

const TitleImg = styled(motion.div)`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  img {
    float: right;
    display: block;
    padding: 1rem 1rem;
  }
`;

const Break = styled(motion.div)`
  height: 0;
  flex-basis: 100%;
`;
