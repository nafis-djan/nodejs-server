const Receiving = require("../models/Receiving")

class ReceivingService {

    async get(id) {
        return Receiving.findById(id);
    }

    async getAll() {
        return Receiving.find()
    }

    async create(receiving) {
        return Receiving.create(receiving)
    }

    async update(id, receiving) {
        return Receiving.findByIdAndUpdate(id, receiving, {new: true});
    }

    async delete(id) {
        await Receiving.findByIdAndDelete(id)
    }
}

module.exports = new ReceivingService()