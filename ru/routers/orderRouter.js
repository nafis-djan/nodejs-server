const Router = require("express")
const orderRouter = new Router()
const orderController = require("../controllers/orderController")
const authAndCheckRole = require("../middleware/checkAuthAndRoleMiddleware")

orderRouter.get("/:id", authAndCheckRole(["USER", "EMPLOYEE"]), orderController.get)
orderRouter.get("/", authAndCheckRole(["USER", "EMPLOYEE"]), orderController.getAll)
orderRouter.get("/order-status/:orderStatus", authAndCheckRole(["USER", "EMPLOYEE"]), orderController.getAllByOrderStatus)
orderRouter.get("/user-email/:email", authAndCheckRole(["USER"]), orderController.getAllByUserEmail)
orderRouter.put("/:id", authAndCheckRole(["USER", "EMPLOYEE"]), orderController.update)
orderRouter.delete("/:id", authAndCheckRole(["EMPLOYEE"]), orderController.delete)

module.exports = orderRouter