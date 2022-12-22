const mongoose = require("mongoose")
ObjectId = mongoose.Schema.Types.ObjectId
const bookSchema = new mongoose.Schema({
    name:String,
    author_id :{
    type :Number,
    required : true
   },
   
    price:Number,
    ratings:Number,
},{timestamps :true})
module.exports=mongoose.model("book",bookSchema)