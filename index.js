'use strict'

const app = require('./app')
const config = require('./config')

app.listen(config.port, () => {
	console.log(`Server started on port http://localhost:${config.port}`)
})