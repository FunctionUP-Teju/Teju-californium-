let mongoose = require("mongoose")

let userSchema =new mongoose.Schema({
    firstName : String,
    email : String,
    age : Number,
    PhoneNumber : {
        type : String,
        required : true
    },
    currentUpdate :Date

},{timeStamps : true})

module.exports = mongoose.model("User" , userSchema)