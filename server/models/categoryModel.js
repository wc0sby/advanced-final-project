const mon = require('mongoose')

const schema = require('../schemas/categorySchema')

module.exports = mon.model('Category',schema)