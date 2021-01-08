import { combineReducers } from "redux";
import subredditReducer from "./subredditReducer";

const rootReducer = combineReducers({
  subreddit: subredditReducer,
});

export default rootReducer;
