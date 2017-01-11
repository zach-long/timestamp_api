'use strict'

const path = require('path')
const express = require('express'),
			app = express()

const timeStamp = require('./app/app.js')

// set public directory
app.use(express.static(path.join(__dirname, 'public')))

// the app
app.use('/', timeStamp)

// start server
var port = process.env.PORT || 3000
var message = 'Server listening on port ' + port + ' . . .'
app.listen(port, ()=>{ console.log(message) })
