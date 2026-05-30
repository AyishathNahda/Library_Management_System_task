const express = require("express")

const router = express.Router()

const {
  createBook,
  getBooks,
  getBookById,
  updateBook
} = require("../controllers/bookController")

router.post("/", createBook)

router.get("/", getBooks)

router.get("/:id", getBookById)

router.put("/:id", updateBook)

module.exports = router