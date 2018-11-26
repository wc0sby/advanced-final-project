const express = require('express')
const router = express.Router()
// Router variables that should match the controller
const { list,show,create,update,remove } = require('../controllers/budgetController')
const { isAuth } = require('../services/token')

// Use whatever method you need (get, post, etc)
router.get('/budget/:month/:year', isAuth, list)
router.get('/budget/:id', isAuth, show)
router.post('/budget', isAuth, create)
router.put('/budget/:id', isAuth, update)
router.delete('/budget/:id', isAuth, remove)

module.exports = router