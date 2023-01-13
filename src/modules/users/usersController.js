const jwt = require("jsonwebtoken")
const user = require("./../../models/user")
const crypto = require("crypto")

function hashPassword(pwd) {
    return crypto.scryptSync(pwd,'secret',24)
}

module.exports = {
    login: (req, res) => {
        const data = req.body
        
        const credentials = {
            email: data.email,
            password: hashPassword(data.password)
        }
        
        user.findOne(credentials)
            .then(response => {
                if (response) {
                    const { _id, name, email } = response
                    const token = jwt.sign({ _id, name, email}, process.env.JWT_SECRET)
                    res.send({token, name, email})
                } else {
                    res.sendStatus(401)
                }
            }).catch(err => {
                res.sendStatus(400)
            })
    },

    register: (req, res) => {

        const data = req.body
        const hashedPassword = hashPassword(data.password)
        data.password = hashedPassword

        user.create(data)
            .then(response => {
                const {_id, name, email} = response
                res.send(_id, name, email)
            })
            .catch(err => {
                res.sendStatus(400)
            }) 
    }
}