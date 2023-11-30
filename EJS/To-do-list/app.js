//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const date = require(__dirname + "/date.js");

const _ = require("lodash"); 

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.set('strictQuery', true);

// mongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.1/todolistDB");
mongoose.connect("mongodb+srv://Aditya:aditya12345@to-do-list.bfa5ln7.mongodb.net/todolistDB");
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

const listSchema = {
  name: String,
  items: [itemsSchema]
}

const List = mongoose.model("List", listSchema);

// const items = ["Buy Food", "Cook Food", "Eat Food"];
// const workItems = [];

app.get("/", function(req, res) {

// const day = date.getDate();

  Item.find({}, function (err, foundItems){
    // console.log(fountItems);

    if(foundItems.length === 0) {

      Item.insertMany(defaultItems, function (err) {
        if(err) {
          console.log(err);
        }
      
        else {
          console.log("Successfully saved to our database.");
        }
      }); 
      res.redirect("/");
    }

    else {
      res.render("list", {listTitle: "Today", newListItems: foundItems});
    }
  });


});

app.post("/", function(req, res){

  const itemName = req.body.newItem;

  const listName= req.body.list;

  const item =new Item ({
    name: itemName
  });

  if (listName === "Today") {

    item.save ();
    res.redirect ("/");
  }

  else {

    List.findOne ({name: listName}, function (err, foundList){
      foundList.items.push(item);
      foundList.save();
      res.redirect("/" + listName);
    });
  }

  // if (req.body.list === "Work") {
  //   workItems.push(item);
  //   res.redirect("/work");
  // } else {
  //   items.push(item);
  //   res.redirect("/");
  // }
});

app.post("/delete", function(req, res){

  const checkedItemId = req.body.checkbox;
  
  const listName = req.body.listName;

  if(listName === "Today") {
    
    Item.findByIdAndRemove(checkedItemId, function(err){

      if(!err) {
        console.log("Successfully deleted checked item."); 
        res.redirect("/");
      }
    });
  }

  else {

    List.findOneAndUpdate({name: listName},{$pull: {items: {_id: checkedItemId}}}, function(err, foundList){
    if(!err) {
      res.redirect("/" + listName);
    }
  });
  }
});

app.get("/:customListName", function (req,res) {

  const customListName = _.capitalize(req.params.customListName);

  List.findOne({name:customListName}, function(err, foundList){

    if(!err) {
      if(!foundList) {
        //Create a new list

        const list = new List ({
          name: customListName,
          items: defaultItems
        });
        list.save();

        res.redirect("/" + customListName);
      }
      else {
        //Show an existing list

        res.render("list", {listTitle: foundList.name, newListItems: foundList.items});
      }
    }
  });  
});

// app.get("/work", function(req,res){
//   res.render("list", {listTitle: "Work List", newListItems: workItems});
// });

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
