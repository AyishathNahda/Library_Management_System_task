const express = require("express");
const router = express.Router();

const { getPendingReturns } = require("../controllers/dashboardController");

router.get("/pending", getPendingReturns);

module.exports = router;