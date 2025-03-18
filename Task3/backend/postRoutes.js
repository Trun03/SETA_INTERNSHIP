const express = require("express");
const { getPosts, createPost, updatePost, deletePost } = require("./postModel");

const router = express.Router();

router.get("/posts", async (req, res) => {
    const posts = await getPosts();
    res.json(posts);
});

router.post("/posts", async (req, res) => {
    const { title, body } = req.body;
    const newPost = await createPost(title, body);
    res.json(newPost);
});

router.put("/posts/:id", async (req, res) => {
    const { title, body } = req.body;
    const updatedPost = await updatePost(req.params.id, title, body);
    res.json(updatedPost);
});

router.delete("/posts/:id", async (req, res) => {
    await deletePost(req.params.id);
    res.json({ message: "Post deleted" });
});

module.exports = router;
