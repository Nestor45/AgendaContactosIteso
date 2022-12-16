const jwt = require("jsonwebtoken")
const user = require("../../models/user")

module.exports = {
    login: (req, res) => {
        const credenciales = req.body
        user.findOne(credenciales)
            .then(response => {
                if (response) {
                    const { _id, name } = response
                    const token = jwt.sing({ _id, name}, 'holamundo')
                    res.send(token)
                } else {
                    res.sendStatus(401)
                }
            }).catch(err => {
                res.sendStatus(400)
            })
    }
}