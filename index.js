'use strict'

const app = require('./app')
const config = require('./config/config')
const Sequelize = require('sequelize')

const sequelize = new Sequelize(config.db.database,config.db.username,config.db.password,{
	host: config.db.host,
	dialect: 'mysql'
})

sequelize.authenticate()
	.then(() => {
		console.log("Conection success.")
		app.listen(config.port, () => {
			console.log(`Server started on port http://localhost:${config.port}`)
		})	
	})
	.catch(err => {
		console.log("Conection error.")
	})