// Connect to data (i.e. Model)
const Budget = require('../models/budgetModel')

module.exports.list = ((req,res)=>{
  Budget.find({}).exec()
  .then(budgetItems=>{
    res.json(budgetItems)
  })
})

module.exports.show = ((req, res)=>{
  Trans.findById({_id:req.params.id}).exec()
  .then(budgetItems=>{
    res.json(budgetItems)
  })
})

//This will need to be updated for the new data structure
module.exports.create = ((req, res)=>{
  const newBudgetItem = new Budget({
    name: req.body.name,
    amount: req.body.amount,
    date: req.body.date,
    category: req.body.category
  })
  newBudgetItem.save()
  .then(savedTRX=>{
    res.json(savedTRX)
  })
})

module.exports.update = ((req, res)=>res.json({theId: req.params.id}))

module.exports.remove = ((req, res)=>res.json({}))