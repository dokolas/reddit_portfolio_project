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
    default:
      return { ...state };
  }
};

export default subredditReducer;
