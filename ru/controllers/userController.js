const userService = require("../service/userService");

class UserController{
    async get(req, res){
        const user = await userService.get(req.params.id)
        return res.json(user)
    }

    async getByEmail(req, res){
        const user = await userService.getByEmail(req.params.email)
        return res.json(user)
    }

    async getAllByRole(req, res){
        const user = await userService.getAllByRole(req.params.role)
        return res.json(user)
    }

    async create(req, res){
        const user = await userService.create(req.body)
        return res.json(user)
    }

    async update(req, res){
        const user = await userService.update(req.params.email, req.body)
        return res.json(user)
    }

    async delete(req, res){
        await userService.delete(req.params.email)
        res.json()
    }
}

module.exports = new UserController()