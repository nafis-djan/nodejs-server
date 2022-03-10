const Router = require("express")
const receivingRouter = new Router()
const receivingController = require("../controllers/receivingController")

receivingRouter.get("/:id", receivingController.get)
receivingRouter.get("/", receivingController.getAll)
receivingRouter.post("/", receivingController.create)
receivingRouter.put("/:id", receivingController.update)
receivingRouter.delete("/:id", receivingController.delete)

module.exports = receivingRouter