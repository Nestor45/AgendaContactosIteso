const jwt = require("jsonwebtoken")

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
        if (err) {
            res.sendStatus(401)
            return
        }
        req.userId = decode._id
        next();
    })
}

module.exports = authMiddleware