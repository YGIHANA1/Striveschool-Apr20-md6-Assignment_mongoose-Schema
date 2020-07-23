const express=require("express")
const nameSchema =require("./schema")
const namesRouter=express.Router()
namesRouter.post("/", async (req,res)=>{
    const Name=new nameSchema(req.body)
     const name= await  Name.save()
    res.send(name)
})




module.exports= namesRouter