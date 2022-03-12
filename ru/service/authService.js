const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt");
const userService = require("./userService")
const apiError = require("../error/ApiError")

class AuthService {

    async login(user) {
        const userFromDB = await userService.getByEmail(user.email);
        if(userFromDB === null){
            return apiError.notFound("User not found");
        }
        if (user.role !== userFromDB.role) {
            return apiError.forbidden("Forbidden");
        }

        let comparePassword = bcrypt.compareSync(user.password, userFromDB.password);
        if(!comparePassword) {
            return apiError.forbidden("The password is not valid");
        }

        return this.generateJwt(userFromDB.id, userFromDB.email, userFromDB.role);
    }

    async signUp(user) {
        user.password = await bcrypt.hash(user.password, 5);

        const createdUser = await userService.create(user);

        return this.generateJwt(createdUser.id, createdUser.email, createdUser.role)
    }

    async generateJwt(id, email, role){
        return jwt.sign(
            {id: id, email, role},
            process.env.SECRET_KEY
        );
    }
}

module.exports = new AuthService()