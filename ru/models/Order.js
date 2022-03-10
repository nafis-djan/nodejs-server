const mongoose = require("mongoose")
const selectedProduct = require("./SelectedProduct")
const receiving = require("./Receiving")
const user = require("./User")

const order = new mongoose.Schema({
    totalPrice: Number,
    billStatus: String,
    orderStatus: String,
    paymentType: String,
    selectedProducts: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: selectedProduct
    }],
    receiving: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: receiving
    },
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: user
    }
})

module.exports = mongoose.model("Order", order)