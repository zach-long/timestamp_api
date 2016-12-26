'use strict'

const express = require('express'),
			app = express()

const timeStamp = require('./service.js')

// server variables
var port = 3000
var message = 'Server listening on port ' + port + '. . .'

// set default root handling
app.get('/', (request, response) => {
	response.send("Welcome")
})

// import 'timestamp.js' logic
timeStamp(app)

// start server
app.listen(port, message => { console.log(message) })
