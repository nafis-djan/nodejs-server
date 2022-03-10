const mongoose = require("mongoose")

const user = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    password: String,
    role: String
})

module.exports = mongoose.model("User", user)

