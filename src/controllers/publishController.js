const newPublisherModel = require("../models/newPublisherModel")

const createPublisher = async function(req,res){
    let body = req.body
    let creation = await newPublisherModel.create(body)
    return res.send({msg : creation})
}
module.exports.createPublisher=createPublisher