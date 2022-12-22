const bookModel = require("../models/bookModel")

const createBooks = async function (req,res){
    let body = req.body
    let creation = await bookModel.create(body)
    return res.send({msg : creation})
}
const getBook = async function(req,res){
    let getBookData = await bookModel.find()
    return res.send({msg:getBookData})
}
module.exports.getBook=getBook
module.exports.createBooks=createBooks