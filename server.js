'use strict'

const path = require('path')
const express = require('express'),
			app = express()

const timeStamp = require('./service.js')

// server variables
var port = process.env.PORT || 3000
var message = 'Server listening on port ' + port + ' . . .'

// set public directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.render('index.html')
})

// import 'timestamp.js' logic
timeStamp(app)

// start server
app.listen(port, ()=>{ console.log(message) })
