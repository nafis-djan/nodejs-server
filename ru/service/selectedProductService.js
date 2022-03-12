const SelectedProduct = require("../models/SelectedProduct")
const goodsService = require("./goodsService")
const orderService = require("./orderService")

class SelectedProductService {
    async get(id) {
        return SelectedProduct.findById(id);
    }

    async getAll() {
        return SelectedProduct.find()
    }

    async create(selectedProduct, userEmail, goodsId) {
        const goods = await goodsService.get(goodsId);

        selectedProduct.goods = goods;
        const newPrice = selectedProduct.count * goods.get("price");
        selectedProduct.price = newPrice;

        const createdSelProduct = await SelectedProduct.create(selectedProduct);

        const order = await orderService.getByUserEmailAndOrderStatus(userEmail, "CREATING");
        if(order !== null) {
            const oldPrice = order.totalPrice;
            order.totalPrice = newPrice + oldPrice;
            order.selectedProducts.push(createdSelProduct);
            await orderService.update(order._id, order);
        } else {
            await orderService.create(userEmail, createdSelProduct, newPrice);
        }

        return createdSelProduct;
    }


    async update(id, selectedProduct) {
        return SelectedProduct.findByIdAndUpdate(id, selectedProduct, {new: true});
    }


    async delete(id) {
        await SelectedProduct.findByIdAndDelete(id)
    }
}

module.exports = new SelectedProductService()