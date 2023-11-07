const express = require('express')
const router = express.Router()
const controllers= require('../controllers/index')

router.post('/login',controllers.authControllers.authLoginController)
router.post('/signup',controllers.authControllers.authSignupController)



module.exports= router