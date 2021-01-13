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
    document.body.style.overflow = "auto";
  };

  const toUsefulDate = (utcTime) => {
    let date = new Date(utcTime * 1000).toLocaleDateString("en-us");
    return date;
  };

  let imgSource;
  if (mainPost.thumbnail.startsWith("http") && mainPost.post_hint === "image") {
    imgSource = <img src={mainPost.url} alt={mainPost.id} />;
  } else if (
    mainPost.thumbnail.startsWith("http") &&
    mainPost.post_hint === "link"
  ) {
    imgSource = (
      <img
        src={mainPost.thumbnail}
        alt={mainPost.id}
        width="100px"
        className="linkThumb"
      />
    );
  } else {
    imgSource = "";
  }

  document.body.style.overflow = "hidden";

  return (
    <CommentBox>
      <Detail>
        <MainPostStyle>
          <button onClick={clearCommentsHandler}>X</button>
          <TopBar>
            <div>{mainPost.ups}</div>
            <div>{mainPost.subreddit_name_prefixed}</div>
            <div>/u/{mainPost.author}</div>
            <div>{toUsefulDate(`${mainPost.created}`)}</div>
          </TopBar>
          <PostStyle>
            <h3>{mainPost.title}</h3>
            {imgSource}
          </PostStyle>
        </MainPostStyle>
        {commentPosts.map((comment) => (
          <CommentsStyle>
            <TopBarComment>
              <span>{comment.data.ups}</span>
              <span>/u/{comment.data.author}</span>
              <span>{toUsefulDate(`${comment.data.created}`)}</span>
            </TopBarComment>
            <p>{comment.data.body}</p>
          </CommentsStyle>
        ))}
      </Detail>
    </CommentBox>
  );
};

export default Comments;

const MainPostStyle = styled(motion.div)`
  display: flex;
  padding: 0.5rem 0.5rem;
  flex-wrap: wrap;
  border-left: red 3px solid;
  margin: 1rem 0;
`;

const PostStyle = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  padding: 0rem 1rem;
  align-content: center;
  width: 100%;
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
    background-color: white;
  }
  &::-webkit-scrollbar-track {
    background-color: red;
  }
  z-index: 5;
`;

const TopBar = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-grow: 1;
  font-size: 1rem;
  color: gray;
`;

const TopBarComment = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-grow: 1;
  font-size: 0.85rem;
  color: gray;
  span {
    padding-right: 2rem;
  }
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
  p {
    color: black;
    font-size: 1rem;
  }
`;
