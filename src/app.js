const express = require("express");
const app = express();
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("dotenv").config();

app.get('/', (req, res) => {res.status(200).json({ message: 'Api Create Micro Services!' });});

//routes
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");

//endpoints
app.use("/user", userRoute);
app.use('/auth', authRoute);


module.exports = app;