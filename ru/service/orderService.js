const Order = require("../models/Order")
const OrderStatus = require("../enums/OrderStatus")
const BillStatus = require("../enums/BillStatus")
const PaymentType = require("../enums/PaymentType")
const goodsService = require("./goodsService")
const selProductService = require("./selectedProductService")

class OrderService{

    async get(id) {
        return Order.findById(id);
    }

    async getByUserIdAndOrderStatus(userId, orderStatus){
        return Order.findOne({user: userId, orderStatus: orderStatus})
    }

    async getAllByOrderStatus(orderStatus){
        return Order.find({orderStatus: orderStatus})
    }

    async getAll() {
        return Order.find();
    }

    async create(user, selectedProduct, price) {
        const order = new Order();

        order.user = user;
        order.totalPrice = price;
        order.selectedProducts = selectedProduct;
        order.orderStatus = OrderStatus.content.find(el => el === "CREATING");
        order.billStatus = BillStatus.content.find(el => el === "AWAITING_PAYMENT");

        return Order.create(order)
    }

    async update(id, order) {
        const orderFromDB = await this.get(id);

        if(order.orderStatus === "PENDING") {
            await this.decGoodsCount(orderFromDB);
        } else if (order.orderStatus === "CANCELLED") {
            await this.returnGoodsCount(orderFromDB);
        }
        
        return Order.findByIdAndUpdate(id, order, {new: true});
    }

     async decGoodsCount(orderFromDB) {
        const selProducts = await orderFromDB.selectedProducts;
         for (const selProductId of selProducts) {
             const selProduct = await selProductService.get(selProductId);
             const goods = await goodsService.get(selProduct.goods);

             const selectedCount = selProduct.count;
             const oldCount = goods.count;

             goods.count = oldCount - selectedCount;
             await goodsService.update(goods._id, goods);
         }
    }

    async returnGoodsCount(orderFromDB) {
        const selProducts = await orderFromDB.selectedProducts;
        for (const selProductId of selProducts) {
            const selProduct = await selProductService.get(selProductId);
            const goods = await goodsService.get(selProduct.goods);

            const selectedCount = selProduct.count;
            const oldCount = goods.count;

            goods.count = oldCount + selectedCount;
            await goodsService.update(goods._id, goods);
        }
    }

    async delete(id) {
        await Order.findByIdAndDelete(id)
    }
}

module.exports = new OrderService()