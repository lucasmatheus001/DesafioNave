const bodyParser =  require('body-parser')
const express = require('express')
const port = process.env.PORT || 4000
const app = express()
app.use(bodyParser.json())

app.use('/api', require('./src/controllers/NaversController').router)
app.use('/api', require('./src/controllers/ProjectsController').router)

app.listen(port, () => {
    console.log('Escutando na porta: ' + port)
})