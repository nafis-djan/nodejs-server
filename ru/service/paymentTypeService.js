const PaymentType = require("../enums/PaymentType");

class PaymentTypeService{
    getAll(){
        return PaymentType;
    }
}

module.exports = new PaymentTypeService();