const express = require('express')
const router = express.Router()
// Router variables that should match the controller
const { list,show,create,update,remove } = require('../controllers/cashController')

// Use whatever method you need (get, post, etc)
router.get('/cash', list)
router.get('/cash/:id', show)
router.post('/cash', create)
router.put('/cash/:id', update)
router.delete('/cash/:id', remove)

module.exports = router