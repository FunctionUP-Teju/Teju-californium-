const mongoose = require("mongoose")

let newPublisherSchema = new mongoose.Schema({
    name: String,
headQuarter: String

})
module.exports=mongoose.model("newPublisher",newPublisherSchema)