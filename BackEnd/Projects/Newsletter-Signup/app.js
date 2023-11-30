// jshint esversion: 6

const express = require("express");

const bodyParser = require("body-parser");

const request = require("request");

const app =  express();

app.use(express.static("public")); // public/css/*, /public/*

app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", function (req, res) {

    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {

    var firstName = req.body.fName;

    var lastName = req.body.lName;

    var email = req.body.email;

    console.log(firstName, lastName, email);
});

app.listen(3000, function () {

    console.log("Server is running on port 3000.");
});

// API Key
// ede4364972b8675756730ae119ce45d3-us21

// List Id
// 3c48ea2a18