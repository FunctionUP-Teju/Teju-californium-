const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
    let allBooks= await BookModel.find(  { authorName : "SK" , isPublished: true }  )
    res.send({msg: allBooks})
}

//============================================================================== Assingment =====================================//


const bookData = async function (req , res) {

    let data = req.body 
    let NewData = await BookModel.create (data) 
    res.send ( {msg : NewData})
}

const bookList = async function (req ,res) {
    let KnowBookName = await BookModel.find ().select ({bookName :1  , author:1})
    res.send ( { msg : KnowBookName })

}

const  getBooksInYear = async function (req ,res) {

    let data =  req.query.year 
    let KnowBookName = await BookModel.find ({year:data} ) 
    res.send ({msg : KnowBookName})
   

}

const getParticularBooks = async function(req ,res ) {
 
   let KnowBookName = await BookModel.find({year:2000} ) . select({bookName:1})
   res.send ( {msg : KnowBookName})

}

const getXINRBooks = async function (req,res) {

    let KnowBookName = await BookModel.find({"price.indianPrice":{$in:[100,200,500]}} ) 
   res.send ( {msg : KnowBookName})
}

module.exports.bookData= bookData
module.exports.bookList= bookList
module.exports.getBooksInYear= getBooksInYear
module.exports.getParticularBooks= getParticularBooks
module.exports. getXINRBooks=  getXINRBooks


module.exports.createBook= createBook
module.exports.getBooksData= getBooksData