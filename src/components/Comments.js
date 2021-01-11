import React from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import { loadSubreddit } from "../actions/subredditAction";
import styled from "styled-components";
import { motion } from "framer-motion";

const Comments = () => {
  const { commentPosts, mainPost } = useSelector((state) => state.comments);
  const dispatch = useDispatch();
  const clearCommentsHandler = () => {
    dispatch({ type: "CLEAR_COMMENTS" }); //CLEARS INITIAL POSTS
  };

  return (
    <CommentBox>
      <Detail>
        <h1 onClick={clearCommentsHandler}>Clear Comments!</h1>
        <h1>Main Title: {mainPost.title}</h1>
        {commentPosts.map((comment) => (
          <div>
            <p>{comment.data.body}</p>
          </div>
        ))}
      </Detail>
    </CommentBox>
  );
};

export default Comments;

const CommentBox = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: pink;
  }
  &::-webkit-scrollbar-track {
    background-color: white;
  }
  z-index: 5;
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
  z-index: 10;
  h3 {
    background: white;
    color: black;
  }
`;
