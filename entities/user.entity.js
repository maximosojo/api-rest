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
	    return await this._entityRepository.login(entity)
	}
}

module.exports = UserEntity
