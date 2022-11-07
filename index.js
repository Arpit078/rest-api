const express = require('express')
const app = express()
const axios = require("axios")
const PORT = 5000||process.env.PORT


app.get("/",(req,res)=>{
    res.json("hello")
})

app.get('/comic',(req,res)=>{
    const random_int = Math.floor(Math.random() * 2500);
    axios.get(`https://xkcd.com/${random_int}/`)
    .then((response)=>{
        const html = response.data
        const $ = cheerio.load(html)//$(".itemListElement")
        const comic_img = $("#middleContainer")
        const url = comic_img.find("a")
        .next()
        .next()
        .text()
        res.json(url)
      
  
  
    }).catch((err)=> console.log(err))
  })

app.listen(PORT,(req,res)=>{
    console.log("server started")
})