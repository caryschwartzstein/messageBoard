const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require("passport");

const posts = require('./routes/api/posts')
const users = require('./routes/api/users')

const app = express();

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

app.use(passport.initialize())
require("./config/passport")(passport)

// Routes
app.use("/api/users", users);
app.use("/api/posts", posts);

const port = process.env.Port || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port}`))