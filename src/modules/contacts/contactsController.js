const contact = require('./../../models/contact')

module.exports = {
    getAll: (req, res) => {
        const token = req.headers.authorization
        console.log('Token', token)
        contact.find({status:1})
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.status(400).send('algo salio mal obtener datos :(')
            })
        //res.send("endpoint de contactos controller")
    },
    getContact: (req, res) => {
        const id = req.params.id
        contact.findOne({status:1, _id:id})
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.status(400).send('algo salio mal al informacion por id :(')
            })
    },
    infoNameContact: (req, res) => {
        console.log(req.query)
        const { name } = req.query

        contact.find({name, status:1})
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.status(400).send('algo salio mal al mostrar la informacion por nombre :(')
            })
    },
    infoEmailContact: (req, res) => {
        console.log(req.query)
        const { email } = req.query
        contact.find({email,  status:1})
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.status(400).send('algo salio mal al mostrar la informacion por correo :(')
            })
    },
    create: (req, res) => {
        const data = req.body
        contact.create(data).then(response => {
            res.send(response)
        })
        .catch(err => {
            res.status(400).send('algo salio mal al crear :(')
        })
    },
    updateContact: (req, res) => {
        const id =  req.params.id
        const { name, email, phone, status } = req.body
        contact.findByIdAndUpdate(id, {name, email, phone, status})
            .then(response => {
                res.send(response)
            })
            .catch(err => {
                res.status(400).send("algo salio mal al actulizar :(")
            })
    },
    deleteContact: (req, res) => {
        const id =  req.params.id
        const status = 0
        contact.findByIdAndUpdate(id, {status})
            .then(response => {
                res.send(response)
            })
            .catch(err => {
                res.status(400).send("algo salio mal al eliminar :(")
            })
    }
    //find, findOne, findById, create, save
}