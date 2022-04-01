export const POST_POPUP = "POST_POPUP";
export const ADD_USERDETAIL = "ADD_USERDETAIL";

export const GET_ALL_POSTS = "GET_ALL_POSTS";

export const post_popup = (payload) => ({ type: POST_POPUP, payload });
export const add_userdetail = (payload) => ({ type: ADD_USERDETAIL, payload });
export const getAllPosts = (payload) => ({ type: GET_ALL_POSTS, payload });
