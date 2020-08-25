'use strict'

const jwt = require('jwt-simple')
const moment = require('moment')
const config = require('../config/config')

class AuthMiddleware {

  async isAuth(req, res, next) {
    if (!req.headers.authorization) {
      const content = {
        code: 403,
        message: 'JWT Token not found'
      }
      return res.status(content.code).send(content)
    }

    const token = req.headers.authorization.split(' ')[1]
    try{
      const payload = jwt.decode(token, config.JWT_PASSPHRASE)
      if (payload.exp <= moment().unix()) {
        const content = {
          code: 401,
          message: 'Expired JWT Token'
        }
        return res.status(content.code).send(content)
      }

      req.user = payload.sub
      next()
    } catch(e){
      const content = {
        code: 403,
        message: 'JWT Token error'
      }
      return res.status(content.code).send(content)
    }
  }
}

module.exports = AuthMiddleware