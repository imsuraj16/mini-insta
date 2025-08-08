import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  caption : null,
  userPost: null,
  posts: null,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    loadCaption: (state, action) => {
      state.caption = action.payload;
    },
    loadUserPosts: (state, action) => {
      state.userPost = action.payload;
    },
    loadAllPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export default postSlice.reducer;
export const { loadUserPosts, loadCaption, loadAllPosts } = postSlice.actions;
