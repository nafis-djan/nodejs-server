const Router = require("express")
const userRouter = new Router()
const userController = require("../controllers/userController")
const authAndCheckRole = require("../middleware/checkAuthAndRoleMiddleware")

userRouter.get("/:id", authAndCheckRole(["USER", "EMPLOYEE","ADMIN"]), userController.get)
userRouter.get("/role/:role", authAndCheckRole(["USER", "EMPLOYEE","ADMIN"]), userController.getAllByRole)
userRouter.get("/email/:email", authAndCheckRole(["USER", "EMPLOYEE","ADMIN"]), userController.getByEmail)
userRouter.post("/", authAndCheckRole(["USER","ADMIN"]), userController.create)
userRouter.put("/:id", authAndCheckRole(["USER","ADMIN"]), userController.update)
userRouter.delete("/:id", authAndCheckRole(["ADMIN"]), userController.delete)

module.exports = userRouter