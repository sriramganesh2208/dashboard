const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/mine")
.then(()=>{
    console.log("connect")
})
.catch(()=>{
    console.log("not connected")
})

const person = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const hello=mongoose.model("all",person)

module.exports = hello