'use strict'

const mapper = require("automapper-js")
const { UserDto } = require("./dtos")
const Sequelize = require('sequelize')

class SecurityController {
  constructor({ UserService }) {
    this._userService = UserService
  }

  async login(req, res) {
    let response = {};
    const { body } = req
    const entity = await this._userService.login(body)
    if (entity && await entity.validPassword(body.password)) {
      response = res.status(200).send({
        token: ""
      })
    } else {
      response = res.status(401).send({
        message: "Bad credentials."
      })
    }

    return response
  }

  async logout(req, res) {
    res.send('NOT IMPLEMENTED: Security logout GET')
  }

  async register(req, res) {
    let response = {}
    
    try {
      const { body } = req
      const entity = await this._userService.create(body)
      response = res.status(200).send({
  		  message: "User successfully created."
      })
    } catch(e) {
      if (e instanceof Sequelize.ValidationError) {
        let message = ""
        e.errors.forEach((error) => {
          message = error.message
        })
        response = res.status(400).send({
          message: message
        })
      }
    }

    return response
  }
}

module.exports = SecurityController
