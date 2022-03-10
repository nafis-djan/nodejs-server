const receivingService = require("../service/receivingService");

class ReceivingController{
    async get(req, res){
        const receiving = await receivingService.get(req.params.id)
        return res.json(receiving)
    }

    async getAll(req, res){
        const receiving = await receivingService.getAll()
        return res.json(receiving)
    }

    async create(req, res){
        const receiving = await receivingService.create(req.body)
        return res.json(receiving)
    }

    async update(req, res){
        const receiving = await receivingService.update(req.params.id, req.body)
        return res.json(receiving)
    }

    async delete(req, res){
        await receivingService.delete(req.params.id)
        res.json()
    }
}

module.exports = new ReceivingController()