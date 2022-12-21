const express = require('express');
const router = express.Router();

// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
// const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", UserController.createUser)
router.post("/updateBooks",UserController.updateBooks)
router.get("/getAllBooks",UserController.getAllBooks)
router.get("/bookList", UserController.bookList)
router.get("/getBooksYear/:year1" , UserController.bookYears)
router.get("/getParticularBooks",UserController.particularBook)
router.get("/getXINRBooks", UserController.INRBooks)
router.get("/getRandomBooks",UserController.randomBook)
router.post("/updateOneBook",UserController.updateOneBook)
//MOMENT JS CODE HERE

router.get("/dateManipulation",UserController.dateGate)
module.exports = router;