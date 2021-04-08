const express = require("express");
const router = express.Router();
const controllers =  require('../controllers/controllers')
const { userRules, newUser, resetPasswordRules, loginRules }= require (`../models/user`)
const {checkSchema} = require('express-validator');
 
router.post('/preregister',checkSchema(userRules),controllers.registerUser);
router.post('/register',checkSchema(newUser),controllers.preregister);
router.post('/recovery',checkSchema(resetPasswordRules),controllers.recoveryPassword);
//router.post('/prueba', checkSchema(compareData), controllers.compareData)
router.post('/login', checkSchema(loginRules), controllers.loginUser);

module.exports = router;