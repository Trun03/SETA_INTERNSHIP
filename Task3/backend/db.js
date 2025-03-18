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
