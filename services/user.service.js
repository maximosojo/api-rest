'use strict'

const BaseService = require("./base.service")

class UserService extends BaseService {
  constructor({ UserEntity }) {
    super(UserEntity)
  }

  async login(login) {
    const entity = await this._entity.login(login)
    return entity
  }
}

module.exports = UserService