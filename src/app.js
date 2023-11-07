const express = require('express')
const routes = require('./routes/index')
const bodyparser = require('body-parser')
const cors = require('cors')
const dbConn = require('./config/dbConn')
const app = express()

dbConn()
app.use(cors())
app.use(bodyparser.json())
app.use('/v1',routes)

app.listen(5000,()=>{
    console.log('server is ON');
})