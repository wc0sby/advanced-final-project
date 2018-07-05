// Connect to data (i.e. Model)
const Trans = require('../models/transactionModel')

module.exports.list = ((req,res)=>{
  Trans.find({}).exec()
  .then(transactions=>{
    res.json(transactions)
  })
})

module.exports.show = ((req, res)=>{
  Trans.findById({_id:req.params.id}).exec()
  .then(transaction=>{
    res.json(transaction)
  })
})

module.exports.create = ((req, res)=>{
  const newTRX = new Trans({
    name: req.body.name,
    amount: req.body.amount,
    date: req.body.date,
    category: req.body.category,
    budgeted: req.body.budgeted,
    cleared: req.body.cleared
  })
  newTRX.save()
  .then(savedTRX=>{
    res.json(savedTRX)
  })
})

module.exports.update = ((req, res)=>{
  const newTRX = {
    name: req.body.name,
    amount: req.body.amount,
    date: req.body.date,
    category: req.body.category,
    budgeted: req.body.budgeted,
    cleared: req.body.cleared
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