const mongoose= require("mongoose")
const Schema=require("mongoose")
const nameSchema = new mongoose.Schema({
    name:{
type:String,
require:true
    }
})

module.exports= mongoose.model("name",nameSchema)