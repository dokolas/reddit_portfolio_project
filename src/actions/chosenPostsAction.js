import axios from "axios";
import { chosenPostsUrl, commentPostUrl } from "../api";

export const loadChosenPosts = (option) => async (dispatch) => {
  const chosenData = await axios.get(chosenPostsUrl(option));
  dispatch({
    type: "FETCH_DATA_SPECIFIC_OPTION",
    payload: {
      chosenPosts: chosenData.data.data.children,
    },
  });
};

export const commentChosenPosts = (category, id) => async (dispatch) => {
  const commentData = await axios.get(commentPostUrl(category, id));
  dispatch({
    type: "FETCH_DATA_COMMENTS",
    payload: {
      commentPosts: commentData.data.data,
    },
  });
};
