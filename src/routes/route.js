const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/authorController")
const BookController= require("../controllers/bookController")

router.post("/createBook",BookController.createBook)
module.exports = router;