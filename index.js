'use strict'

const express = require('express')
const bodyParse = require('body-parser')

const app = express()
const port = process.env.PORT || 3000

// Controllers
const securityCtrl = require('./controllers/user/security')

app.use(bodyParse.urlencoded({ extended: false }))
app.use(bodyParse.json())

app.post('/api/login', securityCtrl.login)

app.listen(port, () => {
	console.log(`Server started on port http://localhost:${port}`)
})