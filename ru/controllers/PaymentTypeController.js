const PaymentTypeService = require("../service/paymentTypeService");

class PaymentTypeController{
    async getAll(req, res){
        res.json(PaymentTypeService.getAll());
    }
}

module.exports = new PaymentTypeController()