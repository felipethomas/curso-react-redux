const CicloPagamento = require('./cicloPagamento')
const errorHandler = require('../common/errorHandler')

CicloPagamento.methods(['get', 'post', 'put', 'delete'])
CicloPagamento.updateOptions({ new: true, runValidators: true })
CicloPagamento.after('post', errorHandler).after('put', errorHandler)

CicloPagamento.route('count', (req, res, next) => {
    CicloPagamento.count((error, value) => {
        if (error) {
            res.status(500).json({ errors: [error] })
        } else {
            res.json({ value })
        }
    })
})

CicloPagamento.route('summary', (req, res, next) => {
    const cursor = CicloPagamento.aggregate()
        .project({ credito: { $sum: "$creditos.valor" }, debito: { $sum: "$debitos.valor" } })
        .group({ _id: null, credito: { $sum: "$credito" }, debito: { $sum: "$debito" } })
        .project({ _id: 0, credito: 1, debito: 1 })
        .cursor()
        .exec()

    cursor.get((error, result) => {
        if (error) {
            res.status(500).json({ errors: [error] })
        } else {
            res.json(result[0] || { credito: 0, debito: 0 })
        }
    })
})

module.exports = CicloPagamento