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

module.exports.update = ((req, res)=>res.json({theId: req.params.id}))

module.exports.remove = ((req, res)=>res.json({}))