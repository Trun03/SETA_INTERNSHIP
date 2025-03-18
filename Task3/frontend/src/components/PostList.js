import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, deletePost } from "../redux/actions";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    Typography,
} from "@mui/material";

const PostList = ({ setEditingPost }) => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    return (
        <div style={{ margin: "20px" }}>
            <Typography variant="h4" gutterBottom>
                Danh sách bài viết
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><strong>ID</strong></TableCell>
                            <TableCell><strong>Tiêu đề</strong></TableCell>
                            <TableCell><strong>Nội dung</strong></TableCell>
                            <TableCell><strong>Hành động</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {posts.map((post) => (
                            <TableRow key={post.id}>
                                <TableCell>{post.id}</TableCell>
                                <TableCell>{post.title}</TableCell>
                                <TableCell>{post.body}</TableCell>
                                <TableCell>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="small"
                                        onClick={() => setEditingPost(post)}
                                        style={{ marginRight: "10px" }}
                                    >
                                        Sửa
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        size="small"
                                        onClick={() => dispatch(deletePost(post.id))}
                                    >
                                        Xóa
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default PostList;