const router = require('express').Router()
const express = require('express')
const usersController = require('./usersController')
 
router.post('/register', express.json(), usersController.register) // RUTA PARA CREAR UN USUARIO

module.exports = router