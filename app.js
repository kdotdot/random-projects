// Setup
const express = require('express');
const mongoose = require("mongoose");

const app = express();

//DB Config
const db = require("./config/keys").MongoURI;

// Connect to mongo
mongoose
    .connect(
        db, {
            useNewUrlParser: true
        }
    )
    .then(() => console.log("MongoDB connected..."))
    .catch(err => console.log(err));

//EJS
app.set("view engine", "ejs");

//User model
const Post = require("./models/Post");

//Bodyparser
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

//Routes
app.get("/", (req, res) => {
    Post.find({}, (err, posts) => {
        res.render('index', {
            posts: posts
        })
    });
});

app.post('/addpost', (req, res) => {
    var postData = new Post(req.body);
    postData.save().then(result => {
        res.redirect('/');
    }).catch(err => {
        res.status(400).send("Unable to save data");
    });
});

// Listen
app.listen(3000, () => {
    console.log('Server listing on 3000');
})