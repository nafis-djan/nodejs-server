const User = require("../models/User")

class UserService {

    async get(id) {
        return User.findById(id);
    }

    async getAllByRole(role) {
        return User.find({role: role})
    }

    async getByEmail(email) {
        return User.findOne({email: email})
    }

    async getAll() {
        return User.find()
    }

    async create(user) {
        return User.create(user)
    }

    async update(id, user) {
        return User.findByIdAndUpdate(id, user, {new: true});
    }

    async delete(id) {
        await User.findByIdAndDelete(id)
    }
}

module.exports = new UserService()