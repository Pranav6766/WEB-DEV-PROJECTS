const express = require("express");
const hostRouter = express.Router();
const { getAddHome, homeAdded ,getHostHomes} = require("../controllers/hostController");
hostRouter.get("/add-home", getAddHome);
hostRouter.post("/add-home", homeAdded);
hostRouter.get("/hostHomeList", getHostHomes);
module.exports = {
  hostRouter,
};
