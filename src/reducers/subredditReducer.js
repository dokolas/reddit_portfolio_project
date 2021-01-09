//setting initial state
const initState = {
  categories: [],
  posts: [],
};

const subredditReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        categories: action.payload.subreddit,
        posts: action.payload.posts,
      };
    default:
      return { ...state };
  }
};

export default subredditReducer;
