'use strict'

const Sequelize = require('sequelize')

const User = sequelize.define('users',{
	id: { type: Sequelize.SMALLINT, primaryKey: true },
	email: { type: Sequelize.STRING, unique: true, lowercase: true },
	password: { type: Sequelize.STRING, select: false },
	createdAt: { type: Sequelize.DATE, default: Date.now() }
	lastLogin: Sequelize.DATE
})