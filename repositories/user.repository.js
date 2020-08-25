'use strict'

const BaseRepository = require("./base.repository")

class UserRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "User")
  }

  async login(entity) {
  	const user = this._db[this.entity].findOne({ where: { username: entity.username } })
  	return user
  }
}

module.exports = UserRepository