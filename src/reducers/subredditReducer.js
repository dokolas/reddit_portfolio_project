//setting initial state
const initState = {
  categories: [],
};

const subredditReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_SUBREDDIT":
      return {
        ...state,
        categories: action.payload.subreddit,
      };
    default:
      return { ...state };
  }
};

export default subredditReducer;
