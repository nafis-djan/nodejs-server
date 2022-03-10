const BillStatusService = require("../service/billStatusService");

class BillStatusController{
    async getAll(req, res){
        res.json(BillStatusService.getAll());
    }
}

module.exports = new BillStatusController()