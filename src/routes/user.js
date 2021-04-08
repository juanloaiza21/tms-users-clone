const express = require("express");
const router = express.Router();
const controllers =  require('../controllers/controllers')
const { userRules, newUser, resetPasswordRules, loginRules }= require (`../models/user`)
const {checkSchema} = require('express-validator');
const fileUpload = require('express-fileupload');


router.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));


 
router.post('/preregister',checkSchema(userRules),controllers.preregister);
router.post('/preregisterfiles',controllers.preregisterFiles);
router.post('/register',checkSchema(newUser),controllers.register);
router.post('/recovery',checkSchema(resetPasswordRules),controllers.recoveryPassword);
//router.post('/prueba', checkSchema(compareData), controllers.compareData)
router.post('/verification', checkSchema(loginRules), controllers.loginUser);

module.exports = router;