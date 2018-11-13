// Connect to data (i.e. Model)
const Cash = require('../models/cashModel')
const JWTService = require('../services/token')

module.exports.list = ((req,res)=>{
  const authUserID = JWTService.decodeJWT(req.headers.authorization)
  Cash.find({"userID": authUserID.userId}).exec()
  .then(cashes=>{
    res.json(cashes)
  })
})

module.exports.show = ((req, res)=>{
  Cash.findById({_id:req.params.id}).exec()
  .then(transaction=>{
    res.json(transaction)
  })
})

module.exports.create = ((req, res)=>{
  const authUserID = JWTService.decodeJWT(req.headers.authorization)
  console.log(authUserID)
  const newTRX = new Cash({
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
  const newCash = {
    name: req.body.name,
    amount: req.body.amount,
    date: req.body.date,
    category: req.body.category,
    budgeted: req.body.budgeted,
    cleared: req.body.cleared,
    userID: authUserID.userId
  }
  Cash.updateOne({_id:req.params.id},
    newCash
    ).exec()
  .then(transaction=>{
    res.json(transaction)
  })
})

module.exports.remove = ((req, res)=>{
  Cash.deleteOne({_id:req.params.id}).exec()
  .then(transaction=>{
  res.json(transaction)
  })
})