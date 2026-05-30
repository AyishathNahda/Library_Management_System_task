const prisma = require("../prismaClient")

const createMember = async (req, res) => {

  try {

    const member = await prisma.member.create({
      data: req.body
    })

    res.status(201).json(member)

  } catch (error) {

    res.status(500).json({
      error: error.message
    })

  }
}

const getMembers = async (req, res) => {

  try {

    const members = await prisma.member.findMany()

    res.json(members)

  } catch (error) {

    res.status(500).json({
      error: error.message
    })

  }
}

const getMemberById = async (req, res) => {

  try {

    const member = await prisma.member.findUnique({
      where: {
        mem_id: Number(req.params.id)
      }
    })

    res.json(member)

  } catch (error) {

    res.status(500).json({
      error: error.message
    })

  }
}

const updateMember = async (req, res) => {

  try {

    const updatedMember = await prisma.member.update({
      where: {
        mem_id: Number(req.params.id)
      },
      data: req.body
    })

    res.json(updatedMember)

  } catch (error) {

    res.status(500).json({
      error: error.message
    })

  }
}

module.exports = {
  createMember,
  getMembers,
  getMemberById,
  updateMember
}