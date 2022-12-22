
const bookModel = require("../models/bookModel")
const authorModel = require("../models/authorModel")

//Creation Of Authordata and fetching data

const createAuthors = async function (req,res){
    let body = req.body
    let creation = await authorModel.create(body)
    return res.send({msg : creation})
}

module.exports.createAuthors=createAuthors

const getAuthor = async function(req,res){

    const author= await authorModel.findOne({})
    //    const id = author.author_id;
       const book= await bookModel.find({author_id : author.author_id })
         res.send({msg: book, condition: true})
}
module.exports.getAuthor=getAuthor