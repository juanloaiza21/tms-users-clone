const express = require("express");
const app = express();


app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");

app.use('/auth', authRoutes);
app.use('/users', userRoutes);


module.exports = app;