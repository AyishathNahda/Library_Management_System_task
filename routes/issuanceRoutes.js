const express = require("express")

const router = express.Router()

const {
  createIssuance,
  getIssuances,
  getIssuanceById,
  updateIssuance
} = require("../controllers/issuanceController")

router.post("/", createIssuance)

router.get("/", getIssuances)

router.get("/:id", getIssuanceById)

router.put("/:id", updateIssuance)

module.exports = router