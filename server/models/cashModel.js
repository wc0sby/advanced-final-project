const mon = require('mongoose')

const schema = require('../schemas/cashSchema')

module.exports = mon.model('Cash',schema)