const newPublisherModel = require("../models/publisherModel")

const createPublisher = async function(req,res){
    let body = req.body
    let creation = await newPublisherModel.create(body)
    return res.send({msg : creation})
}
module.exports.createPublisher=createPublisher