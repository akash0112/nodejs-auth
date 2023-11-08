const express = require('express')
const auth = require('../middlewares/auth.middleware')
const Indexrouter = express.Router()
const authRoutes = require('./auth.route')
const customerRoutes = require('./customer.route')

Indexrouter.use('/auth',authRoutes)
Indexrouter.use('/customers',auth,customerRoutes)


module.exports=Indexrouter

