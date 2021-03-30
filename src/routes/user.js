const express = require("express");
const router = express.Router();
const controllers =  require('../controllers/controllers')
const {checkSchema} = require('express-validator');
const userValidator= require(`../validation/userValidation`)
 
router.post('/register',controllers.registerUser);
// router.post('/preregister',controllers.preregister);

router.post('/recovery',checkSchema(userValidator.resetPasswordRules),controllers.recoveryPassword);
// router.post('/login',controllers.login);

module.exports = router;