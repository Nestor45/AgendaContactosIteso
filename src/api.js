const router = require('express').Router()

const contactRouter = require("./modules/contacts/contactsRouter")
const userRouter = require("./modules/users/usersRouter")


router.use(contactRouter)

router.use(userRouter)

module.exports = router