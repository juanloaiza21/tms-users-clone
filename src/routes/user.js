const express = require("express");
const router = express.Router();

const User = require('../models/models');


router.post('/login',(req, res) => {
        //este daniel
        let user =  req.user
        let password = req.password 
});

router.post('/preregister',async (req, res) => {
        try {
        const {email, nit, Nombre, direccion, tel, tu}= req.body
        const post = new User({ email, nit, Nombre, direccion, tel, tu})
        await post.save()
        res.status(200).send({message: "Usuario creado"})       
        } catch (error) {
        console.log(error);
        res.status(401).json("Error")
        }
});

router.post('/resetpassword',(req, res) => {
        //este daniel
});

module.exports = router;