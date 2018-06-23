const express = require('express')
const router = express.Router()
const { list,show,create,update,remove } = require('../controllers/categoryController')

router.get('/category', list)
router.get('/category/:id', show)
router.post('/category', create)
router.put('/category/:id', update)
router.delete('/category/:id', remove)

module.exports = router