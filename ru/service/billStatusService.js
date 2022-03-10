const BillStatus = require("../enums/BillStatus");

class BillStatusService{
    getAll() {
        return BillStatus;
    }
}

module.exports = new BillStatusService();