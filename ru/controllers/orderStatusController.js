const OrderStatusService = require("../service/orderStatusService");

class OrderStatusController{
    async getAll(req, res){
        res.json(OrderStatusService.getAll());
    }
}

module.exports = new OrderStatusController()