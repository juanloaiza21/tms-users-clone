const express = require("express");
const router = express.Router();
const controllers =  require('../controllers/controllers')

router.post('/login',controllers.login);
router.post('/register',controllers.register);
router.post('/preregister',controllers.preregister);
router.post('/resetpassword', controllers.resetpassword);

module.exports = router;