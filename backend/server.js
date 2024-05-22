const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const employeeModel = require('./models/Users')

const app = express()
app.use(express.json())
app.use(cors())

const username = encodeURIComponent('venu')
const password = encodeURIComponent('Venu@1234')
let uri = `mongodb+srv://${username}:${password}@cluster0.ec58wrw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

mongoose
  .connect(uri)
  .then(() => console.log('connected'))
  .catch(error => console.log(error))

app.post('/register', (req, res) => {
  employeeModel
    .create(req.body)
    .then(emp => res.json(emp))
    .then(err => console.log(err))
})

app.listen(5000, () => {
  console.log('server is running')
})
