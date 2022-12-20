const jwt = require("jsonwebtoken")
const user = require("./../../models/user")

module.exports = {
    login: (req, res) => {
        const credentials = req.body
        console.log(credentials)
        user.findOne(credentials)
            .then(response => {
                if (response) {
                    console.log("ok", response)
                    const { _id, name } = response
                    const token = jwt.sign({ _id, name}, 'holamundo')
                    res.send(token)
                } else {
                    res.sendStatus(401)
                }
            }).catch(err => {
                res.sendStatus(400)
            })
    },
    register: (req, res) => {
        const data = req.body
        user.create(data)
            .then(response => {
                res.send(response)
            })
            .catch(err => {
                res.sendStatus(400)
            }) 
    }
}