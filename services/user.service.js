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

  async generateToken(user) {
  	const payload = {
  		sub: user.id,
  		iat: moment().unix(),
  		exp: moment().add(14, 'days').unix()
  	}
  	
  	return jwt.encode(payload, this._config.JWT_PASSPHRASE)
  }
}

module.exports = UserService