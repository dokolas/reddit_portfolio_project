import { combineReducers } from "redux";
import subredditReducer from "./subredditReducer";
import chosenPostReducer from "./chosenPostsReducer";
import commentReducer from "./commentReducer";

const rootReducer = combineReducers({
  subreddit: subredditReducer,
  chosenPosts: chosenPostReducer,
  comments: commentReducer,
});

export default rootReducer;
