'use strict'

function login(req, res) {
	res.send('Hola Munto desde Login!')
}

function logout(req, res) {
	res.send('NOT IMPLEMENTED: Security logout GET');
}

module.exports = {
	login,
	logout
}