//setting initial state
const initState = {
  categories: [],
  initialposts: [],
};

const subredditReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_INITIAL_DATA":
      return {
        ...state,
        categories: action.payload.subreddit,
        initialposts: action.payload.initialposts,
      };
    case "CLEAR_INITIAL_POSTS":
      return {
        ...state,
        initialposts: [], //this clears it all
      };
    default:
      return { ...state };
  }
};

export default subredditReducer;
