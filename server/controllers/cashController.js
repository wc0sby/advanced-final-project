// Connect to data (i.e. Model)
const Cash = require('../models/cashModel')

module.exports.list = ((req,res)=>{
  const { year, month } = req.params
  const startDt = new Date(year,Number(month),1)
  const endDt = new Date(year,Number(month)+1,0)  
  Cash.find({
    "userID": req.userId,
    "date":{"$gte": startDt, "$lt": endDt}
  }).exec()
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
  const newTRX = new Cash({
    name: req.body.name,
    amount: req.body.amount,
    date: req.body.date,
    category: req.body.category,
    budgeted: req.body.budgeted,
    cleared: req.body.cleared,
    userID: req.userId
  })
  newTRX.save()
  .then(savedTRX=>{
    res.json(savedTRX)
  })
})

module.exports.update = ((req, res)=>{
  const newCash = {
    name: req.body.name,
    amount: req.body.amount,
    date: req.body.date,
    category: req.body.category,
    budgeted: req.body.budgeted,
    cleared: req.body.cleared,
    userID: req.userId
  }
  Cash.updateOne({_id:req.params.id},
    newCash
    ).exec()
  .then(transaction=>{
    res.json(transaction)
  })
})

module.exports.remove = ((req, res)=>{
  console.log(req.params.id)
  Cash.deleteOne({_id:req.params.id}).exec()
  .then(transaction=>{
  res.json(transaction)
  })
})