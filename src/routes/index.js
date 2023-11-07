const express = require('express')
const Indexrouter = express.Router()
const authRoutes = require('./auth.route')

Indexrouter.use('/auth',authRoutes)


module.exports=Indexrouter

