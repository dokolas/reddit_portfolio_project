import axios from "axios";
import { commentPostUrl } from "../api";

export const commentChosenPosts = (category, id) => async (dispatch) => {
  const commentData = await axios.get(commentPostUrl(category, id));
  dispatch({
    type: "FETCH_DATA_COMMENTS",
    payload: {
      commentPosts: commentData.data[1].data.children.slice(0, 24),
      mainPost: commentData.data[0].data.children,
    },
  });
};
