//SubReddit URL
const baseUrl = "https://www.reddit.com/";

//API URLs
export const subredditUrl = () => `${baseUrl}subreddits.json`;
export const initialPostsUrl = () => `${baseUrl}hot/.json`;
export const chosenPostsUrl = (option) => `${baseUrl}${option}.json`;
export const commentPostUrl = (category, id) =>
  `${baseUrl}r/${category}/comments/${id}.json`;
export const searchPostUrl = (searchParam) =>
  `${baseUrl}search.json?q=${searchParam}`;
