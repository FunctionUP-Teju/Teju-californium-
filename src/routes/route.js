const express = require('express');
const router = express.Router();
const BookController= require("../controllers/bookController")

//Route handlers consist of all books as per conditions

router.post("/createBook", BookController.createBook)
router.post("/getBooks/search", BookController.specificBook)
router.get("/getBooks/year/:year" , BookController.bookYears) 
router.get("/getBooks",BookController.getData)

router.get("/getBooks/INR", BookController.getByINR)
router.get("/getBooks/available",BookController.available)

//Over ...


module.exports = router;