const OrderStatus = require("../enums/OrderStatus");

class OrderStatusService{
    getAll(){
        return OrderStatus;
    }
}

module.exports = new OrderStatusService();