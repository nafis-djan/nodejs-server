const Order = require("../models/Order")
const OrderStatus = require("../enums/OrderStatus")
const BillStatus = require("../enums/BillStatus")
const goodsService = require("./goodsService")
const userService= require("./userService")
const SelectedProduct = require("../models/SelectedProduct")

class OrderService{

    async get(id) {
        return Order.findById(id);
    }

    async getByUserEmailAndOrderStatus(userEmail, orderStatus) {
        const user = await userService.getByEmail(userEmail);
        return Order.findOne({user: user, orderStatus: orderStatus})
    }

    async getAllByOrderStatus(orderStatus){
        return Order.find({orderStatus: orderStatus})
    }

    async getAllByUserEmail(email){
        const user = await userService.getByEmail(email);
        return Order.find({user: user._id});
    }

    async getAll() {
        return Order.find();
    }

    async create(userEmail, selectedProduct, price) {
        const user = await userService.getByEmail(userEmail);
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
            await this.reduceOrReturnGoodsCount(orderFromDB, "reduce");
        } else if (order.orderStatus === "CANCELLED") {
            await this.reduceOrReturnGoodsCount(orderFromDB, "return");
        }
        
        return Order.findByIdAndUpdate(id, order, {new: true});
    }

     async reduceOrReturnGoodsCount(orderFromDB, operationType) {
        const selProducts = await orderFromDB.selectedProducts;
         for (const selProductId of selProducts) {
             const selProduct = await SelectedProduct.findById(selProductId);
             const goods = await goodsService.get(selProduct.goods);

             const selectedCount = selProduct.count;
             const oldCount = goods.count;

             if(operationType === "reduce"){
                 goods.count = oldCount - selectedCount;
             } else if (operationType === "return"){
                 goods.count = oldCount + selectedCount;
             }

             await goodsService.update(goods._id, goods);
         }
    }

    async delete(id) {
        await Order.findByIdAndDelete(id)
    }
}

module.exports = new OrderService()