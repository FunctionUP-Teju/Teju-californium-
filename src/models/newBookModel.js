const mongoose = require("mongoose")
let ObjectId = mongoose.Schema.Types.ObjectId
let newBookSchema = new mongoose.Schema({
    name:String,
    author:{
        type : ObjectId,
        ref : "newAuthor",
      
    },
    isHardCover : {
        type : Boolean,
        default : false
    },
price:Number,
    ratings:Number,
    publisher: {
        type : ObjectId,
        ref : "newPublisher"
    }

})
module.exports = mongoose.model("newBook",newBookSchema)