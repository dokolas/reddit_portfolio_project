import axios from "axios";
import { searchPostUrl } from "../api";

export const searchPosts = (param) => async (dispatch) => {
  const searchData = await axios.get(searchPostUrl(param));
  dispatch({
    type: "FETCH_SEARCH_POSTS",
    payload: {
      searchedPosts: searchData.data.data.children,
    },
  });
};
