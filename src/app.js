const express = require("express");
const app = express();
const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load('./docs/swagger.yml');

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use('/auth', authRoutes);
app.use('/users', userRoutes);


module.exports = app;