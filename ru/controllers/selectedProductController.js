const selectedProductService = require("../service/selectedProductService")

class SelectedProductController{
    async getAll(req, res){
        const selectedProduct = await selectedProductService.getAll()
        return res.json(selectedProduct)
    }

    async create(req, res){
        const userId = req.query.userId
        const goodsId = req.query.goodsId
        const selectedProduct = await selectedProductService.create(req.body, userId, goodsId)
        return res.json(selectedProduct)
    }


    async update(req, res){
        const selectedProduct = await selectedProductService.update(req.params.id, req.body)
        return res.json(selectedProduct)
    }

    async delete(req, res){
        await selectedProductService.delete(req.params.id)
        res.json()
    }
}

module.exports = new SelectedProductController()