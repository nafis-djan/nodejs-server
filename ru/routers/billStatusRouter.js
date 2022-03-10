const Router = require("express")
const billStatusRouter = new Router()
const billStatusController = require("../controllers/billStatusController")

billStatusRouter.get("/", billStatusController.getAll)

module.exports = billStatusRouter