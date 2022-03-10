const authService = require("../service/authService");

class AuthController{

    async login(req, res){
        const token = await authService.login(req.body);
        res.json({token});
    }

    async signUp(req, res){
        const token = await authService.signUp(req.body);
        res.json({token});
    }
}

module.exports = new AuthController()