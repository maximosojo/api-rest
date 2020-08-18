const BaseEntity = require("./base.entity");
const { User } = require("../models");

class UserEntity extends BaseEntity {
  constructor({ UserRepository }) {
    super(UserRepository, User);
  }
}

module.exports = UserEntity;
