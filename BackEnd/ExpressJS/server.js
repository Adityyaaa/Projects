// jshint esversion:6

const { response } = require("express");

const express= require ("express" ,4.18,.2);

const app= express();

app.get("/", function (req, res) {

    // console.log(req);

    res.send("<h1> Hello World! </h1>");
});

app.get("/contact", function (req, res) {

    res.send("Contact me at chipiyana!");
});

app.get("/about", function (req, res) {

    res.send("Hey! This is Aditya, I am 19 years old.");
});

app.get("/hobbies", function (req, res) {

    res.send("<ul> <li>Coffee</li> <li>Tea</li> <li>Sharab</li>  </ul>");
});

app.listen(3000, function () {

    console.log("Server started at port 3000");
});
