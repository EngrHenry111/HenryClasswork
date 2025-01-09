const bookController = require("../controller/bookController")
const express = require("express")
 
const bookRoutes = express.Router()

bookRoutes.post("/upload-books/:userId", bookController.createBooks)
bookRoutes.get("/get-one-book", bookController.getOne)
bookRoutes.get("/update-books", bookController.updateBooks)
bookRoutes.get("/delete-books", bookController.deleteBooks)
module.exports = bookRoutes;