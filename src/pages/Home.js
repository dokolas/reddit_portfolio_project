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
import { motion } from "framer-motion";

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadSubreddit());
  }, [dispatch]);

  //GET THE DATA BACK FROM THE ABOVE FETCH/STATE
  const { categories, initialposts } = useSelector((state) => state.subreddit);
  const { chosenPosts } = useSelector((state) => state.chosenPosts);
  const { commentPosts, mainPost } = useSelector((state) => state.comments);
  const { searchedPosts } = useSelector((state) => state.searchedPosts);

  return (
    <MainContainer>
      <CategoryList>
        <h3>Popular Subreddits</h3>
        {categories.map((category) => (
          <SubredditList
            category={category.data.display_name_prefixed}
            key={category.data.id}
          />
        ))}
      </CategoryList>
      {commentPosts.length ? (
        <Comments />
      ) : (
        "" //this line item renders the '' with ? on line 40.  so if the length is 0, render ''
      )}
      {chosenPosts.length ? (
        <PostList>
          {chosenPosts.map((post) => (
            <div>
              <Posts
                title={post.data.title}
                ups={post.data.ups}
                thumb={post.data.thumbnail}
                key={post.data.id}
                id={post.data.id}
                subreddit={post.data.subreddit}
                author={post.data.author}
                unixTime={post.data.created}
              />
            </div>
          ))}
        </PostList>
      ) : (
        "" //this line item renders the '' with ? on line 40.  so if the length is 0, render ''
      )}
      {initialposts.length ? (
        <PostList>
          {initialposts.map((post) => (
            <Posts
              title={post.data.title}
              ups={post.data.ups}
              thumb={post.data.thumbnail}
              key={post.data.id}
              id={post.data.id}
              subreddit={post.data.subreddit}
              author={post.data.author}
              unixTime={post.data.created}
            />
          ))}
        </PostList>
      ) : (
        "" //this line item renders the '' with ? on line 40.  so if the length is 0, render ''
      )}

      {searchedPosts.length ? (
        <PostList>
          {searchedPosts.map((post) => (
            <Posts
              title={post.data.title}
              ups={post.data.ups}
              thumb={post.data.thumbnail}
              key={post.data.id}
              id={post.data.id}
              subreddit={post.data.subreddit}
              author={post.data.author}
              unixTime={post.data.created}
            />
          ))}
        </PostList>
      ) : (
        "" //this line item renders the '' with ? on line 40.  so if the length is 0, render ''
      )}
    </MainContainer>
  );
};
const MainContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 5px;
`;

const PostList = styled(motion.div)`
  grid-column: 2 / span 3;
`;

const CategoryList = styled(motion.div)`
  grid-column: 1;
  h3 {
    margin-left: 0.5rem;
    padding-left: 0.5rem;
    border-left: 3px red solid;
    margin-bottom: 1rem;
  }
`;

const CommentsList = styled(motion.div)`
  background: black;
  z-index: 5;
  position: relative;
`;
