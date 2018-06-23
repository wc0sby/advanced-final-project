const mon = require('mongoose')

const schema = new mon.Schema({
  name: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  cleared: {
    type: Boolean,
    required: false
  }
})

module.exports = schema