import express from "express";
import bodyparser from "body-parser";
import { create, get, getAll } from "./lib/db.js";


const app = express();
app.use(bodyparser.json())
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/posts", (req, res) => {
    const blogPosts = Object.entries(getAll()).map(([id, postData]) => ({id, ...postData}))
    res.status(200).send(blogPosts)
})

app.get("/posts/:id", (req, res) => {
    const post = get(req.params.id)
    res.status(200).send(post);
})

app.post("/posts", (req, res) => {
    const id = create(req.body);
    res.status(201).send({id});
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

export default app;