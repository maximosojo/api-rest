'use strict'

const mapper = require("automapper-js")
const { UserDto } = require("./dtos")
const Sequelize = require('sequelize')

class SecurityController {
  constructor({ UserService }) {
    this._userService = UserService
  }

  async login(req, res) {
    res.send('Hola Munto desde Login!')
  }

  async logout(req, res) {
    res.send('NOT IMPLEMENTED: Security logout GET')
  }

  async register(req, res) {
    const response = {}
    
    try {
      const { body } = req
      const createdUser = await this._userService.create(body)
      const user = mapper(UserDto, createdUser)
      const response = res.status(200).send({
  		  message: "User successfully created."
      })
    } catch(e) {
      if (e instanceof Sequelize.ValidationError) {
        let message = ""
        e.errors.forEach((error) => {
          message = error.message
        })
        const response = res.status(400).send({
          message: message
        })
      }
    }

    return response
  }
}

module.exports = SecurityController
