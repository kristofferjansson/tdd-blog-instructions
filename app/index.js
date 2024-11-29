import express from "express";
import bodyparser from "body-parser";

const app = express();
app.use(bodyparser.json())
const port = 3000;

let posts = {}

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/posts/:id", (req, res) => {
    const post = posts[req.params.id]
    res.status(200).send(post);
})

app.post("/posts", (req, res) => {
    const id = "asd123";
    posts[id]=req.body;
    res.status(201).send({id});
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

export default app;