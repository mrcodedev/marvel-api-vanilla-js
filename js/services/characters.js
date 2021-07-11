import myFetch from "../utils/myFetch.js";

export const getComics = () => {
  return myFetch("comics");
};
