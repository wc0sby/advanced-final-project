const mon = require('mongoose')

const schema = new mon.Schema({
  category:{
    required: true,
    type: String
  },
  isIncome:{
    required: true,
    type: Boolean
  }
})

module.exports = schema