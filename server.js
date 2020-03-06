const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express();

const posts = require('./routes/api/posts')

app.use(
    bodyParser.urlencoded({
        extended: false
    })
)
app.use(bodyParser.json())

db = "mongodb://localhost:27017/messageBoardDB"

mongoose
    .connect(
        db, 
        {useNewUrlParser: true}
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

// Routes
app.use("/api/posts", posts)

const port = process.env.Port || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port}`))