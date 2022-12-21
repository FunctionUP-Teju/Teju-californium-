//users
const mongoose=require('mongoose')
 
const bookSchema= new mongoose.Schema({
   bookName: {
       type: String,
       required: true
   },

   author: String,
   tags: [ String ], //array of strings
   year: {
    type : Number,
    default : 2021
   },
   isPublished: {
       type: Boolean, //Boolean
       default: false
   },
   prices: {
       indianPrice: String,
       europeanPrice: String,
       japanPrice: String
   },
   sales: {
       type: Number,
       default : 0
   },
   completionDate: {
    type : Date,
    default : Date.now
   },
   stockAvailable :Boolean
}, {timestamps: true} )
 
module.exports = mongoose.model( 'Book', bookSchema )
 


//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover