'use strict'

const moment = require('moment')

/*	'main' = 'express'

			- handles deferred arguments, which
			are date string validation queries.
*/
module.exports = main => {

	main.get('/:query', (request, response) => {
		let q = request.params.query
		response.send('You requested ' + q)
	})

}
