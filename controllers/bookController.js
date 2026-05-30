const prisma = require("../prismaClient")

const createBook = async (req, res) => {
  try {

    const book = await prisma.book.create({
      data: {
        ...req.body,
        book_launch_date: new Date(req.body.book_launch_date)
      }
    })

    res.status(201).json(book)

  } catch (error) {
    res.status(500).json({
      error: error.message
    })
  }
}

const getBooks = async (req, res) => {
  try {

    const books = await prisma.book.findMany({
      include: {
        category: true,
        collection: true
      }
    })

    res.json(books)

  } catch (error) {
    res.status(500).json({
      error: error.message
    })
  }
}

const getBookById = async (req, res) => {
  try {

    const book = await prisma.book.findUnique({
      where: {
        book_id: Number(req.params.id)
      }
    })

    res.json(book)

  } catch (error) {
    res.status(500).json({
      error: error.message
    })
  }
}

const updateBook = async (req, res) => {
  try {

    const book = await prisma.book.update({
      where: {
        book_id: Number(req.params.id)
      },
      data: req.body
    })

    res.json(book)

  } catch (error) {
    res.status(500).json({
      error: error.message
    })
  }
}

module.exports = {
  createBook,
  getBooks,
  getBookById,
  updateBook
}