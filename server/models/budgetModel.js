const mon = require('mongoose')

const schema = require('../schemas/budgetSchema')

module.exports = mon.model('Budget',schema)