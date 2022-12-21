const UserModel= require("../models/bookModel")
const moment = require("moment")
const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const bookList = async function(req,res){
    let getAll = await UserModel.find().select({bookName : 1 , author : 1 ,_id :0})
    return  res.send({here : getAll})
}

const getAllBooks = async function(req,res){
    let getBook = await UserModel.find()
    res.send({msg : getBook})
}

const bookYears = async function(req,res){
    let year1 = req.params.year1
    let implement = await UserModel.find({year : year1})
    return res.send({YourBook : implement})
}

const particularBook = async function(req,res){
    let body = req.body
    let input = await UserModel.find(body)
    console.log(body);
   return  res.send({output : input})
}
const INRBooks = async function(req,res){
let input = await UserModel.find({"prices.indianPrice":{$in : ["100","200","500"]}})
    
   return  res.send({output : input})
}
const randomBook = async function(req,res){
    let input = await UserModel.find( {sales : {$gt : 500}})
    return res.send({randomBooks : input})
}

const updateBooks = async function(req,res){
    let body = req.body
    let body2 = req.query.body2
    let update = await UserModel.updateMany(
        {author : body2},
        {$set :body}
    )
    return res.send({msg : update})
}
const dateGate = async function(req,res){
    let date = moment()
    console.log(date.format("DD-MM-YYYY"));
    console.log(moment("21-17-2022","DD-MM-YYYY").isValid());
    res.send("Check Console.")
}


const updateOneBook = async function(req,res){
    let body = req.body
    let body2 = req.query.body2
    let update = await UserModel.findOneAndUpdate(
        {author : body2},
        {$set :body},
        {new : true,upsert:true}
    )
    return res.send({msg : update})
}
module.exports.updateOneBook= updateOneBook
module.exports.updateBooks=updateBooks
module.exports.randomBook = randomBook
module.exports.INRBooks = INRBooks
module.exports.particularBook= particularBook
module.exports.bookYears = bookYears
module.exports.bookList = bookList
module.exports.createUser= createUser
module.exports.getAllBooks=getAllBooks
module.exports.dateGate=dateGate