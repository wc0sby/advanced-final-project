// Connect to data (i.e. Model)
const Budget = require('../models/budgetModel')
const JWTService = require('../services/token')

module.exports.list = ((req,res)=>{
  const authUserID = JWTService.decodeJWT(req.headers.authorization)
  Budget.find({"userID": authUserID.userId}).exec()
  .then(budgetItems=>{
    res.json(budgetItems)
  })
})

module.exports.show = ((req, res)=>{
  Budget.findById({_id:req.params.id}).exec()
  .then(budgetItems=>{
    res.json(budgetItems)
  })
})

//This will need to be updated for the new data structure
module.exports.create = ((req, res)=>{
  const authUserID = JWTService.decodeJWT(req.headers.authorization)
  const newBudgetItem = new Budget({
    name: req.body.name,
    amount: req.body.amount,
    type: req.body.type,
    userID: authUserID.userId
  })
  newBudgetItem.save()
  .then(savedTRX=>{
    res.json(savedTRX)
  })
})

module.exports.update = ((req, res)=>{
  const authUserID = JWTService.decodeJWT(req.headers.authorization)
  const newBudgetItem = {
    name: req.body.name,
    amount: req.body.amount,
    type: req.body.type,
    userID: authUserID.userId
  }
  Budget.updateOne({_id:req.params.id},
    newBudgetItem
    ).exec()
  .then(transaction=>{
    res.json(transaction)
  })
})

module.exports.remove = ((req, res)=>{
  Budget.deleteOne({_id:req.params.id}).exec()
  .then(transaction=>{
  res.json(transaction)
  })
})