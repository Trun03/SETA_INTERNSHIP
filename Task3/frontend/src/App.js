import React, { useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import { Container } from "@mui/material";

function App() {
    const [editingPost, setEditingPost] = useState(null);

    return (
        <Container>
            <h1 style={{ textAlign: "center", margin: "20px 0" }}>Quản lý Bài Viết</h1>
            <PostForm editingPost={editingPost} setEditingPost={setEditingPost} />
            <PostList setEditingPost={setEditingPost} />
        </Container>
    );
}

export default App;