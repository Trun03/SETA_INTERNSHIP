import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createPost, updatePost } from "../redux/actions";
import { TextField, Button, Typography, Paper } from "@mui/material";

const PostForm = ({ editingPost, setEditingPost }) => {
    const dispatch = useDispatch();
    const [post, setPost] = useState({ title: "", body: "" });

    useEffect(() => {
        if (editingPost) {
            setPost(editingPost);
        } else {
            setPost({ title: "", body: "" });
        }
    }, [editingPost]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingPost) {
            dispatch(updatePost(post));
        } else {
            dispatch(createPost(post));
        }
        setEditingPost(null);
        setPost({ title: "", body: "" });
    };

    return (
        <Paper style={{ padding: "20px", margin: "20px" }}>
            <Typography variant="h5" gutterBottom>
                {editingPost ? "Chỉnh sửa bài viết" : "Thêm bài viết mới"}
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Tiêu đề"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={post.title}
                    onChange={(e) => setPost({ ...post, title: e.target.value })}
                    required
                />
                <TextField
                    label="Nội dung"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    multiline
                    rows={4}
                    value={post.body}
                    onChange={(e) => setPost({ ...post, body: e.target.value })}
                    required
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    style={{ marginRight: "10px" }}
                >
                    {editingPost ? "Lưu" : "Thêm"}
                </Button>
                {editingPost && (
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => setEditingPost(null)}
                    >
                        Hủy
                    </Button>
                )}
            </form>
        </Paper>
    );
};

export default PostForm;