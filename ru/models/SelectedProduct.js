const mongoose = require("mongoose")
const goods = require("./Goods")

const selectedProduct = new mongoose.Schema({
    count: Number,
    price: Number,
    goods: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: goods
    }
})

module.exports = mongoose.model("SelectedProduct", selectedProduct)
