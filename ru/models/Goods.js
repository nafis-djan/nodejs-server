const mongoose = require("mongoose")

const goods = new mongoose.Schema({
    name: {type : String, required: true, unique: true},
    price: {type : Number, required: true},
    count: {type : Number, required: true},
    imageUrl: {type : String, required: true},
    category: String,
    producer: String
})

module.exports = mongoose.model("Goods", goods)