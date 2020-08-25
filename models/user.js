'use strict'

const { Model } = require('sequelize')
const bcrypt = require('bcrypt-nodejs')

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {
      // define association here
    }
  }

  user.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isLowercase:{
          msg: 'Please enter lowercase value.'
        },
        notEmpty: {
          msg: 'Please enter your username.'
        },
        notNull: {
          msg: 'Please enter your username.'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isLowercase:{
          msg: 'Please enter lowercase value.'
        },
        notEmpty: {
          msg: 'Please enter your email.'
        },
        notNull: {
          msg: 'Please enter your email.'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Please enter your password.'
        },
        notNull: {
          msg: 'Please enter your password.'
        }
      }
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },
    lastLogin: {
      type: DataTypes.DATE
    },
    confirmationToken: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'User',
    paranoid: true,
    underscored: true,
    tableName: 'users',
    hooks: {
      beforeCreate: (user) => {
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(user.password, salt);
      }
    }
  })

  user.prototype.validPassword = async function(password) {
      return await bcrypt.compareSync(password, this.password);
  }
  
  return user
}