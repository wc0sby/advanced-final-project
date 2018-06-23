const express = require('express')
const router = express.Router()
// Router variables that should match the controller
const { list,show,create,update,remove } = require('../controllers/budgetController')

// Use whatever method you need (get, post, etc)
router.get('/budget', list)
router.get('/budget/:id', show)
router.post('/budget', create)
router.put('/budget/:id', update)
router.delete('/budget/:id', remove)

module.exports = router