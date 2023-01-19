const router = require('express').Router()
const express = require('express')
const multer = require('multer')

const authMiddleware = require('../../middlewares/auth')

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'uploads/images')
    },
    filename: (req, file, callback) => {
        const extension = file.originalname.split('.').pop()
        let name = new Date().getTime() +"."+ extension
        callback(null, name)
    }
})

/* function filtrar (req, file, callback) {
    callback(null, false)
} */

const filter = (req, file, callback) => {
    const isValid = file.mimetype === 'image'
    callback(null, isValid)
}

const upload = multer({ storage: storage, fileFilter: filter });

const contactsController = require('./contactsController')
router.use('/api',authMiddleware)
router.get("/api/contacts",contactsController.getAll) //RUTA PARA OBTENER A TODOS LOS CONTACTOS
router.get("/api/contact/:id",contactsController.getContact) // RUTA PARA OBTNER LA INFO DEL CONTACTO
router.post('/api/contact', express.json(), upload.single('foto'),contactsController.create) // RUTA PARA CREAR UN CONTACTO
router.put("/api/contact/:id", express.json(), contactsController.updateContact) // RUTA PARA ACTULIZAR UN CONTACTO
router.put("/api/contactDelete/:id", contactsController.deleteContact) // RUTA PARA ELIMINAR UN CONTACTO (solo se modifica el status)
router.get("/api/contactFilterName",contactsController.infoNameContact) //RUTA PARA FILTRAR nombre
router.get("/api/contactFilterEmail",contactsController.infoEmailContact) //RUTA PARA FILTRAR email

module.exports = router