//jshint esversion:6

const express = require("express");

let items = ["Reach College at 8:50", "Devlopment", "Leave to room at 7", "Workout"];

let workItems = [];

const bodyParser = require("body-parser");

const mongoose = require("mongoose");

const app = express();

mongoose.set('strictQuery', true);

// const date = require (__dirname + "/date.js");

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded ({extended: true}));

app.use(express.static("public"));

const schema = new mongoose.Schema({
  name: String
});

async function main() {
  // Create a separate connection and register a model on it...
//   const conn = mongoose.createConnection();
//   conn.model('User', schema);

  // But call `mongoose.connect()`, which connects MongoDB's default
  // connection to MongoDB. `conn` is still disconnected.
 //mongoose.connect("mongodb://localhost:27017/todolistDB");
    // mongoose.model('User', schema);
  
    // await mongoose.model('User').findOne(); // Works!

// main().catch(err=> console.log(err));
//async function main() {

 await mongoose.connect('mongodb://localhost:27017' );

 //my connection

//  await mongoose.connect('mongodb://localhost:27017/itemDB',{
//     useNewUrlParser: true, 
//     useUnifiedTopology: true
// })
// .then(db => console.log('DB is connected'))
// .catch(err => console.log(err)); 
  
      

// , {useNewUrlParser:true,
// useUnifiedTopology:true,
// useCreateIndex:true}).then(()=>{
// console.log(`successfully connected`);
// }).catch((e)=>{
// console.log(`not connected`);
// });

const itemsSchema = { 
    name: String
};

const Item = mongoose.model("Item", itemsSchema);

const item1 = new Item ({
    name: "Welcome to your todolist!"
});

const item2 = new Item ({
    name: "Hit the + button to add a new item."
});

const item3 = new Item ({
    name: "<--Hit this to delete an item."
});



const defaultItems = [item1, item2, item3];

Item.insertMany(defaultItems, function(err) {
    if(err) {
        console.log(err);
    }

    else {
        console.log("Successfully inserted items into your todolist database!");
    }
});

}//closing main()

app.get("/", function(req, res){
  
    // let day = date.getDate();

    res.render("list", { listTitle: "Today", newListItems: items });

});

    app.post("/", function(req, res) {

        let item = req.body.newItem;

        if(req.body.list ==="Work") {

            workItems.push(item);
            res.redirect("/work");
        }

        else {

            items.push(item);
            res.redirect("/");
        }

        console.log(req.body); 
    });

    app.get("/work", function (req, res) {

        res.render ("list", {listTitle: "Work List", newListItems: workItems});
    });

    app.get("/about", function(req, res) {
        
        res.render("about");
    });

    app.post("/work", function(req, res) {

        let item = req.body.newItem;
        workItems.push(item);
        res.redirect("/work");
    });


    // switch (currentDay) {

    //     case 0: day = "Sunday";
    //     break;

    //     case 1: day = "Monday";
    //     break;

    //     case 2: day = "Tuesday";
    //     break;

    //     case 3: day = "Wednesday";
    //     break;

    //     case 4: day = "Thursday";
    //     break;

    //     case 5: day = "Friday";
    //     break;

    //     case 6: day = "Saturday";
    //     break;

    //     default: console.log("Error: current dayis equal to : " + currentDay);

    // }

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
