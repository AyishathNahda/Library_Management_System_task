const prisma = require("../prismaClient")

const createIssuance = async (req, res) => {
  try {

    const issuance = await prisma.issuance.create({
      data: {
        book_id: req.body.book_id,
        issuance_member: req.body.issuance_member,
        issuance_date: new Date(req.body.issuance_date),
        target_return_date: new Date(req.body.target_return_date),
        issued_by: req.body.issued_by,
        issuance_status: req.body.issuance_status
      }
    })

    res.status(201).json(issuance)

  } catch (error) {
    res.status(500).json({
      error: error.message
    })
  }
}

const getIssuances = async (req, res) => {
  try {

    const issuances = await prisma.issuance.findMany({
      include: {
        member: true,
        book: true
      }
    })

    res.json(issuances)

  } catch (error) {
    res.status(500).json({
      error: error.message
    })
  }
}

const getIssuanceById = async (req, res) => {
  try {

    const issuance = await prisma.issuance.findUnique({
      where: {
        issuance_id: Number(req.params.id)
      }
    })

    res.json(issuance)

  } catch (error) {
    res.status(500).json({
      error: error.message
    })
  }
}

const updateIssuance = async (req, res) => {
  try {

    const issuance = await prisma.issuance.update({
      where: {
        issuance_id: Number(req.params.id)
      },
      data: req.body
    })

    res.json(issuance)

  } catch (error) {
    res.status(500).json({
      error: error.message
    })
  }
}

module.exports = {
  createIssuance,
  getIssuances,
  getIssuanceById,
  updateIssuance
}