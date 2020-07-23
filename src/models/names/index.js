const express=require("express")
const nameSchema =require("./schema")
const namesRouter=express.Router()
namesRouter.post("/", async (req,res,next)=>{
 try{   const Name=new nameSchema(req.body)
     const name= await Name.save()
    res.send(name)
 }catch(error){
     next(error)
 }
})

namesRouter.get("/", async(req,res,next)=>{
 try{   const names= await nameSchema.find(req.query)
    res.send(names)
}catch (error)
{
 next(error)
}
})

namesRouter.get("/:id",async(req,res,next)=>{
    try{
const _id= req.params.id
const name= await nameSchema.findById(_id)
res.send(name)
    }catch(error){
        next(error)
    }
})
namesRouter.put("/:id",async(req,res,next)=>{
    try{
  const NAME= await nameSchema.findByIdAndUpdate(req.params.id, req.body) 
  res.send(NAME)     
    }catch(error){
     next(error)
    }
})
namesRouter.delete("/:id",async(req,res,next)=>{
    try{
const nameDeleted= await nameScheme.findByIdAndDelete(req.params.id)  
res.send(nameDeleted)      
    }catch(error){
        next(error)
    }
})

module.exports= namesRouter