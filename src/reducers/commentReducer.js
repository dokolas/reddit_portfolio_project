//ALWAYS MAKE INIT STATE

const initialState = {
  commentPosts: [],
}; //need empty arrays to not cause .map errors

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_COMMENTS":
      return {
        ...state,
        commentPosts: action.payload.commentPosts,
      };
    case "CLEAR_COMMENTS":
      return {
        ...state,
        commentPosts: [], //this clears it all
      };
    default:
      return { ...state };
  }
};

export default commentReducer;
