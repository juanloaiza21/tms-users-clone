const express = require("express");
const router = express.Router();
const bodyParser = require ("body-parser")

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const User = require('../models/models');

router.post("/create", async (req, res) => {
	try {
        const post = new User({
        Email: req.body.email,
        NIT: req.body.nit,
        Nombre: req.body.Nombre,
        Direccion: req.body.direccion,
        Tel: req.body.tel,
        })
        await post.save()
        res.status(200).send({message: "Usuario creado"})       
        } catch (error) {
        console.log(error);
        res.status(401).json("Error")
        }
});

module.exports = router;