// Connect to data (i.e. Model)
const Category = require('../models/categoryModel')

module.exports.list = ((req,res)=>{
  Category.find({}).exec()
  .then(categories=>{
    res.json(categories)
  })
})

module.exports.show = ((req, res)=>{
  Category.findById({_id:req.params.id}).exec()
  .then(category=>{
    res.json(category)
  })
})

module.exports.create = ((req, res)=>{
  const newCategory = new Category({
    category: req.body.category,
    isIncome: req.body.isIncome
  })
  newCategory.save()
  .then(savedCategory=>{
    res.json(savedCategory)
  })
})

module.exports.update = ((req, res)=>{
  const newCategory = {
    category: req.body.category,
    isIncome: req.body.isIncome
  }
  Category.updateOne({_id:req.params.id},
    newCategory
    ).exec()
  .then(category=>{
    res.json(category)
  })
})


module.exports.remove = ((req, res)=>{
  Category.deleteOne({_id:req.params.id}).exec()
  .then(transaction=>{
  res.json(transaction)
  })
})