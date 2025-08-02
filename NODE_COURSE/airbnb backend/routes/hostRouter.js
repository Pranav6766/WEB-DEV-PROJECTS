const express = require("express");
const hostRouter = express.Router();
const path = require("path");
const rootDir = require('../util/pathUtil')
hostRouter.get("/add-home", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-home.html"));
});
hostRouter.post("/add-home", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(rootDir, "views", "success.html"));
  //"../" → Moves one directory up from the current folder.
  //__dirname points to current directory.
});

module.exports = hostRouter;
