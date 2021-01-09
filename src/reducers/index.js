import { combineReducers } from "redux";
import subredditReducer from "./subredditReducer";
import chosenPostReducer from "./chosenPostsReducer";

const rootReducer = combineReducers({
  subreddit: subredditReducer,
  chosenPosts: chosenPostReducer,
});

export default rootReducer;
