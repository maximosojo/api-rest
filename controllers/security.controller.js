'use strict'

const mapper = require('automapper-js')
const { UserDto } = require('./dtos')
const Sequelize = require('sequelize')
const TokenService = require('../services/token.service')

class SecurityController {
  constructor({ UserService, ResponseService }) {
    this._userService = UserService
    this._responseService = ResponseService
  }

  async login(req, res) {
    let response = {};
    const { body } = req
    const entity = await this._userService.login(body)
    if (entity && await entity.validPassword(body.password)) {
      let content = {
        token: TokenService.generateToken(entity)
      }
      response = this._responseService.create(res,content)
    } else {
      response = this._responseService.error(res,'Bad credentials.',401)
    }

    return response
  }
  
  async register(req, res) {
    let response = {}
    
    try {
      const { body } = req
      const entity = await this._userService.create(body)
      response = this._responseService.message(res,'User successfully created.')
    } catch(e) {
      if (e instanceof Sequelize.ValidationError) {
        let message = ''
        e.errors.forEach((error) => {
          message = error.message
        })
        response = this._responseService.error(res,message)
      }
    }

    return response
  }

  async profile(req, res) {
    let response = this._responseService.message(res,'User access.')
    return response
  }
}

module.exports = SecurityController
