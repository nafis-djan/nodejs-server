const orderService = require("../service/orderService");

class OrderController{
    async get(req, res){
        const order = await orderService.get(req.params.id)
        return res.json(order)
    }

    async getAllByOrderStatus(req, res){
        const order = await orderService.getAllByOrderStatus(req.params.orderStatus)
        return res.json(order)
    }

    async getAll(req, res){
        const order = await orderService.getAll()
        return res.json(order)
    }

    async update(req, res){
        const order = await orderService.update(req.params.id, req.body)
        return res.json(order)
    }

    async delete(req, res){
        await orderService.delete(req.params.id)
        res.json()
    }
}

module.exports = new OrderController()