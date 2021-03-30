const express = require("express");
const router = express.Router();
const controllers =  require('../controllers/controllers')
const {validate} = require(`../models/validation/validate`);
const {userRules, resetPasswordRules}= require (`../models/validation/userValidation`)
 
router.post('/register',userRules(),validate,controllers.registerUser);
// router.post('/preregister',controllers.preregister);
router.post('/recovery',controllers.recoveryPassword);
// router.post('/login',controllers.login);

module.exports = router;