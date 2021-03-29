const express = require("express");
const router = express.Router();
//const controllers =  require('../controllers/controllers')
 
router.post('/',(req, res) =>{
    res.json('beta')
})
module.exports = router;