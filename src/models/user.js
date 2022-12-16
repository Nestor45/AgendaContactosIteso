const {Schema, model} = require("mongoose")

const userSchema = new Schema({
    name: {type: String},
    password: {type: String},
    email: {type: String},
    status: {type: String, default:1}
})

module.exports = model('users', userSchema)