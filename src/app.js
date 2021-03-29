const express = require("express");
const app = express();


app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

const appRoutes = require("./routes/auth");
const usersRoutes = require("./routes/user");

app.use('/auth', authRoutes);
app.use('/users', appRoutes);


module.exports = app;