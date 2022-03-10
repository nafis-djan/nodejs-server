const Goods = require("../models/Goods")
const apiHandler = require("../error/ApiError")

class GoodsService {

    async get(id) {
        const goods = await Goods.findById(id);
        if(goods === null){
            return apiHandler.notFound("Goods not found");
        }
        return goods;
    }

    async getByName(name) {
        const goods = await Goods.findOne({name: name})
        if(goods === null){
            return apiHandler.notFound("Goods not found");
        }
        return goods;
    }

    async getAll() {
        return Goods.find()
    }

    async create(goods) {
        return Goods.create(goods)
    }

    async update(id, goods) {
        const updatedGoods = await Goods.findByIdAndUpdate(id, goods, {new: true});
        if(updatedGoods === null){
            return apiHandler.notFound("Goods not found");
        }
        return updatedGoods;
    }

    async delete(id) {
        const goods = await Goods.findByIdAndDelete(id);
        if(goods === null){
            return apiHandler.notFound("Goods not found");
        }
    }
}

module.exports = new GoodsService()