'use strict'

const mapper = require("automapper-js")
const { UserDto } = require("./dtos")

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
    const { body } = req
    const createdUser = await this._userService.create(body)
    const user = mapper(UserDto, createdUser)
    return res.status(200).send({
		payload: user
    })
  }
}

module.exports = SecurityController
