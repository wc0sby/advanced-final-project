// Connect to data (i.e. Model)
const Trans = require('../models/transactionModel')
const JWTService = require('../services/token')

module.exports.list = ((req,res)=>{
  const authUserID = JWTService.decodeJWT(req.headers.authorization)
  Trans.find({"userID": authUserID.userId}).exec()
  .then(transactions=>{
    res.json(transactions)
  })
})

//Filter list by userID -- still need userID

module.exports.show = ((req, res)=>{
  Trans.findById({_id:req.params.id}).exec()
  // filter method for transactions by userID
  .then(transaction=>{
    res.json(transaction)
  })
})

module.exports.create = ((req, res)=>{
  const authUserID = JWTService.decodeJWT(req.headers.authorization)
  const newTRX = new Trans({
    name: req.body.name,
    amount: req.body.amount,
    date: req.body.date,
    category: req.body.category,
    budgeted: req.body.budgeted,
    cleared: req.body.cleared,
    userID: authUserID.userId
  })
  newTRX.save()
  .then(savedTRX=>{
    res.json(savedTRX)
  })
})

module.exports.update = ((req, res)=>{
  const authUserID = JWTService.decodeJWT(req.headers.authorization)
  const newTRX = {
    name: req.body.name,
    amount: req.body.amount,
    date: req.body.date,
    category: req.body.category,
    budgeted: req.body.budgeted,
    cleared: req.body.cleared,
    userID: authUserID.userId
  }
  Trans.updateOne({_id:req.params.id},
    newTRX
    ).exec()
  .then(transaction=>{
    res.json(transaction)
  })
})

module.exports.remove = ((req, res)=>{
  Trans.deleteOne({_id:req.params.id}).exec()
  .then(transaction=>{
  res.json(transaction)
  })
})