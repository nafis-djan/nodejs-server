const goodsService = require("../service/goodsService")

class GoodsController{
    async get(req, res){
        const goods = await goodsService.get(req.params.id)
        return res.json(goods)
    }

    async getAllByName(req, res){
        const goods = await goodsService.getByName(req.params.name)
        return res.json(goods)
    }

    async getAll(req, res){
        const goods = await goodsService.getAll()
        return res.json(goods)
    }

    async create(req, res){
        const goods = await goodsService.create(req.body)
        return res.json(goods)
    }

    async update(req, res){
        const goods = await goodsService.update(req.params.id, req.body)
        return res.json(goods)
    }

    async delete(req, res){
        await goodsService.delete(req.params.id)
        res.json()
    }
}

module.exports = new GoodsController()