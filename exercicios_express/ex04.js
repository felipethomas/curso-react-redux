const express = require('express')
const server = express()

server.route('/clientes')
    .get((req, res) => res.send('Lista clientes'))
    .post((req, res) => res.send('Novo clientes'))
    .put((req, res) => res.send('Altera clientes'))
    .delete((req, res) => res.send('Remove clientes'))

server.listen(3000, () => console.log('Executando...'))