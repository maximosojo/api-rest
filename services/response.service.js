'use strict'

class ResponseService {
  
  	async create(res, content, code = 200) {  		
    	let response = res.status(code).send(content)
    	return response
  	}

  	async message(res, message, code = 200) {
  		const content = {
        code: code,
  			message: message
  		}
  		return await this.create(res, content, code)
  	}

  	async error(res, message, code = 400) {
  		return await this.message(res, message, code)
  	}
}

module.exports = ResponseService