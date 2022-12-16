const {Schema, model} = require("mongoose")

const contactsSchema = new Schema({
    name: { type:String },
    email: { type:String },
    phone: { type:String },
    status: { type:Number, default:1 },
    userId: { type: String }
})

module.exports = model('contacts',contactsSchema)