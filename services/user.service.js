'use strict'

const BaseService = require('./base.service')
const TokenService = require('./token.service')

class UserService extends BaseService {
  constructor({ UserEntity, config}) {
    super(UserEntity)
    this._config = config
  }

  async login(login) {
    const entity = await this._entity.login(login)
    const promise = new Promise((resolve,reject) => {
        try {
            if (!entity && !entity.validPassword(login.password)) {
                reject({
                    code: 401,
                    message: 'Bad credentials.'
                })
            } else if(entity.enabled == false){
                reject({
                    code: 401,
                    message: "Disabled user."
                })
            }

            resolve({
              token: TokenService.generateToken(entity)
            })
        } catch (err) {
            console.log(err)
            reject({
                code: 401,
                message: 'Error credentials.'
            })
        }
    })

    return promise
  }
}

module.exports = UserService