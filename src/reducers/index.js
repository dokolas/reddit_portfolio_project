import { combineReducers } from "redux";
import subredditReducer from "./subredditReducer";
import chosenPostReducer from "./chosenPostsReducer";
import commentReducer from "./commentReducer";
import searchReducer from "./searchPostsReducer";

const rootReducer = combineReducers({
  subreddit: subredditReducer,
  chosenPosts: chosenPostReducer,
  comments: commentReducer,
  searchedPosts: searchReducer,
});

export default rootReducer;
