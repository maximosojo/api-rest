'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {
      // define association here
    }
  }

  user.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastLogin: {
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'User',
    paranoid: true,
    underscored: true,
    tableName: 'users'
  })
  
  return user
}