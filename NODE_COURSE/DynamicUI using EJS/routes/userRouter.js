const express = require("express");
const userRouter = express.Router();
const path = require("path");
const {registeredHomes} = require('./hostRouter')
const rootDir = require("../util/pathUtil");//becomes absolute path

//for ejs file we use render function and no path is required.
userRouter.get("/", (req, res, next) => {
  // console.log(registeredHomes);
  // res.sendFile(path.join(rootDir, "views", "home.html"));
  res.render('home', {registeredHomes: registeredHomes, pageTitle: 'Home'}); //ejs file name , variable pass krna
});

module.exports = userRouter;
