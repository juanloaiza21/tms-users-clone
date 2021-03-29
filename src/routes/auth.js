const express = require("express");
const router = express.Router();
const controllers =  require('../controllers/controllers')

router.post('/', controllers.example)

module.exports = router;