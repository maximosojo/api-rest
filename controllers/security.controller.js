'use strict'

const mapper = require("automapper-js")

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
}

module.exports = SecurityController
