const pool = require("./db");

const getPosts = async () => {
    const result = await pool.query("SELECT * FROM posts");
    return result.rows;
};

const createPost = async (title, body) => {
    const result = await pool.query(
        "INSERT INTO posts (title, body) VALUES ($1, $2) RETURNING *",
        [title, body]
    );
    return result.rows[0];
};

const updatePost = async (id, title, body) => {
    const result = await pool.query(
        "UPDATE posts SET title = $1, body = $2 WHERE id = $3 RETURNING *",
        [title, body, id]
    );
    return result.rows[0];
};

const deletePost = async (id) => {
    await pool.query("DELETE FROM posts WHERE id = $1", [id]);
};

module.exports = { getPosts, createPost, updatePost, deletePost };
