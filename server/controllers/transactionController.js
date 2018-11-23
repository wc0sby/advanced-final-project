// Connect to data (i.e. Model)
const Trans = require('../models/transactionModel')

/*
  Methods for list, show, create, remove, and update are contained here.
  From the Routes folders, we are using express to perform get,post,put, or 
  delete actions.  The first arg of these defined methods takes a route, then
  each arg after are callbacks that are passed the req, res, and next arg.
  
  The first callback defined is isAuth, which takes the auth token from cookies
  and passes back to jwt for decode.  The decode then calls next and is available
  for the next method.  

  The last callback is the method/action that will occur when the user hits the
  defined route.  These callbacks are defined below
*/

module.exports.list = ((req,res)=>{
  console.log(req.userId)
  Trans.find({"userID": req.userId}).exec()
  .then(transactions=>{
    res.json(transactions)
  })
})

module.exports.show = ((req, res)=>{
  Trans.findById({_id:req.params.id}).exec()
  // filter method for transactions by userID
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
    cleared: req.body.cleared,
    userID: req.userId
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
    cleared: req.body.cleared,
    userID: req.userId
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