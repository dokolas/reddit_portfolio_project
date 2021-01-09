//ALWAYS MAKE INIT STATE

const initialState = {
  chosenPosts: [],
}; //need empty arrays to not cause .map errors

const chosenPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_SPECIFIC_OPTION":
      return {
        ...state,
        chosenPosts: action.payload.chosenPosts, //COMES FROM ACTION
      };
    default:
      return { ...state };
  }
};

export default chosenPostReducer;
