const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const authorController= require("../controllers/authorController")
const BookController= require("../controllers/bookController")

//Making Api get/post for author

router.post("/createAuthors",authorController.createAuthors)
router.get("/getAuthor",authorController.getAuthor)

//Making Api get/Post for book
router.get("/getBook",BookController.getBook)
router.post("/createBooks",BookController.createBooks)





module.exports = router;