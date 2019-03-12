/** Valores para teste no postman:
 * nome:Janeiro/17
 * mes:1
 * ano:2017
 * creditos[0][nome]:Salário empresa
 * creditos[0][valor]:6500
 * creditos[1][nome]:Salário professor
 * creditos[1][valor]:2700
 * debitos[0][nome]:Telefone
 * debitos[0][valor]:89.26
 * debitos[0][status]:PAGO
 * debitos[1][nome]:Condomínio
 * debitos[1][valor]:720
 * debitos[1][status]:AGENDADO
 */

const restful = require('node-restful')
const mongoose = restful.mongoose

const creditoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    valor: {
        type: Number,
        min: 0,
        required: true
    }
})

const debitoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    valor: {
        type: Number,
        min: 0,
        required: [true, 'Informe o valor do débito!']
    },
    status: {
        type: String,
        required: false,
        uppercase: true,
        enum: ['PAGO', 'PENDENTE', 'AGENDADO']
    }
})

const cicloPagamentoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    mes: {
        type: Number,
        min: 0,
        max: 12,
        required: true
    },
    ano: {
        type: Number,
        min: 1970,
        max: 2100,
        required: true
    },
    creditos: [creditoSchema],
    debitos: [debitoSchema]
})

module.exports = restful.model('CicloPagamento', cicloPagamentoSchema)