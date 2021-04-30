//jshint esversion:6

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB" , { useNewUrlParser: true ,useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Pleace Enter Fruit name !!!!"]
  },
  ratting: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "blackberries",
  ratting: 10,
  review: "good food"
});

const personSchema = new mongoose.Schema({
  name: String,
  sex: String,
  mobile_number: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "Ravi",
  sex: "Male",
  mobile_number: 9723325879
});

// //  fruit.save();
// person.save(); 

// const kiwi = new Fruit({
//   name: "kiwi",
//   score: 10,
//   review: "good food"
// });

// const orange = new Fruit({
//   name: "orange",
//   score: 5,
//   review: "great food"
// });

// const banana = new Fruit({
//   name: "banana",
//   score: 7,
//   review: "weird texture"
// });

// // Fruit.insertMany([kiwi, orange, banana], function(err){
// //   if (err){
// //     console.log(err);
// //   }
// //   else{
// //     console.log("successfully saved all the fruits to fruitsDB");
// //   }
// // });

Fruit.find(function(err,fruits){
  if(err){
    console.log(err);
  }else{  
    // console.log(fruits);

    mongoose.connection.close(); 

    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });
  }
});

// Fruit.updateOne({_id: "6083ffc44aa495251c9508bf"}, {name: "Pear"}, function(err){
//   if(err){
//     console.log(err);
//   } else{
//     console.log("successfully updated the document.");
//   }
// });

// Fruit.deleteOne({ratting: 10 }, function(err){
//   if(err){
//     console.log(err);
//   } else{
//     console.log("successfully deleted the document..");
//   }
// });

// Person.deleteMany({name: "Ravi"}, function(err){
//   if(err){
//     console.log(err);
//   } else{
//     console.log("successfully deleted the all document..");
//   }
// })

  const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('fruits');
    // Find some documents
    collection.find({}).toArray(function(err, fruits) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(fruits)
      callback(fruits);
    });
  }