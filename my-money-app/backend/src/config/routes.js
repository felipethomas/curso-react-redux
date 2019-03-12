const express = require('express')

module.exports = function (server) {
    // URL base para todas as rotas
    const router = express.Router()
    server.use('/api', router)

    // Rotas de ciclo de pagamento
    const CicloPagamento = require('../api/cicloPagamento/cicloPagamentoService')
    CicloPagamento.register(router, '/ciclosPagamento')
}