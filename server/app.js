const express= require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const hello=require('./Mongo')

const app =express();
app.use(express.json())
app.use(cors({
        
}))


mongoose.connect("mongodb://127.0.0.1:27017/mine")


app.post('/',(req,res)=>{
    hello.create(req.body)
    .then(all => res.json(all))
    .catch(err => res.json(err))
})

app.post('/login',(req,res)=>{
    const {email,password} = req.body;
    hello.findOne({email:email})
    .then((user)=>{
        if(user){
            if(user.password === password){
                res.json("success")
            }else{
                res.json("not success")
            }
        }else{
            res.json("email is not Registered")
        }
    })
})


app.listen(3000,()=>{
    console.log('run')
})