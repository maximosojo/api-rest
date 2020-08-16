'use strict'

const express = require('express')
const bodyParse = require('body-parser')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParse.urlencoded({ extended: false }))
app.use(bodyParse.json())

app.get('/', function (req, res) {
	res.send('Hola Munto!')
})

app.listen(port, () => {
	console.log(`Server initialize in http://localhost:${port}`)
})