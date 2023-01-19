const {Schema, model} = require("mongoose")

const contactsSchema = new Schema({
    name: { type:String, required:true},
    email: { type:String, required:true},
    phone: { type:String },
    status: { type:Number, default:1 },
    userId: { type: String },
    photoUrl: {type: String}
})

module.exports = model('contacts',contactsSchema)