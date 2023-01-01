const { count } = require("console")
const bookModel = require("../models/bookModel")
const BookModel= require("../models/bookModel")

const createBook = async (req,res)=>
{
    let body = req.body
    let creation = await bookModel.create(body)
    return res.send({created:creation})
}
const getData= async function (req, res) {
    let receive = await bookModel.find().select({bookName:1,author:1,_id :0})
    return res.send({content : receive})
}

const specificBook = async (req,res)=>
{
    let input = req.body
    let finder = await bookModel.find(input)
    return res.send({content :finder })
}
const bookYears = async (req,res)=>{
    let year = req.params.year
    console.log(year);
    let finder = await bookModel.find({year : {$eq:year}})
    return res.send({content : finder})
}
const getByINR = async (req,res)=>
{
 let finder = await bookModel.find({"prices.indianPrice":{$in:["3150","12000"]}}) 
 return res.send({content : finder})
}
const available =async (req,res)=>{
    let finder = await bookModel.find({stockAvailable:{$eq:true}})
    return res.send({content:finder})
}
module.exports.available=available
module.exports.getByINR=getByINR
module.exports.bookYears=bookYears
module.exports.specificBook=specificBook
module.exports.getData= getData 
module.exports.createBook= createBook
// let allBooks= await BookModel.find( ).count() // COUNT

// let allBooks= await BookModel.find( { authorName : "Chetan Bhagat" , isPublished: true  } ) // AND

// let allBooks= await BookModel.find( { 
//     $or: [ {authorName : "Chetan Bhagat" } , { isPublished: true } , {  "year": 1991 }]
// } ).select( { bookName: 1, authorName: 1, _id: 0})n // SELECT keys that we want

// let allBooks= await BookModel.find().sort( { sales: -1 }) // SORT

// PAGINATION 
// let page= req.query.page
// let allBooks= await BookModel.find().skip(3 * (page-1)).limit(3)

// let allBooks= await BookModel.find().sort({ sales: -1 }).skip(3 * (page-1)).limit(3).select({ bookName: 1, authorName: 1, _id: 0} )


// let allBooks= await BookModel.find({ sales: { $eq:  137 }  }) 
// let allBooks= await BookModel.find({ sales: { $ne:  137 }  }) 
// let allBooks= await BookModel.find({ sales: { $gt:  50 }  }) 
// let allBooks= await BookModel.find({ sales: { $lt:  50 }  }) 
// let allBooks= await BookModel.find({ sales: { $lte:  50 }  }) 
// let allBooks= await BookModel.find({ sales: { $gte:  50 }  }) 

// let allBooks= await BookModel.find({     sales : { $in: [10, 17, 82] }     }).count() 
// sales : { $in: [10, 17, 82] }

// let allBooks= await BookModel.find({     sales : { $nin: [ 17, 82, 137] }     }).select({ sales: 1, _id:0})

//  let allBooks= await BookModel.find({     $and: [{sales : {$gt: 20}} , [sales:  {$lt: 100}]]    })  //sales is between 20 and 100.... sales > 20 AND sales <100
//  let allBooks= await BookModel.find({     sales : {$gt: 20, $lt: 100}   })  //sales is between 20 and 100.... sales > 20 AND sales <100


//  let allBooks= await BookModel.findById("621c60a6b16c9e6bf2736e33") 
//  let allBooks= await BookModel.findOne( {sales: 10}) 
//  let allBooks= await BookModel.find( {sales: 10}) 



// //  update (not covered: - findByIdAndUpdate | updateOne )
// let allBooks= await BookModel.update(   
//     {  sales: {$gt: 10}  }, //condition
//     { $set: { isPublished: true} } // the change that you want to make
//     ) 



// REGEX
// let allBooks= await BookModel.find( { bookName:  /^Int/  }) 
// let allBooks= await BookModel.find( { bookName:  /^INT/i  }) 
// let allBooks= await BookModel.find( { bookName:  /5$/  }) 
// let allBooks= await BookModel.find( { bookName:  /.*Programming.*/i  }) 

// ASYNC AWAIT

  //normally this is an asynchronous call..but await makes it synchronous


// WHEN AWAIT IS USED: - database + axios
//  AWAIT can not be used inside forEach , map and many of the array functions..BE CAREFUL

