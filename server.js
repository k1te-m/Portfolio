// Dependencies
const express = require("express");


// Set up Express App
const app = express();

// Static Directory
app.use(express.static("public"));

// Port Set-up
let PORT = process.env.PORT || 8080;

const db = require("./models");

// Express Parsing Set-up
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handlebars Set-up
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}))
app.set("view engine", "handlebars");

// Routes
const routes = require("./controller/controller.js");
app.use(routes);


db.sequelize.sync().then(app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
}));

