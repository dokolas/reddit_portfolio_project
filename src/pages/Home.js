import React, { useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import { loadSubreddit } from "../actions/subredditAction";
//components
import SubredditList from "../components/subredditList";
import Posts from "../components/Posts";
import SpecificPosts from "../components/chosenPosts";
import Comments from "../components/Comments";
//styles and motion
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
//react router
import { useLocation } from "react-router-dom";

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadSubreddit());
  }, [dispatch]);

  //GET THE DATA BACK FROM THE ABOVE FETCH/STATE
  const { categories, initialposts } = useSelector((state) => state.subreddit);
  const { chosenPosts } = useSelector((state) => state.chosenPosts);
  const { commentPosts, mainPost } = useSelector((state) => state.comments);

  const clearCommentsHandler = () => {
    dispatch({ type: "CLEAR_COMMENTS" }); //CLEARS INITIAL POSTS
  };

  return (
    <div>
      <h1 onClick={clearCommentsHandler}>Clear Comments!</h1>
      {mainPost.map((main) => (
        <div>
          <p>Main Title: {main.data.title}</p>
          {commentPosts.map((comment) => (
            <div>
              <Comments body={comment.data.body} />
            </div>
          ))}
        </div>
      ))}
      {chosenPosts.length ? (
        <div className="chosenPosts">
          <h1>Chosen Posts</h1>
          {chosenPosts.map((post) => (
            <div>
              <Posts
                title={post.data.title}
                ups={post.data.ups}
                thumb={post.data.thumbnail}
                key={post.data.id}
                id={post.data.id}
                subreddit={post.data.subreddit}
              />
            </div>
          ))}
        </div>
      ) : (
        "" //this line item renders the '' with ? on line 40.  so if the length is 0, render ''
      )}
      {initialposts.length ? (
        <div className="initialpost">
          <h1>Posts</h1>
          {initialposts.map((post) => (
            <Posts
              title={post.data.title}
              ups={post.data.ups}
              thumb={post.data.thumbnail}
              key={post.data.id}
              id={post.data.id}
              subreddit={post.data.subreddit}
            />
          ))}
        </div>
      ) : (
        "" //this line item renders the '' with ? on line 40.  so if the length is 0, render ''
      )}
      <h1>Subreddit Categories</h1>
      <div className="category-list">
        {categories.map((category) => (
          <SubredditList
            category={category.data.display_name_prefixed}
            key={category.data.id}
          />
        ))}
      </div>
    </div>
  );
};
