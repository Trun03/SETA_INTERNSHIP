import axios from "axios";

const API_URL = "http://localhost:5000/api/posts";

export const fetchPosts = () => async (dispatch) => {
    const res = await axios.get(API_URL);
    dispatch({ type: "FETCH_POSTS", payload: res.data });
};

export const createPost = (post) => async (dispatch) => {
    const res = await axios.post(API_URL, post);
    dispatch({ type: "CREATE_POST", payload: res.data });
};

export const updatePost = (post) => async (dispatch) => {
    const res = await axios.put(`${API_URL}/${post.id}`, post);
    dispatch({ type: "UPDATE_POST", payload: res.data });
};

export const deletePost = (id) => async (dispatch) => {
    await axios.delete(`${API_URL}/${id}`);
    dispatch({ type: "DELETE_POST", payload: id });
};