'use strict'

const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {
      // define association here
    }
  }

  user.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    lastLogin: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'user',
  })
  
  return user
}