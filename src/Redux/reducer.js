import { POST_POPUP, ADD_USERDETAIL, GET_ALL_POSTS } from "./action";

export const reducer = (store, { type, payload }) => {
  switch (type) {
    case POST_POPUP:
      return { ...store, ispopup: payload };
    case ADD_USERDETAIL:
      return { ...store, userdetails: payload };
    case GET_ALL_POSTS:
      return { ...store, allPosts: payload };

    default:
      return store;
  }
};
