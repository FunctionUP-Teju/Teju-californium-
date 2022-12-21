const bookModel =require("../models/bookModel")


const createBook = async function(req,res){
    let body = req.body
   let creation = await bookModel.create(body)
   return res.send({msg : creation})
}
module.exports.createBook=createBook