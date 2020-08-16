'use strict'

const express = require('express')
const bodyParse = require('body-parser')

const app = express()
const api = require('./routes')

app.use(bodyParse.urlencoded({ extended: false }))
app.use(bodyParse.json())
app.use('/api',api)

module.exports = app