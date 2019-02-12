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
  },
  budgeted: {
    type: Boolean,
    required: false
  },
  userID: {
    type: String,
    required: true
  }
})

module.exports = schema