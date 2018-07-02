const mon = require('mongoose')

const schema = new mon.Schema({
  name:{
    required: true,
    type: String
  },
  amount:{
    required: true,
    type: Number
  },
  type:{
    required: true,
    type: String
  }
})

module.exports = schema