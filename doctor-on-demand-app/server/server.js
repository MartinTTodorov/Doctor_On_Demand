
const { response } = require('express');
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose');
const cors = require('cors')
const app = express()

// mongoose.connect("mongodb+srv://georgiantoanov:12345666@Doctor.vowjjfk.mongodb.net/Doctor?retryWrites=true&w=majority")
mongoose.connect("mongodb+srv://georgiantoanov:12345666@Doctor.vowjjfk.mongodb.net/Doctor?retryWrites=true&w=majority")

app.use(cors())

const conn = mongoose.connection;
conn.once('open', () => {
    console.log("Connected to MongoDB");
})



var Schema = mongoose.Schema;

var doctorDataSchema = new Schema({  
    fName: String,
    lName: String,
    category: String,
    workingTime: String
})

var Doctor = mongoose.model('Doctor', doctorDataSchema)


// const newDoctor = new Doctor({fName: "Gosho", lName: "Goshev", category: "GP", workingTime: "9-5"});

// newDoctor.save()
//         .then(() => { console.log("Added: " + newDoctor) })

// router.get('/doc', function(req,res,next){
//     // doctorData.find()
//     // .then(function(doc){
//     //    res.send("doctorData")
//     //     // res.render("index", {items:doc})
//     // });
//     res.send("doct")
// })

app.get("/api", async(req,res) => {
  const doc = await Doctor.find();
  res.send(doc);

})






app.get("/api/:id", async(req,res) => {
  const id = req.params.id;
  const doc = await Doctor.findById(id);
  res.send(doc);

})



app.listen(5000, () =>{console.log("Server started on port 5000")})