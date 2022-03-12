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

    async update(email, user) {
        return User.findOneAndUpdate({email : email}, user, {new: true});
    }

    async delete(email) {
        await User.findOneAndDelete({email : email});
    }
}

module.exports = new UserService()