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
        <button onClick={clearCommentsHandler}>X</button>
        <PostStyle>
          <h3>{mainPost.title}</h3>
        </PostStyle>
        {commentPosts.map((comment) => (
          <CommentsStyle>
            <p>{comment.data.body}</p>
          </CommentsStyle>
        ))}
      </Detail>
    </CommentBox>
  );
};

export default Comments;

const PostStyle = styled(motion.div)`
  display: flex;
  padding: 0.5rem 0.5rem;
  flex-wrap: wrap;
  border-left: red 3px solid;
  margin: 1rem 0;
`;

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
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 0.5rem;
    cursor: pointer;
    background: red;
    color: white;
    position: absolute;
    right: 0;
    top: 0;
  }
`;

const CommentsStyle = styled(motion.div)`
  padding: 1rem 1rem;
  border-left: red 1px solid;
  margin: 1rem 0;
`;
