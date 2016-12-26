'use strict'

const express = require('express'),
			app = express()

const service = require('./service.js')

app.get('/', (request, response) => {
	response.send("Welcome")
})

app.listen(3000)
