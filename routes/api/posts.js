const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");


const {Post} = require("../../models/Post")

router.post("/create", (req, res) => {
    const newPost = new Post({
        user: "User",
        content: req.body.content,
    });

    newPost
        .save()
        .then(() => res.json(newPost)) 
        .catch(err => console.log(err));
})

router.get("/all", (req, res) => {
    Post
        .find()
        .then(posts => res.send(posts.reverse()))
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving posts"
            })
        })
})

module.exports = router;