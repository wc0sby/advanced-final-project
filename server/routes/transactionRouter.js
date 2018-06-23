const express = require('express')
const router = express.Router()
// Router variables that should match the controller
const { list,show,create,update,remove } = require('../controllers/transactionController')

// Use whatever method you need (get, post, etc)
router.get('/transaction', list)
router.get('/transaction/:id', show)
router.post('/transaction', create)
router.put('/transaction/:id', update)
router.delete('/transaction/:id', remove)

module.exports = router