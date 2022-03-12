const selectedProductService = require("../service/selectedProductService")

class SelectedProductController{
    async get(req, res){
        const selectedProduct = await selectedProductService.get(req.params.id)
        return res.json(selectedProduct)
    }

    async getAll(req, res){
        const selectedProduct = await selectedProductService.getAll()
        return res.json(selectedProduct)
    }

    async create(req, res){
        const userEmail = req.query.userEmail
        const goodsId = req.query.goodsId
        const selectedProduct = await selectedProductService.create(req.body, userEmail, goodsId)
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