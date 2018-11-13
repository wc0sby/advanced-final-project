const express = require('express')
const router = express.Router()
// Router variables that should match the controller
const { list,show,create,update,remove } = require('../controllers/transactionController')
const { isAuth } = require('../services/token')


// Use whatever method you need (get, post, etc)
router.get('/transaction', isAuth,  list)
router.get('/transaction/:id', isAuth, show)
router.post('/transaction', isAuth, create)
router.put('/transaction/:id', isAuth, update)
router.delete('/transaction/:id', isAuth, remove)

module.exports = router


/*
  What's going on:
  1. create a route for communication between server and client
  2. check for auth token from client request (headers:{authorization})
  3. when request is made and JWT is present, then execute action

*/