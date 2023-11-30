//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require ("lodash");
const mongoose = require("mongoose");

mongoose.set('strictQuery', true);

// mongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.1/sexDB");
mongoose.connect("mongodb://127.0.0.1:27017/blogDB");

const postSchema = {
  title: String,
  content: String,
  number: String,
  mail: String,
  qualification: String,
};

const Post = mongoose.model("Post", postSchema);

const homeStartingContent = "Here are the details of the user.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// let posts = [];

app.get("/", function (req, res) {

  Post.find({}, function(err, posts){
    res.render("home", { 
      StartingContent: homeStartingContent,
      posts: posts 
    });
  });
});

app.get("/compose", function (req, res) {

  res.render("compose");
});

app.post("/compose", function (req, res) {

  const post = new Post( {                            //created a js object
    title: req.body.postTitle ,
    number: req.body.postNumber,
    mail: req.body.postMail,
    qualification: req.body.postQualification,
    content: req.body.postBody,
  });

  console.log(post);

  post.save(function(err){

    if (!err){
  
      res.redirect("/");
  
    }
  
  });

  // post.save();

  // posts.push(post);             //add new elements to array

  //  res.redirect("/");           //redirects to home page
});

app.get("/posts/:postid", function (req, res) {

  const requestedPostId = req.params.postid;
  console.log(requestedPostId);

  // const requestedTitle = _.lowerCase(req.params.postName);

  // posts.forEach (function (post) {

  //   const storedTitle = _.lowerCase(post.title);

    // if (storedTitle === requestedTitle) {

    Post.findOne({_id: requestedPostId}, function(err, post){
      if(!err){
      res.render("post", {
        title: post.title,
        content: post.content,
        number: post.number,
        mail: post.mail,
        qualification: post.qualification
      });
    }
  });
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
