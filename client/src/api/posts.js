import axios from 'axios';

export async function fetchAllPosts() {
    return axios.get("/api/posts/all")
        .then(res => res.data)
        .catch(err => console.log(err))
}


export async function newPost(content, name, user_id) {

    var newPost = {
        content: content,
        user: user_id,
        name
    }
    return axios.post("/api/posts/create", newPost)
        .then(res => {
            console.log("POST SUCCESS")
            return res.data
        })
        .catch(err => console.log(err))
}