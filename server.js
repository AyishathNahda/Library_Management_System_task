const express = require("express")
const cors = require("cors")

require("dotenv").config()

const memberRoutes = require("./routes/memberRoutes")
const bookRoutes = require("./routes/bookRoutes")
const issuanceRoutes = require("./routes/issuanceRoutes")
const dashboardRoutes = require("./routes/dashboardRoutes")
const apiKeyMiddleware = require("./middleware/apiKeyMiddleware")

const app = express()


app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.json({
    message: "Library Management API Running"
  })
})

app.use(
  "/members",
  apiKeyMiddleware,
  memberRoutes
)
app.use(
  "/books",
  apiKeyMiddleware,
  bookRoutes
)
app.use(
  "/issuances",
  apiKeyMiddleware,
  issuanceRoutes
)
app.use(
  "/dashboard",
  apiKeyMiddleware,
  dashboardRoutes
)

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})