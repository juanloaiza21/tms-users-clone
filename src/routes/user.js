const express = require("express");
const router = express.Router();
const controllers =  require('../controllers/controllers')
const { userRules }= require (`../models/user`)
const {checkSchema} = require('express-validator');
 
router.post('/preregister',checkSchema(userRules),controllers.registerUser);
// router.post('/preregister',controllers.preregister);
router.post('/recovery',controllers.recoveryPassword);
// router.post('/login',controllers.login);

module.exports = router;