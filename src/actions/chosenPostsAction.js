import axios from "axios";
import { chosenPostsUrl } from "../api";

export const loadChosenPosts = (option) => async (dispatch) => {
  const chosenData = await axios.get(chosenPostsUrl(option));
  dispatch({
    type: "FETCH_DATA_SPECIFIC_OPTION",
    payload: {
      chosenPosts: chosenData.data.data.children,
    },
  });
};
