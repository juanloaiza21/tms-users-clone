const express = require("express");
const app = express();

//enviroments
  require("dotenv").config();
//routes

app.get('/', (req, res) => {
  res.status(200).json({message: 'Api Create Micro Services!'});
});

module.exports = app;