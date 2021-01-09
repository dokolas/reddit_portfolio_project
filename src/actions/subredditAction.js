import axios from "axios";
import { subredditUrl, initialPostsUrl } from "../api";

export const loadSubreddit = () => async (dispatch) => {
  const subredditData = await axios.get(subredditUrl());
  const initialPostData = await axios.get(initialPostsUrl());
  dispatch({
    type: "FETCH_INITIAL_DATA",
    payload: {
      subreddit: subredditData.data.data.children,
      initialposts: initialPostData.data.data.children,
    },
  });
};
