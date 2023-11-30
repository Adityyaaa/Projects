//jshint esversion:6

// require mongoose package
const mongoose = require('mongoose');
 
main().catch(err => console.log(err));

mongoose.set('strictQuery', true);
 
async function main() {
  // Use connect method to connect to the server
  await mongoose.connect('mongodb://127.0.0.1:27017/FruitsDB');
 
  const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please check your data entry, no name specified."]
    },
    rating: {
        type: Number,
        min:1,
        max:10
    },
    review: String
  });
 
  const Fruit = mongoose.model('Fruit', fruitSchema);
 
//   const fruit = new Fruit({
//     name: 'Apple',
//     rating: 9,
//     review: 'Pretty solid as a fruit.'
//   });

  const fruit = new Fruit({
    rating: 10,
    review: 'Peaches are yummy.'
  });
 
//   await fruit.save();

  const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favoriteFruit: fruitSchema
  });

  const Person = mongoose.model('Person', personSchema);

//   const pineapple = new Fruit ({
//     name:"Pineapple",
//     rating: 9,
//     review: "Great fruit!"
//   });

const melon = new Fruit ({
    name:"Watermelon",
    rating: 10,
    review: "Watery fruit!"
  });

  mango.save();

  Person.updateOne({name:"Aditya"}, {favoriteFruit:melon}, function(err) {
    if(err)
    {
       console.log(err);
    }
        
    else {
            console.log("Successfully deleted many!");
    }
  }
  );

//   const person = new Person ({
//     name: 'Aditya',
//     age:19
//   });

// const person = new Person ({
//         name: 'Saira',
//         age:19,
//         favoriteFruit: pineapple
//       });

  await person.save ();

//   const kiwi = new Fruit({
//     name: "Kiwi",
//     rating: 10,
//     review:"It's the best fruit!"
//   });

//   const orange = new Fruit({
//     name: "Orange",
//     rating: 4,
//     review:"Too sour for me"
//   });

//   const banana = new Fruit({
//     name: "Banana",
//     rating: 5,
//     review:"Weird texture!"
//   });

//   Fruit.insertMany([kiwi,orange,banana], function (err) {
//     if(err) {
//         console.log(err);
//     }

//     else {
//         console.log("Successfully inserted.");
//     }
//   });
  
  Fruit.find(function (err, fruits) {        //function to read database in the hyper terminal
    if(err) {
        console.log(err);
    }

    else {
        // console.log(fruits);
        fruits.forEach (function(fruit) {         //to display on fruit's name using for each fpr loop method
            console.log(fruit.name);    
          });
    }
  });  

//   Fruit.updateOne ({_id: "639813bca41987b8d2587144"}, {name: "Peach"}, function(err) {
//     if(err) {
//         console.log(err);
//     }

//     else{
//         console.log("Successfully updated!");
//     }
//   });

//   Fruit.deleteOne ({_id:"639813bca41987b8d2587144"}, function (err){
//     if(err) {
//         console.log(err);
//     }

//     else {
//         console.log("Successfully deleted!");
//     }
//   });

//   Person.deleteMany({name:"Aditya"},function (err) {
//     if(err) {
//         console.log(err);
//     }

//     else {
//         console.log("Successfully deleted many!");
//     }
//     });

 }




// Ansh's code-

/*const mongoose = require("mongoose");

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost:27017/fruitsDb");

mongoose.connect(
    process.env.MONGO_URL,
    options,
    (err) => {
     if(err) console.log(err) 
     else console.log("mongdb is connected");
    }
  );


const fruitSchema = new mongoose.Schema({
    name:String,
    rating: Number,
    review : String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name:"Apple",
    rating:7,
    review: "pretty solid as a fruit"
});
const banana = new Fruit({
    name:"Banana",
    rating:5,
    review: "pretty sweet fruit"
});
const orange = new Fruit({
    name:"Orange",
    rating:7,
    review: "pretty saur fruit"
});

fruit.save();

const personSchema = new mongoose.Schema({
    name:String,
    age:Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name:"ansh",
    age:20
});

person.save()
Fruit.insertMany([orange, banana], function(err){
    if(err){
        console.log("error");

    }
    else{
        console.log("successfully inserted");
    }
})*/





