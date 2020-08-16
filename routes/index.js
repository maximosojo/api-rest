'use strict'

const express = require('express')
const api = express.Router()

const securityCtrl = require('../controllers/user/security')

api.post('/login', securityCtrl.login)
api.get('/logout', securityCtrl.logout)

module.exports = api