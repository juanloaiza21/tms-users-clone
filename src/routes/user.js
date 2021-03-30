const express = require("express");
const router = express.Router();
const controllers =  require('../controllers/controllers')
const { userRules, newUser }= require (`../models/user`)
const {checkSchema} = require('express-validator');
const {getDataNoResponse} = require (`../libs/firebase`);
 
router.post('/preregister',checkSchema(userRules),controllers.registerUser);
router.post('/register',checkSchema(newUser),controllers.preregister);
router.post('/recovery',controllers.recoveryPassword);
router.post(`/prueba`, checkSchema(compareData), controllers.compareData)
// router.post('/login',controllers.login);

module.exports = router;