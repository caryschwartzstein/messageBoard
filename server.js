const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require("passport");
const path = require("path")

const posts = require('./routes/api/posts')
const users = require('./routes/api/users')
var env = process.env.NODE_ENV || 'dev';

const app = express();

app.use(
    bodyParser.urlencoded({
        extended: false
    })
)
app.use(bodyParser.json())

// db = "mongodb://localhost:27017/messageBoardDB"
// If deployed, use the deployed database. Otherwise use the local database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/messageBoardDB";
// mongoose.Promise = Promise;

mongoose
    .connect(
        MONGODB_URI || "mongodb://localhost:27017/messageBoardDB", 
        {useNewUrlParser: true,
        useUnifiedTopology: true}
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("build"));
//     app.get("*", (req, res) => {
//             res.sendFile(path.resolve(__dirname,  "build", "index.html"));
//         });
//     }

app.use(passport.initialize())
require("./config/passport")(passport)

// Routes
app.use("/api/users", users);
app.use("/api/posts", posts);

const port = process.env.Port || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port}`))

//nodemon not properly restarting
if (env == "dev") {
    var nodemon = require('nodemon');
    process
    // Handle normal exits
    .on('exit', (code) => {
        nodemon.emit('quit');
        process.exit(code);
    })

    // Handle CTRL+C
    .on('SIGINT', () => {
        nodemon.emit('quit');
        process.exit(0);
    });
}


