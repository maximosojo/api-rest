'use strict'

const BaseService = require("./base.service")

class UserService extends BaseService {
  constructor({ UserEntity }) {
    super(UserEntity)
  }
}

module.exports = UserService