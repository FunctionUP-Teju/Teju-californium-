const bookmodel= require("../models/bookmodel")
const authorModel= require("../models/authorModel")
const { create } = require("../models/bookmodel")


const createBook = async (req,res)=>
{
    let body  = req.body
    let creator = await bookmodel.create(body)
    return res.send({created : creator})
}



const bookBychetan= async function (req, res) {
    let input = req.params.name
 let finder = await authorModel.find({author_name : input})
 let [obj] = finder
 let id = obj.author_id
 let finder2 = await bookmodel.find({author_id:id})
 return res.send({content : finder2})
}

const runLoop = async (Req,res)=>{
    
    let finder = await bookmodel.find({price:{$gte :50,$lte :100}})
     let a =[]
    for(i of finder){
        let objjj=await authorModel.findOne({author_id:(i.author_id)}).select({author_name:1,_id:0})        
         a.push(i)
         a.push(objjj)

    return res.send({content : a})
}}
module.exports.runLoop=runLoop
module.exports.bookBychetan=bookBychetan
module.exports.createBook=createBook