const express = require("express");

const router = express.Router();

const db = require("../models");

router.get("/", function (req, res) {
  res.render("index");
});

router.get("/contact", function (req, res) {
  res.render("contact");
});

router.get("/portfolio", function (req, res) {
  db.Repo.findAll({}).then((results) => {
    let repos = [];
    for (let index = 0; index < results.length; index++) {
      repos.push(results[index].dataValues);
    }
    console.log(repos);
    res.render("portfolio", { layout: "main", repos });
  });
});

router.post("/contact/add", function (req, res) {
  db.Message.create(req.body)
    .then((results) => {
      res.json(results);
      console.log("Message Sent...");
    })
    .catch(function () {
      console.log("Error... Please Try Again...");
    });
});

module.exports = router;
