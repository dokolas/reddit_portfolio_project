//setting initial state
const initState = {
  subreddit: [],
};

const subredditReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_SUBREDDIT":
      return {
        ...state,
        subreddit: action.payload.subreddit,
      };
    default:
      return { ...state };
  }
};

export default subredditReducer;
