'use strict'

const { Router } = require('express')

module.exports = function({ SecurityController, AuthMiddleware }) {
  	const router = Router()

  	router.post('/login', SecurityController.login.bind(SecurityController))
	router.post('/register', SecurityController.register.bind(SecurityController))
	router.get('/profile', AuthMiddleware.isAuth, SecurityController.profile.bind(SecurityController))

  	return router
}
