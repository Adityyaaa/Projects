const express= require("express");
const app = express();
const bodyParser = require("body-parser");
// const date = require(__dirname+"/date.js");
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

//connecting to the local mongodb host location
mongoose.connect("mongodb://localhost:27017/todolistDB")

//creating schema for the todolist
const itemSchema = {
  name: String
};

//creating mongoose model
const Item = mongoose.model(
"Item",itemSchema
)

const item1 = new Item(
  {
  name:"welcpme to todolist"
}
)
const item2 = new Item(
  {
  name:"get started by this "
}
)
const item3 = new Item(
  {
  name:"click + to add"
}
)

let defaultarr = [item1, item2, item3];



app.set('view engine','ejs');
//let item=[];//to store the to do list
//let worklist=[];// to store the work list

app.get("/", function(req, res){

   let day = date();
   console.log(day);

  //rendering the database to home page
 Item.find({},function(err, founditems){

  if(founditems.length===0)
  {
    // inserting in data base the abouve data if list is empty
   Item.insertMany(defaultarr, function(err){
   if(err)
   console.log("error while insertion");
   else
  console.log("insertion successfull");
    });//closing insert
    res.redirect("/");
  }


  else
  {
    res.render("list",{listTitle: day,  newitem:founditems});
  }
    });//closing find
  
});//closing app.get

   
    

 

//to get data from the page form
app.post("/", function(req,res){
 let t= req.body.text;

/* if(req.body.list==='work'){
    worklist.push(t);
    res.redirect("/work");
 }
 
 else{
item.push(t);*/
 
   //Creating a database document or field here of type Items
   const item  = new Item({
    name: t
   })
   item.save();
res.redirect("/");
});

app.post("/delete", function(req, res){
const checkedid= req.body.checkbox;
Item.findByIdAndRemove(checkedid, function(err){
  if(err)
  console.log("eroor while del");
  else
  console.log("deleted successfully");
})
res.redirect("/");
  
})

//work get back 
/*
app.get("/work", function(req, res){
  res.render("list",{listTitle: "work", newitem:worklist});
});

app.post("/work", function(req, res){
    let l = req.body.newitem;
    
  worklist.push(l);
    res.redirect("/work");
})*/
app.listen(3000, function(){
    console.log("listening on port 3000");
})