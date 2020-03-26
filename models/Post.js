const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

})

module.exports = {
    Post: mongoose.model("posts", PostSchema),
    PostSchema
}