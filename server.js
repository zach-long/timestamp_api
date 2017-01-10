'use strict'

const express = require('express'),
			app = express()

const timeStamp = require('./service.js')

// server variables
var port = process.env.PORT || 3000
var message = 'Server listening on port ' + port + ' . . .'

var welcomeMessage = "Welcome. If you're accessing this directly instead of utilzing it as an API, just append a date to the root url to verify and convert it."

// set default root response
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs')

app.get('/', (request, response) => {
	response.render('index.html')
})

// import 'timestamp.js' logic
timeStamp(app)

// start server
app.listen(port, ()=>{ console.log(message) })
