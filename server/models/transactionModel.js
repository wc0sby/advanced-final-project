const mon = require('mongoose')

const schema = require('../schemas/transactionSchema')

module.exports = mon.model('Transaction',schema)