import React, { useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import { loadSubreddit } from "../actions/subredditAction";
//components
import SubredditList from "../components/subredditList";
import Posts from "../components/initialPosts";
import SpecificPosts from "../components/chosenPosts";
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

  return (
    <div>
      <h1>Initial Posts</h1>
      {chosenPosts.map((post) => (
        <Posts title={post.data.title} />
      ))}
      <h1>Posts</h1>
      {initialposts.map((post) => (
        <Posts
          title={post.data.title}
          ups={post.data.ups}
          thumb={post.data.thumbnail}
          key={post.data.id}
        />
      ))}

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
