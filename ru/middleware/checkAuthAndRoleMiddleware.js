const jwt = require("jsonwebtoken")

module.exports = function(roles) {
    return function (req, res, next) {
        if (req.method === "OPTIONS") {
            next();
        }
        try {
            const token = req.headers.authorization
            if (!token) {
                return res.status(401).json({message: "Unauthorized"})
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY);

            if(!checkRole(decoded.role, roles)){
                return res.status(403).json({message: "Forbidden"});
            }

            req.user = decoded;
            next();
        } catch (e) {
            res.status(401).json({message: "Unauthorized"});
        }
    }
}

function checkRole(checkedRole, roles){
    let isCompared = false;
    let role;
    for(role of roles) {
        if (checkedRole === role) {
            isCompared = true;
            return isCompared;
        }
    }
}