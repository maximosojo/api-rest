'use strict'

const BaseService = require('./base.service')
const jwt = require('jwt-simple')
const moment = require('moment')

class UserService extends BaseService {
  constructor({ UserEntity, config}) {
    super(UserEntity)
    this._config = config
  }

  async login(login) {
    const entity = await this._entity.login(login)
    return entity
  }
}

module.exports = UserService