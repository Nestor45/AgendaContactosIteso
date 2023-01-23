const express = require("express")
const mongoose = require("mongoose")
const apiRoutes = require("./src/api")

require('dotenv').config()

const app = express()

mongoose.set('strictQuery', true);

const port = process.env.PORT || 3000

app.use(apiRoutes)

app.use('/fotos', express.static(__dirname + '/uploads/images'))

app.get('', (req, res) => {
    /* res.send("api works") */
    //res.sendFile(__dirname + '/src/view/index.html')
    res.json({
        state: 'true',
        message: 'Todo cool'
    })
})

const uri = process.env.MONGODB

mongoose.connect(uri, (err) => {
    if(!err) {
        console.log("Se conecto a la BD")
        app.listen(port, () => {
            const env = process.env.NODE_ENV
            if (env == 'local') {
                console.log("app is run in LOCAL port "+port)
            } else {
                console.log("app is run in DEV port "+port)
            }
        })
    } else {
        console.error("No se puedo conectar")
    }
})

