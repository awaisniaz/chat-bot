const express = require("express")
const app = express();

app.get('/health',(req,res)=>{
  res.status(200).json("Server is up and running !")
})

app.listen(3005,()=>{
    console.log("Server is Running on 3001")
})