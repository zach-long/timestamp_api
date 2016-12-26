'use strict'

const moment = require('moment')

/*	'main' = 'express'

			- handles deferred arguments, which
			are date string validation queries.
*/
module.exports = main => {

	main.get('/:query', (request, response) => {
		let query = request.params.query
		let output = {"natural": null, "unix": null}

		/* if: 				checks for non-Unix date match
			 else if: 	check for Unix date match
			 else:			no match found								*/
		if (moment(query).isValid()) {
			output.natural = moment(query).format('MMMM DD, YYYY')
			output.unix = moment(query).format('X')
		} else if (moment(Number(query)).isValid()) {
			let q = Number(query)
			output.natural = moment.unix(q).format('MMMM DD, YYYY')
			output.unix = q
		} else {
			alert('Invalid Date')
		}

		response.send(output)
	})

}
