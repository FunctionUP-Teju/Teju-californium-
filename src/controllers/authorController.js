const newAuthorModel = require("../models/newAuthorModel")
const newBookModel = require("../models/newBookModel")
const publisherModel = require("../models/newPublisherModel")
const createAuthor= async function (req, res) {
    let body = req.body
    let authorCreated = await newAuthorModel.create(body)
    res.send({data: authorCreated})
}

const getAuthorsData= async function (req, res) {
    let authors = await newAuthorModel.find()
    res.send({data: authors})
}
const updateDataAuthore = async (req,res)=>{
    let a=await publisherModel.find({publisher:["Penguin","HarperCollins"]})
    let b=a.map(c=>c._id)

    let d=await newBookModel.updateMany({a:{$in:b}},{$set:{isHardCover:true}})
    let e= await newBookModel.updateMany({rating:{$gt:3.5}},{$set:{price:60}})
    res.send({d,e})
}
module.exports.updateDataAuthore=updateDataAuthore
module.exports.createAuthor= createAuthor
module.exports.getAuthorsData= getAuthorsData