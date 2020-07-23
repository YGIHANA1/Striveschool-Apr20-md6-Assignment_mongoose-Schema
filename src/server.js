const express= require("express")
const namesRouter= require("./models/names")
const mongoose=require("mongoose")
const dotenv=require("dotenv")
dotenv.config()
const server= express()
const port=process.env.PORT

server.use(express.json())
server.use("/names",namesRouter)

mongoose
.connect("mongodb://localhost:27017/names",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

server.listen(process.env.PORT || 3002 ,()=>console.log("server is running on port",port))