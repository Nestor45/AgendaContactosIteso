const router = require('express').Router()
const express = require('express')

const contactsController = require('./contactsController')

router.get("/contacts",contactsController.getAll) //RUTA PARA OBTENER A TODOS LOS CONTACTOS
router.get("/contact/:id",contactsController.getContact) // RUTA PARA OBTNER LA INFO DEL CONTACTO
router.post('/contact', express.json(), contactsController.create) // RUTA PARA CREAR UN CONTACTO
router.put("/contact/:id", express.json(), contactsController.updateContact) // RUTA PARA ACTULIZAR UN CONTACTO
router.put("/contactDelete/:id", contactsController.deleteContact) // RUTA PARA ELIMINAR UN CONTACTO (solo se modifica el status)
router.get("/contactFilterName",contactsController.infoNameContact) //RUTA PARA FILTRAR nombre
router.get("/contactFilterEmail",contactsController.infoEmailContact) //RUTA PARA FILTRAR email

module.exports = router