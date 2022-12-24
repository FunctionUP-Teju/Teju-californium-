const express = require('express');
const router = express.Router();
const newBookController = require("../controllers/bookController")
const publishController = require("../controllers/publisherController")
const authorController = require("../controllers/authorController")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )
router.post("/createPublisher",publishController.createPublisher)
router.post("/createNewBook", newBookController.createBook  )
router.get("/getBooksData",newBookController.getBooksData)
//5th Question
router.put("/updateData",newBookController.updateData)
router.put("/updateDataAuthore",authorController.updateDataAuthore)
// router.get("/getAuthorsData", authorController.getAuthorsData)

// router.get("/getBooksData", bookController.getBooksData)

// router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

module.exports = router;