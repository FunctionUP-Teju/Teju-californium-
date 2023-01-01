
// const bookModel = require("../models/bookModel")
const authorModel = require("../models/authorModel")
const bookmodel = require("../models/bookmodel")

//Creation Of Authordata and fetching data
const createAuthor = async(req,res)=>
{
    let body = req.body 
    let creator = await authorModel.create(body)
    return res.send({created : creator})
}

const twoStates = async (req,res) =>{
    let input = req.params.bookName
    let finder = await bookmodel.findOneAndUpdate({name : input},
    {$set:{price:100,new:true}}
    )
    console.log(finder)
    let author_id = finder.author_id
    let finder2 = await authorModel.find({author_id:author_id}).select({author_name:1,_id:0})
 
    return res.send({content : finder,finder2})
    
} 
module.exports.twoStates=twoStates
module.exports.createAuthor=createAuthor