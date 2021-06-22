require('dotenv').config();
const bodyParser =  require('body-parser')
const express = require('express')
const router = require('./routes')
const port = process.env.PORT || 4000
const app = express()

app.use((error, req, res, next)=>{
    res.status(error.status) || 500
    res.json({ error: error.message })
    next(error)
 })
 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(router)

app.listen(port, () => {
    console.log('Escutando na porta: ' + port)
})