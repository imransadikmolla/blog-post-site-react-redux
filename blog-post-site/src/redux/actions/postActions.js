export const NEW_POST = "NEW_POST";
export const REMOVE_POST = "REMOVE_POST";
export const LIKE_POST = "LIKE_POST";
export const UPDATE_POST = "UPDATE_POST";

export const newPost = (payload) => {
  return {
    type: NEW_POST,
    payload: payload,
  };
};
export const likePost = (payload) => {
  return {
    type: LIKE_POST,
    payload: payload,
  };
};
export const removePost = (payload) => {
  return {
    type: REMOVE_POST,
    payload: payload,
  };
};
export const updatePost = (payload) => {
  return {
    type: UPDATE_POST,
    payload: payload,
  };
};
