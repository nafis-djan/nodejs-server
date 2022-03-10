const Router = require("express")
const goodsRouter = new Router()
const goodsController = require("../controllers/goodsController")
const authAndCheckRole = require("../middleware/checkAuthAndRoleMiddleware")

goodsRouter.get("/:id", goodsController.get)
goodsRouter.get("/", goodsController.getAll)
goodsRouter.get("/:name", goodsController.getAllByName)
goodsRouter.post("/", authAndCheckRole(["ADMIN"]), goodsController.create)
goodsRouter.put("/:id", authAndCheckRole(["ADMIN"]), goodsController.update)
goodsRouter.delete("/:id", authAndCheckRole(["ADMIN"]), goodsController.delete)

module.exports = goodsRouter