'use strict'

function login(req, res) {
	res.send('Hola Munto desde Login!')
}

function logout(req, res) {

}

exports = {
	login,
	logout
}