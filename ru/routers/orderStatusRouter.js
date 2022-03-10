const Router = require("express")
const orderStatusRouter = new Router()
const orderStatusController = require("../controllers/orderStatusController")

orderStatusRouter.get("/", orderStatusController.getAll)

module.exports = orderStatusRouter