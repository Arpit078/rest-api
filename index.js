const express = require('express')
const app = express()
const PORT = 5000


app.get("/",(req,res)=>{
    res.json("hello")
})


app.listen(PORT,(req,res)=>{
    console.log("server started")
})