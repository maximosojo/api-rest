'use strict'

const { asClass, createContainer, asFunction, asValue } = require('awilix')

// Server
const StartUp = require('./startup')
const Server = require('./server')
const config = require('./config')
const db = require('../models')

// Routes
const Routes = require('./routes')
const SecurityRoutes = require('./routes/security.routes')

// controllers
const { SecurityController } = require('../controllers')

// Entities
const { UserEntity } = require('../entities')

// Middlewares
const { AuthMiddleware } = require('../middlewares')

// services
const { UserService, ResponseService } = require('../services')

// repositories
const { UserRepository } = require('../repositories')

// Container
const container = createContainer()

container
  	.register({
    	app: asClass(StartUp).singleton(),
    	router: asFunction(Routes).singleton(),
    	server: asClass(Server).singleton(),
    	SecurityController: asClass(SecurityController).singleton(),
    	SecurityRoutes: asFunction(SecurityRoutes).singleton(),
	})
	.register({
    	config: asValue(config)
  	})
	.register({
		db: asValue(db)
	})
	.register({
		AuthMiddleware: asClass(AuthMiddleware).singleton()
	})
	.register({
	    UserService: asClass(UserService).singleton(),
	    ResponseService: asClass(ResponseService).singleton()
	})
	.register({
		UserRepository: asClass(UserRepository).singleton()
	})
	.register({
		UserEntity: asClass(UserEntity).singleton()
	})

module.exports = container