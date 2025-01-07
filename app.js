var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const {sequelize} = require('./models');

var userRoutes = require("./routes/user.routes");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());


app.use("/users", userRoutes);

sequelize.authenticate()
    .then(() => {
        console.log('Database connected...');
    })
    .catch((error) => {
        console.error('Error connecting to the database:', error);
    });

module.exports = app;
