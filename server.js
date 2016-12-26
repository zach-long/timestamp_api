'use strict'

const express = require('express'),
			app = express()

const timeStamp = require('./service.js')

// server variables
var port = process.env.port || 8080
var message = 'Server listening on port ' + port + ' . . .'

var welcomeMessage = "Welcome. If you're accessing this directly instead of utilzing it as an API, just append a date to the root url to verify and convert it."

// set default root handling
app.get('/', (request, response) => {
	response.send(welcomeMessage)
})

// import 'timestamp.js' logic
timeStamp(app)

// start server
app.listen(port, ()=>{ console.log(message) })
