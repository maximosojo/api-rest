'use strict'

const jwt = require('jwt-simple')
const moment = require('moment')
const config = require('../config/config')

function generateToken(user) {
    const ttl = config.JWT_TOKEN_TTL
    const payload = {
        sub: user.id,
        iat: moment().unix(),
        exp: moment().add(ttl.number,ttl.period).unix()
    }
    
    return jwt.encode(payload, config.JWT_PASSPHRASE)
}

function decodeToken(token) {
    const decode = new Promise((resolve, reject) => {
        try {
            const payload = jwt.decode(token, config.JWT_PASSPHRASE)
            if (payload.exp <= moment().unix()) {
                reject({
                code: 401,
                message: 'Expired JWT Token'
                })                
            }

            resolve(payload.sub)
        } catch (err) {
            reject({
                code: 401,
                message: 'JWT Token Error'
            })
        }
    })

    return decode
}

module.exports = {
    generateToken,
    decodeToken
}