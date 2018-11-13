const express = require('express')
const router = express.Router()
// Router variables that should match the controller
const { list,show,create,update,remove } = require('../controllers/cashController')
const { isAuth } = require('../services/token')

// Use whatever method you need (get, post, etc)
router.get('/cash', isAuth, list)
router.get('/cash/:id', isAuth, show)
router.post('/cash', isAuth, create)
router.put('/cash/:id', isAuth, update)
router.delete('/cash/:id', isAuth, remove)

module.exports = router