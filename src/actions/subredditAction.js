import axios from "axios";
import { subredditUrl } from "../api";

export const loadSubreddit = () => async (dispatch) => {
  const subredditData = await axios.get(subredditUrl({}));
  dispatch({
    type: "FETCH_SUBREDDIT",
    payload: {
      subreddit: subredditData.data.data.children,
    },
  });
};
