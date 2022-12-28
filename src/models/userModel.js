const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    firstName : String,
    lastName : String,
    mobile :{
        type :Number,
        required :true,
        unique : true
    },
    emailId : String,
    password :String,
    gender : {
        enum :["female","male","lgbt"]
    },
	isDeleted: {type :Boolean,
    default :false
    }, //default value is false 
    age : Number,
},{timestamps:true})

module.exports = mongoose.model('User', userSchema)
