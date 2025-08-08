import axios from "../../api/apiconfig";
import { loadAllPosts, loadCaption, loadUserPosts } from "../reducers/postSlice";

export const createCaption = (formData) => async (dispatch) => {
    try {
        const { data } = await axios.post('/api/post/caption', formData);
        dispatch(loadCaption(data.caption));
    } catch (error) {
        console.error("Error creating caption:", error?.response?.data || error.message);
    }
};

export const createPost = (formData) => async (dispatch) => {
    try {
        const { data } = await axios.post('/api/post', formData);
        dispatch(getAllPosts());
        dispatch(usersPosts());
    } catch (error) {
        console.error("Error creating post:", error?.response?.data || error.message);
    }
};

export const getAllPosts = () => async (dispatch) => {
    try {
        const { data } = await axios.get('/api/post/posts');
        dispatch(loadAllPosts(data.posts));
    } catch (error) {
        console.error("Error fetching all posts:", error?.response?.data || error.message);
    }
};

export const usersPosts = () => async (dispatch) => {
    try {
        const { data } = await axios.get('/api/post/me');
        dispatch(loadUserPosts(data.posts));
    } catch (error) {
        console.error("Error fetching user posts:", error?.response?.data || error.message);
    }
};
