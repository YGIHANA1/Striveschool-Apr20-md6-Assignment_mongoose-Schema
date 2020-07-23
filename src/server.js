const express= require("express")
const namesRouter= require("./models/names")
const dotenv=require("dotenv")
dotenv.config()
const server= express()
const port=process.env.PORT

server.use(express.json())
server.use("/names",namesRouter)


server.listen(process.env.PORT || 3002 ,()=>console.log("server is running on port",port))