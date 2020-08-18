'use strict'

const { Router } = require("express")

module.exports = function({ SecurityController }) {
  	const router = Router()

  	router.post('/login', SecurityController.login.bind(SecurityController))
	router.get('/logout', SecurityController.logout.bind(SecurityController))

  	return router
}
