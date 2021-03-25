const mongoose = require("mongoose");

const schema = mongoose.Schema({
	NIT: String,
    Nombre: String,
    Direccion: String,
    Email: String,
    Tel: String,
    kindUser: String,
})

module.exports = mongoose.model("comiagrousers", schema);