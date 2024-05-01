const express = require("express");
const {verifyLoginHome} = require('../controllers/loginControllers')

const router = express.Router();

router.post('/home', verifyLoginHome)

module.exports = router