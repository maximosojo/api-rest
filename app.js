'use strict'

const express = require('express')
const bodyParse = require('body-parser')

const app = express()

// Controllers
const securityCtrl = require('./controllers/user/security')

app.use(bodyParse.urlencoded({ extended: false }))
app.use(bodyParse.json())

app.post('/api/login', securityCtrl.login)

module.exports = app