const mongoose = require("mongoose")
let newAuthorSchema = new mongoose.Schema({
    authorName:String,
		age:Number,
		address:String,
rating: Number

})
module.exports = mongoose.model("newAuthor",newAuthorSchema)