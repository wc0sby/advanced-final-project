const express = require("express");
const {create, getSession} = require( "../controllers/SessionController");
const { isAuth } = require('../services/token')
const router = express.Router();

router.post("/sessions", create);
router.get("/sessions", isAuth, getSession)

module.exports = router;
