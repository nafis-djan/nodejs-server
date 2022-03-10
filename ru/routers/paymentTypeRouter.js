const Router = require("express")
const paymentTypeRouter = new Router()
const paymentTypeController = require("../controllers/paymentTypeController")

paymentTypeRouter.get("/", paymentTypeController.getAll)

module.exports = paymentTypeRouter