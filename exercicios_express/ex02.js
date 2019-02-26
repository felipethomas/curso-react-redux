const express = require('express')
const server = express()

server.get('/', function (req, res, next) {
    console.log('Início...')
    next()
    console.log('Fim...')
})

server.get('/', function (req, res) {
    console.log('Resposta...')
    res.send('<h1>Olá Express!</h1>')
    console.log('(send chamado)')
})

server.listen(3000, () => console.log('Executando...'))