const mongoose = require("mongoose")

const receiving = new mongoose.Schema({
    method: String,
    address: String
})

module.exports = mongoose.model("Receiving", receiving)