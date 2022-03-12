const Router = require("express")
const selectedProductRouter = new Router()
const authAndCheckRole = require("../middleware/checkAuthAndRoleMiddleware")
const selectedProductController = require("../controllers/selectedProductController")

selectedProductRouter.get("/:id", authAndCheckRole(["USER", "EMPLOYEE"]), selectedProductController.get)
selectedProductRouter.get("/", authAndCheckRole(["USER", "EMPLOYEE"]), selectedProductController.getAll)
selectedProductRouter.post("/", authAndCheckRole(["USER"]), selectedProductController.create)
selectedProductRouter.put("/:id", authAndCheckRole(["USER"]), selectedProductController.update)
selectedProductRouter.delete("/:id", authAndCheckRole(["USER"]), selectedProductController.delete)

module.exports = selectedProductRouter