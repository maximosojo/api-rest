'use strict'

const mapper = require('automapper-js')
const { UserDto } = require('./dtos')
const Sequelize = require('sequelize')

class SecurityController {
  constructor({ UserService, ResponseService }) {
    this._userService = UserService
    this._responseService = ResponseService
  }

  async login(req, res) {
    const { body } = req
    this._userService.login(body)
    .then(response => {
      return res.status(200).send(response)
    })
    .catch(response => {
      return res.status(response.code).send(response)
    })
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
