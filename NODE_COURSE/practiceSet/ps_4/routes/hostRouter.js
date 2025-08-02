const express = require("express");
const hostRouter = express.Router();
const path = require("path");
const rootDir = require("../util/pathUtil");
hostRouter.get("/contact-us", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "formFill.html"));
});
hostRouter.post("/contact-us", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(rootDir, "views", "success.html"));
});
module.exports = hostRouter;
