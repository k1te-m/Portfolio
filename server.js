// Dependencies
const express = require("express");


// Set up Express App
const app = express();
const router = express.Router();

router.use(express.static("public"));
let PORT = process.env.PORT || 8080;

const db = require("./models");

// Express Parsing Set-up
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// Handlebars Set-up
const exphbs = require("express-handlebars");

router.engine("handlebars", exphbs({defaultLayout: "main"}))
router.set("view engine", "handlebars");



