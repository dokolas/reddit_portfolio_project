//ALWAYS MAKE INIT STATE

const initialState = {
  searchedPosts: [],
}; //need empty arrays to not cause .map errors

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_SEARCH_POSTS":
      return {
        ...state,
        searchedPosts: action.payload.searchedPosts,
      };
    default:
      return { ...state };
  }
};

export default searchReducer;
