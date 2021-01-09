import axios from "axios";
import { subredditUrl, initialPostsUrl } from "../api";

export const loadSubreddit = () => async (dispatch) => {
  const subredditData = await axios.get(subredditUrl());
  const initialPostData = await axios.get(initialPostsUrl());
  dispatch({
    type: "FETCH_DATA",
    payload: {
      subreddit: subredditData.data.data.children,
      posts: initialPostData.data.data.children,
    },
  });
};
