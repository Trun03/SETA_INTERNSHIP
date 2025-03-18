Fullstack CRUD Application
This is a fullstack CRUD application built with React (Frontend) and Node.js + Express (Backend). The application allows users to create, read, update, and delete posts. The backend uses PostgreSQL as the database.

Techonolpgies used:

-Front-End: 
+React 
+Redux
+Redux Thunk
+Material-UI
+Axios

-Back-End:
+Node.js
+Express
-Database:
+PostgreSQL

Steps to setup:
 -Step 1: PREPARATION
 + Node.js (latest versioni is the best option)
 + npm 
 + PostgreSQL (Latest version)
 + git clone git@github.com:Trun03/SETA_INTERNSHIP.git

 -Step 2: SET UP BACKEND
 + cd fullstack-crud-app/backend
 + npm install

 -Step 3: CREATE DATABASE
 + Create a database named fullstack_app: CREATE DATABASE fullstack_app;
 + Create "posts" table: 
 
  CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    body TEXT NOT NULL
);
+ Create file db.js and add this code in to connect with the databse:

    const { Pool } = require("pg");
    require("dotenv").config();

    const pool = new Pool({
        user: "postgres",
        host: "localhost",
        database: "fullstack_app",
        password: "1234",
        port: 5432
    });

    module.exports = pool;

+ "postRoutes.js":
  This file defines the API endpoints for the application.It handles HTTP requests (GET, POST, PUT, DELETE) and calls the corresponding 
  functions from postModel.js to interact with the database.

  Endpoints:
    GET /posts: Fetch all posts.
    POST /posts: Create a new post.
    PUT /posts/:id: Update a post by ID.
    DELETE /posts/:id: Delete a post by ID.
    
+ "postModel.js":
  This file contains the database query functions for interacting with the PostgreSQL database.

  Functions:
    getPosts: Fetch all posts from the posts table.
    createPost: Insert a new post into the posts table.
    updatePost: Update an existing post in the posts table by ID.
    deletePost: Delete a post from the posts table by ID.

 -Step 4: SET UO FRONT-END
 + npx create-react-app
 + Install react-redux: npm install react-redux
 + Install redux-thunk: npm install redux-thunk
 + Install @reduxjs/toolkit: npm install @reduxjs/toolkit
 + Install axios: npm install axios
 + Define actions to call Api in "redux/actions.js":
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

+ Manage state of posts in "redux/reducer.js":
    const initialState = { posts: [] };

    const postReducer = (state = initialState, action) => {
        switch (action.type) {
            case "FETCH_POSTS":
                return { ...state, posts: action.payload };
            case "CREATE_POST":
                return { ...state, posts: [...state.posts, action.payload] };
            case "UPDATE_POST":
                return {
                    ...state,
                    posts: state.posts.map((post) =>
                        post.id === action.payload.id ? action.payload : post
                    ),
                };
            case "DELETE_POST":
                return {
                    ...state,
                    posts: state.posts.filter((post) => post.id !== action.payload),
                };
            default:
                return state;
        }
    };

    export default postReducer;

+ Redux configuaratioin and connect with React.js app in "index.js":
    import React from "react";
    import ReactDOM from "react-dom/client";
    import { Provider } from "react-redux";
    import { configureStore } from "@reduxjs/toolkit";
    import thunk from "redux-thunk";
    import reducer from "./redux/reducer";
    import App from "./App";

    const store = configureStore({
        reducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    });

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
        <Provider store={store}>
            <App />
        </Provider>
    );

+ Create "Components" folder and add these files"
 "PostList.js" to demanstate all the posts with Add, Edit and Delete data.
 "PostForm.js" to edit the data

+ Run the Front-End: npm start 
+ Access the URL to run the system: http://localhost:3000 
