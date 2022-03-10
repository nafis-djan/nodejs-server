const Router = require("express")
const authRouter = new Router()
const authController = require("../controllers/authController")

authRouter.post("/login", authController.login)
authRouter.post("/sign-up", authController.signUp)

module.exports = authRouter