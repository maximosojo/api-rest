'use strict'

const BaseEntity = require('./base.entity')
const mapper = require('automapper-js')
const { User } = require('./models')

class UserEntity extends BaseEntity {
  	constructor({ UserRepository }) {
    	super(UserRepository, User)
  	}

  	async login(entity) {
	    entity = mapper(this.entityToMap, entity)
	    const loginEntity = await this._entityRepository.login(entity)
	    return loginEntity
	}
}

module.exports = UserEntity
