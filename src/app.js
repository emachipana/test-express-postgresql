const express = require("express");
const pool = require("./db/index.js");

const app = express();

app.set("json spaces", 4);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", async (_req, res) => {
    const result = await pool.query("SELECT * FROM tasks");

    res.send(result.rows);
});

module.exports = app;
