const express = require("express");
const hostRouter = express.Router();
const path = require("path");
const rootDir = require("../util/pathUtil");

//a single .js file cannot have more than one module.exports = ... statement that work independently, because each new assignment overwrites the previous one.

hostRouter.get("/add-home", (req, res, next) => {
  res.render("add-home", { pageTitle: "Add Home" });
});
const registeredHomes = [];
hostRouter.post("/add-home", (req, res, next) => {
  console.log(req.body);
  registeredHomes.push(req.body);
  res.render("success", { pageTitle: "airbnb" });
});

module.exports = {
  hostRouter,
  registeredHomes,
};
//module.exports = { add, subtract };
//is same as
/*module.exports = {
  add: add,
  subtract: subtract
};*/
