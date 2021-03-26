const express = require("express");
const router = express.Router();

const User = require('../models/models');
const { route } = require("./auth");

router.post("/create", async (req, res) => {
	try {
        const post = new User({
        Email: req.body.email,
        NIT: req.body.nit,
        Nombre: req.body.Nombre,
        Direccion: req.body.direccion,
        Tel: req.body.tel,
        kinduser: req.body.tu,
        })
        await post.save()
        res.status(200).send({message: "Usuario creado"})       
        } catch (error) {
        console.log(error);
        res.status(401).json("Error")
        }
});

router.post('/login',(req, res) => {
        //este daniel
        let user =  req.user
        let password = req.password 
});

router.post('/preregister',(req, res) => {
        // este es el que debe hacer juan
});

router.post('/resetpassword',(req, res) => {
        //este daniel
});

module.exports = router;