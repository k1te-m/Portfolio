const express = require("express");

const router = express.Router();

router.get("/", function(req, res) {
    res.render("index");
})

router.get("/contact", function(req, res) {
    res.render("contact");
})

router.get("/portfolio", function(req, res) {
    res.render("portfolio");
})

module.exports = router;