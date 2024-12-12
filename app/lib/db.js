import crypto from "node:crypto";

let posts = {};

export function get(postId){
    return posts[postId]
}

export function getAll(){
    return posts
}

export function create(postData){
    const postId = crypto.randomBytes(4).toString("hex");
    posts[postId] = postData;
    return postId;
}

export function clear() {
  posts = {};
}