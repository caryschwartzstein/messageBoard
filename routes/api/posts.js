const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");


const {Post} = require("../../models/Post")

router.post("/create", (req, res) => {
    console.log("USER Here", req.body.user)
    const newPost = new Post({
        user: req.body.user,
        content: req.body.content,
        name: req.body.name
    });

    newPost
        .save()
        .then(() => res.json(newPost)) 
        .catch(err => console.log(err));
})

router.get("/all", (req, res) => {
    console.log("fetching posts");
    Post
        .find()
        .then(posts => res.send(posts.reverse()))
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving posts"
            })
        })
})

router.get("/asdf", (req, res) => {
    res.send({"asdf": true})
})

module.exports = router;