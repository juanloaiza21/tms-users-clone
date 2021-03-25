const express = require("express");
const app = express();
const userRoutes = require ("./routes/userRoutes");
const bodyParser= require ("body-parser")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//enviroments
  require("dotenv").config();
//routes
app.get('/', (req, res) => {
  res.status(200).json({message: 'Api Create Micro Services!'});
});
//user/create
app.use("/user", userRoutes)


module.exports = app;