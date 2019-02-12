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
  },
  userID:{
    required: true,
    type: String
  },
  postDate:{
    type: Date
  },
  updateDate:{
    type: Date
  }
})

module.exports = schema