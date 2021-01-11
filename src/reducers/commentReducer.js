//ALWAYS MAKE INIT STATE

const initialState = {
  commentPosts: [],
  mainPost: { title: [] },
}; //need empty arrays to not cause .map errors

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_COMMENTS":
      return {
        ...state,
        commentPosts: action.payload.commentPosts,
        mainPost: action.payload.mainPost,
      };
    case "CLEAR_COMMENTS":
      return {
        ...state,
        commentPosts: [], //this clears it all
        mainPost: [],
      };
    default:
      return { ...state };
  }
};

export default commentReducer;
