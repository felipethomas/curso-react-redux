const express = require('express')
const server = express()
const router = require('./ex05-routes')

server.use('/api', router)

server.listen(3000, () => console.log('Executando...'))