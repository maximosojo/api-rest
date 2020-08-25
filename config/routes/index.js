'use strict'

const { Router } = require('express')
const bodyParser = require('body-parser')

module.exports = function({ SecurityRoutes }) {
  const router = Router()
  const apiRoute = Router()

  apiRoute.use(bodyParser.urlencoded({ extended: false }))
  apiRoute.use(bodyParser.json())

  apiRoute.use('/', SecurityRoutes)
  router.use('/api', apiRoute)

  return router
}
