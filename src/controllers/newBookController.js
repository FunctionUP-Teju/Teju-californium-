const newBookModel = require("../models/newBookModel")
const publishModel = require("../models/newPublisherModel")
const createBook = async function(req,res){
    let body =req.body
let author =body.author
let publisher =req.body.publisher
    if(author){
    let creation = await newBookModel.create(body)
    return  res.send({msg:creation})
    }else if(publisher){
        return res.send(`author details is require`)
    }else{
        return res.send(`publisher detail is require`)
    }
}
module.exports.createBook=createBook
const getBooksData = async function(req,res){
    let getData = await newBookModel.find().populate("author").populate("publisher")
    return res.send({msg: getData})
}

module.exports.getBooksData=getBooksData

const updateData = async (req,res)=>{

    // let publish = await publishModel.find({name :{$in:["Penguin","HarperCollins"]}}).select({_id :1})
    // console.log(publish);
    // const publisherId = [];
    // for(i=0; i < publish.length;i++ ){
    //  publisherId.push(publish[i]._id)
    // }
    // console.log(publisherId);
    // let books = await newBookModel.updateMany(
    //     {publisher : {$in:publisherId}},
    //     {$set : {inHardcover : true}},
    //     {new :true}
    // )
    // return res.send({msg:books})

 
    let data = await newBookModel.find().populate("author").populate("publisher")

    data.forEach(el=>{
        if(el.publisher.name=='Penguin' || el.publisher.name=='HarperCollins')
        {
            el.isHardCover = true
            
            
        }
       
        
    })

    
    res.send({msg:data})
    
 
    


}
module.exports.updateData = updateData