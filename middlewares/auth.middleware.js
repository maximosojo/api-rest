'use strict'

const TokenService = require('../services/token.service')

class AuthMiddleware {
  isAuth(req, res, next) {
    if (!req.headers.authorization) {
      const content = {
        code: 403,
        message: 'JWT Token not found'
      }
      return res.status(content.code).send(content)
    }

    const token = req.headers.authorization.split(' ')[1]

    TokenService.decodeToken(token)
    .then(response => {
      req.user = response
      next()
    })
    .catch(response => {
      return res.status(response.code).send(response)
    })
  }
}

module.exports = AuthMiddleware