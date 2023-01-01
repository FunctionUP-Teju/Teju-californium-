const express = require('express');
const app = express.Router();

const BookController= require("../controllers/bookController")
const authorController = require("../controllers/authorController")


app.post("/createBook",BookController.createBook)
app.post("/createAuthor",authorController.createAuthor)
app.get("/getBooks/name/:name",BookController.bookBychetan)
app.get("/getBooks/update/:bookName",authorController.twoStates)
app.get("/getBooks/gtls",BookController.runLoop)
// app.get("/diffBetw",BookController.diffBetw)
 
//MOMENT JS
// const moment = require('moment');
// app.get("/dateManipulations", function (req, res) {
    
//     // const today = moment();
//     // let x= today.add(10, "days")

//     // let validOrNot= moment("29-02-1991", "DD-MM-YYYY").isValid()
//     // console.log(validOrNot)
    
//     const dateA = moment('01-01-1900', 'DD-MM-YYYY');
//     const dateB = moment('01-01-2000', 'DD-MM-YYYY');

//     let x= dateB.diff(dateA, "days")
//     console.log(x)

//     res.send({ msg: "all good"})
// })

module.exports = app;