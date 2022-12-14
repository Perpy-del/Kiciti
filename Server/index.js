const express = require('express')
const app = express()

const cors = require('cors')
const mongoose = require('mongoose')

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:8080')
app.post('/api/signup', (req, res) => {
    console.log(req.body)
    res.json({ status: 'ok' })
})

app.listen(3001, () => {
    console.log('Server stated')
})