var express = require('express')
var server = express()

var trenton = require('./me.json')

server.get('/', function (request, response) {
  response.send('Go to /trenton to find out more about me!')
})

server.get('/trenton', function (request, response) {
  response.json(trenton)
})

server.get('*', function (request, response) {
  response.status(400)
  response.send('Error! This is not the page you are looking for')
})


server.listen(8080)
